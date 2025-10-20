"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useIsAuthenticated } from "@/shared/hooks/client/use-is-authenticated"
import { FavoriteTeam, Team } from "@/shared/types/team"
import { apiClient } from "../client"

// Query keys
export const favoriteTeamsKeys = {
  all: ["favoriteTeams"] as const,
  lists: () => [...favoriteTeamsKeys.all, "list"] as const,
  check: (teamId: number) => [...favoriteTeamsKeys.all, "check", teamId] as const,
}

/**
 * Get user's favorite teams
 */
export function useFavoriteTeams() {
  const { isAuth } = useIsAuthenticated()

  return useQuery<FavoriteTeam[]>({
    queryKey: favoriteTeamsKeys.lists(),
    queryFn: async () => {
      if (!isAuth) {
        const favoriteTeams = localStorage.getItem("favoriteTeams")

        if (favoriteTeams) {
          return JSON.parse(favoriteTeams) as FavoriteTeam[]
        }

        return []
      }

      const response = await apiClient.GET("/user/favorite-teams")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as FavoriteTeam[]
    },
  })
}

/**
 * Check if team is favorite
 */
export function useCheckFavoriteTeam(teamId: number) {
  return useQuery({
    queryKey: favoriteTeamsKeys.check(teamId),
    queryFn: async () => {
      const response = await apiClient.GET("/user/favorite-teams/check/{teamId}", {
        params: { path: { teamId } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    enabled: !!teamId,
  })
}

/**
 * Add team to favorites
 */
export function useAddFavoriteTeam() {
  const { isAuth } = useIsAuthenticated()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (team: Team) => {
      if (!isAuth) {
        const favoriteTeams = localStorage.getItem("favoriteTeams")

        const newFavoriteTeam: FavoriteTeam = {
          id: Date.now(),
          userId: 0,
          teamId: team.id,
          addedAt: new Date().toISOString(),
          team: team,
        }

        const newFavoriteTeams = [
          newFavoriteTeam,
          ...(favoriteTeams ? (JSON.parse(favoriteTeams) as FavoriteTeam[]) : []),
        ]

        queryClient.setQueryData<FavoriteTeam[]>(favoriteTeamsKeys.lists(), newFavoriteTeams)
        localStorage.setItem("favoriteTeams", JSON.stringify(newFavoriteTeams))

        return
      }

      const response = await apiClient.POST("/user/favorite-teams/{teamId}", {
        params: { path: { teamId: team.id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onMutate: async (team: Team) => {
      if (!isAuth) {
        return { previousFavoriteTeams: JSON.parse(localStorage.getItem("favoriteTeams") ?? "[]") as FavoriteTeam[] }
      }

      await queryClient.cancelQueries({ queryKey: favoriteTeamsKeys.lists() })
      const previousFavoriteTeams = queryClient.getQueryData<FavoriteTeam[]>(favoriteTeamsKeys.lists())

      if (previousFavoriteTeams) {
        const newFavoriteTeam: FavoriteTeam = {
          id: Date.now(),
          userId: 0,
          teamId: team.id,
          addedAt: new Date().toISOString(),
          team: team,
        }

        queryClient.setQueryData<FavoriteTeam[]>(favoriteTeamsKeys.lists(), [newFavoriteTeam, ...previousFavoriteTeams])
      }

      return { previousFavoriteTeams }
    },
    onError: (err, team, context) => {
      if (context?.previousFavoriteTeams) {
        queryClient.setQueryData(favoriteTeamsKeys.lists(), context.previousFavoriteTeams)
      }
    },
    onSettled: (_, __, team) => {
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.check(team.id) })
    },
  })
}

/**
 * Remove team from favorites
 */
export function useRemoveFavoriteTeam() {
  const { isAuth } = useIsAuthenticated()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (team: Team) => {
      if (!isAuth) {
        const favoriteTeams = JSON.parse(localStorage.getItem("favoriteTeams") ?? "[]") as FavoriteTeam[]
        const updatedFavoriteTeams = favoriteTeams.filter((favoriteTeam) => favoriteTeam.teamId !== team.id)
        queryClient.setQueryData<FavoriteTeam[]>(favoriteTeamsKeys.lists(), updatedFavoriteTeams)
        localStorage.setItem("favoriteTeams", JSON.stringify(updatedFavoriteTeams))
        return
      }

      const response = await apiClient.DELETE("/user/favorite-teams/{teamId}", {
        params: { path: { teamId: team.id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    onMutate: async (team: Team) => {
      await queryClient.cancelQueries({ queryKey: favoriteTeamsKeys.lists() })

      const previousFavoriteTeams = queryClient.getQueryData<FavoriteTeam[]>(favoriteTeamsKeys.lists())

      if (previousFavoriteTeams) {
        const updatedFavoriteTeams = previousFavoriteTeams.filter((favoriteTeam) => favoriteTeam.teamId !== team.id)

        queryClient.setQueryData<FavoriteTeam[]>(favoriteTeamsKeys.lists(), updatedFavoriteTeams)
      }

      return { previousFavoriteTeams }
    },
    onError: (err, team, context) => {
      if (context?.previousFavoriteTeams) {
        queryClient.setQueryData(favoriteTeamsKeys.lists(), context.previousFavoriteTeams)
      }
    },
    onSettled: (_, __, team) => {
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.check(team.id) })
    },
  })
}

/**
 * Toggle team favorite status
 */
export function useToggleFavoriteTeam() {
  const addFavorite = useAddFavoriteTeam()
  const removeFavorite = useRemoveFavoriteTeam()

  return {
    toggleFavorite: async (team: Team, isFavorite: boolean) => {
      if (isFavorite) {
        return removeFavorite.mutateAsync(team)
      } else {
        return addFavorite.mutateAsync(team)
      }
    },
    toggleFavoriteOptimistic: (team: Team, isFavorite: boolean) => {
      if (isFavorite) {
        removeFavorite.mutate(team)
      } else {
        addFavorite.mutate(team)
      }
    },
    isPending: addFavorite.isPending || removeFavorite.isPending,
    isError: addFavorite.isError || removeFavorite.isError,
    error: addFavorite.error || removeFavorite.error,
  }
}

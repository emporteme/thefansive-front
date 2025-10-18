"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type FavoriteTeamOutputDto = components["schemas"]["FavoriteTeamOutputDto"]

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
  return useQuery({
    queryKey: favoriteTeamsKeys.lists(),
    queryFn: async () => {
      const response = await apiClient.GET("/user/favorite-teams")

      if (response.error) {
        throw response.error
      }

      return response.data
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

      if (response.error) {
        throw response.error
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
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (teamId: number) => {
      const response = await apiClient.POST("/user/favorite-teams/{teamId}", {
        params: { path: { teamId } },
      })

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: (_, teamId) => {
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.check(teamId) })
    },
  })
}

/**
 * Remove team from favorites
 */
export function useRemoveFavoriteTeam() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (teamId: number) => {
      const response = await apiClient.DELETE("/user/favorite-teams/{teamId}", {
        params: { path: { teamId } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    onSuccess: (_, teamId) => {
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: favoriteTeamsKeys.check(teamId) })
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
    toggleFavorite: async (teamId: number, isFavorite: boolean) => {
      if (isFavorite) {
        return removeFavorite.mutateAsync(teamId)
      } else {
        return addFavorite.mutateAsync(teamId)
      }
    },
    isPending: addFavorite.isPending || removeFavorite.isPending,
    isError: addFavorite.isError || removeFavorite.isError,
    error: addFavorite.error || removeFavorite.error,
  }
}

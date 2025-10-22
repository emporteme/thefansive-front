"use client"

import { useQuery } from "@tanstack/react-query"
import { SportType, SportTypeValue, Team } from "@/shared/types/team"
import { apiClient } from "../client"

// Query keys
export const teamsKeys = {
  all: ["teams"] as const,
  lists: () => [...teamsKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...teamsKeys.lists(), filters] as const,
  details: () => [...teamsKeys.all, "detail"] as const,
  detail: (id: string | number) => [...teamsKeys.details(), id] as const,
  search: (query: string) => [...teamsKeys.all, "search", query] as const,
  bySport: (sportType: string) => [...teamsKeys.all, "sport", sportType] as const,
  sportTypes: () => [...teamsKeys.all, "sport-types"] as const,
}

/**
 * Get all teams
 */
export function useTeams(params?: {
  page?: number
  limit?: number
  search?: string
  sportType?: SportTypeValue
  isActive?: boolean
}) {
  return useQuery<Team[]>({
    queryKey: teamsKeys.list(params),
    queryFn: async (): Promise<Team[]> => {
      const response = await apiClient.GET("/teams", {
        params: { query: params },
      })

      if (!response.data) {
        throw new Error("Failed to fetch teams")
      }

      return response.data as Team[]
    },
  })
}

/**
 * Search teams
 */
export function useSearchTeams(query: string) {
  return useQuery({
    queryKey: teamsKeys.search(query),
    queryFn: async () => {
      const response = await apiClient.GET("/teams/search", {
        params: { query: { q: query } },
      })

      if (!response.data) {
        throw new Error("Failed to search teams")
      }

      return response.data as Team[]
    },
    enabled: query.length > 0,
  })
}

/**
 * Get sports
 */
export function useSportTypes() {
  return useQuery({
    queryKey: teamsKeys.sportTypes(),
    queryFn: async () => {
      const response = await apiClient.GET("/teams/sport-types")

      if (!response.data) {
        throw new Error("Failed to fetch sports")
      }

      return response.data.sportTypes as SportType[]
    },
  })
}

/**
 * Get teams by sport type
 */
export function useTeamsBySport(sportType: string) {
  return useQuery({
    queryKey: teamsKeys.bySport(sportType),
    queryFn: async () => {
      const response = await apiClient.GET("/teams/sport/{sportType}", {
        params: { path: { sportType } },
      })

      if (!response.data) {
        throw new Error("Failed to fetch teams by sport")
      }

      return response.data
    },
    enabled: !!sportType,
  })
}

/**
 * Get team by ID
 */
export function useTeam(id: number) {
  return useQuery<Team>({
    queryKey: teamsKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/teams/{id}", {
        params: { path: { id } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data as Team
    },
    enabled: !!id,
  })
}

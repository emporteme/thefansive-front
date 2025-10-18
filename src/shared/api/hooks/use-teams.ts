"use client"

import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../client"

// Sport types from API
type SportType = "FOOTBALL" | "BASKETBALL" | "HOCKEY" | "VOLLEYBALL" | "TENNIS" | "RUGBY" | "BASEBALL" | "OTHER"

// Query keys
export const teamsKeys = {
  all: ["teams"] as const,
  lists: () => [...teamsKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...teamsKeys.lists(), filters] as const,
  details: () => [...teamsKeys.all, "detail"] as const,
  detail: (id: string | number) => [...teamsKeys.details(), id] as const,
  search: (query: string) => [...teamsKeys.all, "search", query] as const,
  bySport: (sportType: string) => [...teamsKeys.all, "sport", sportType] as const,
}

/**
 * Get all teams
 */
export function useTeams(params?: {
  page?: number
  limit?: number
  search?: string
  sportType?: SportType
  isActive?: boolean
}) {
  return useQuery({
    queryKey: teamsKeys.list(params),
    queryFn: async () => {
      const response = await apiClient.GET("/teams", {
        params: { query: params },
      })

      if (!response.data) {
        throw new Error("Failed to fetch teams")
      }

      return response.data
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

      return response.data
    },
    enabled: query.length > 0,
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
  return useQuery({
    queryKey: teamsKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/teams/{id}", {
        params: { path: { id } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!id,
  })
}

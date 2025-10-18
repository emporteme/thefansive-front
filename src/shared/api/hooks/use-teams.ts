"use client"

import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type TeamOutputDto = components["schemas"]["TeamOutputDto"]
type SportType = components["schemas"]["SportType"]

// Query keys
export const teamsKeys = {
  all: ["teams"] as const,
  lists: () => [...teamsKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...teamsKeys.lists(), filters] as const,
  details: () => [...teamsKeys.all, "detail"] as const,
  detail: (id: string | number) => [...teamsKeys.details(), id] as const,
  search: (query: string) => [...teamsKeys.all, "search", query] as const,
  bySport: (sportType: SportType) => [...teamsKeys.all, "sport", sportType] as const,
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

      if (response.error) {
        throw response.error
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
        params: { query: { query } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: query.length > 0,
  })
}

/**
 * Get teams by sport type
 */
export function useTeamsBySport(sportType: SportType) {
  return useQuery({
    queryKey: teamsKeys.bySport(sportType),
    queryFn: async () => {
      const response = await apiClient.GET("/teams/sport/{sportType}", {
        params: { path: { sportType } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!sportType,
  })
}

/**
 * Get team by ID
 */
export function useTeam(id: string | number) {
  return useQuery({
    queryKey: teamsKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/teams/{id}", {
        params: { path: { id: String(id) } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!id,
  })
}

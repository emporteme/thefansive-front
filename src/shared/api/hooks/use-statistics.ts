"use client"

import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type UserStatisticsOutputDto = components["schemas"]["UserStatisticsOutputDto"]
type LeaderboardOutputDto = components["schemas"]["LeaderboardOutputDto"]
type TopFansOutputDto = components["schemas"]["TopFansOutputDto"]

// Query keys
export const statisticsKeys = {
  all: ["statistics"] as const,
  me: () => [...statisticsKeys.all, "me"] as const,
  leaderboard: (filters?: Record<string, unknown>) => [...statisticsKeys.all, "leaderboard", filters] as const,
  topFans: (filters?: Record<string, unknown>) => [...statisticsKeys.all, "topFans", filters] as const,
  user: (userId: string | number) => [...statisticsKeys.all, "user", userId] as const,
}

/**
 * Get current user statistics
 */
export function useMyStatistics() {
  return useQuery({
    queryKey: statisticsKeys.me(),
    queryFn: async () => {
      const response = await apiClient.GET("/statistics/me")

      if (response.error) {
        throw response.error
      }

      return response.data
    },
  })
}

/**
 * Get leaderboard
 */
export function useLeaderboard(params?: { limit?: number; offset?: number }) {
  return useQuery({
    queryKey: statisticsKeys.leaderboard(params),
    queryFn: async () => {
      const response = await apiClient.GET("/statistics/leaderboard", {
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
 * Get top fans
 */
export function useTopFans(params?: { limit?: number; offset?: number }) {
  return useQuery({
    queryKey: statisticsKeys.topFans(params),
    queryFn: async () => {
      const response = await apiClient.GET("/statistics/top-fans", {
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
 * Get user statistics by ID
 */
export function useUserStatistics(userId: string | number) {
  return useQuery({
    queryKey: statisticsKeys.user(userId),
    queryFn: async () => {
      const response = await apiClient.GET("/statistics/{userId}", {
        params: { path: { userId: String(userId) } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!userId,
  })
}

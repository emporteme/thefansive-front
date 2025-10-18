"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type UpdateProfileDto = components["schemas"]["UpdateProfileDto"]
type CreateProfileDto = components["schemas"]["CreateProfileDto"]

// Inline types from schema
type UpdateSocialLinksDto = {
  twitter?: string
  instagram?: string
  facebook?: string
  youtube?: string
  tiktok?: string
}

type UpdateProfilePreferencesDto = {
  language?: string
  theme?: string
  notifications?: boolean
}

// Query keys
export const profileKeys = {
  all: ["profile"] as const,
  details: () => [...profileKeys.all, "detail"] as const,
  detail: (userId?: string | number) => [...profileKeys.details(), userId] as const,
  current: () => [...profileKeys.all, "current"] as const,
}

/**
 * Get current user's profile
 */
export function useProfile() {
  return useQuery({
    queryKey: profileKeys.current(),
    queryFn: async () => {
      const response = await apiClient.GET("/profile")

      if (response.error) {
        throw response.error
      }

      return response.data
    },
  })
}

/**
 * Get user profile by ID
 */
export function useUserProfile(userId: number) {
  return useQuery({
    queryKey: profileKeys.detail(userId),
    queryFn: async () => {
      const response = await apiClient.GET("/profile/{userId}", {
        params: { path: { userId } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!userId,
  })
}

/**
 * Create profile
 */
export function useCreateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateProfileDto) => {
      const response = await apiClient.POST("/profile", {
        body: data,
      })

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: profileKeys.current() })
    },
  })
}

/**
 * Update current user's profile
 */
export function useUpdateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateProfileDto) => {
      const response = await apiClient.PUT("/profile", {
        body: data,
      })

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: profileKeys.current() })
    },
  })
}

/**
 * Update profile social links
 */
export function useUpdateSocialLinks() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateSocialLinksDto) => {
      const response = await apiClient.PATCH("/profile/social-links", {
        body: data,
      })

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: profileKeys.current() })
    },
  })
}

/**
 * Update profile preferences
 */
export function useUpdateProfilePreferences() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateProfilePreferencesDto) => {
      const response = await apiClient.PATCH("/profile/preferences", {
        body: data,
      })

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: profileKeys.current() })
    },
  })
}

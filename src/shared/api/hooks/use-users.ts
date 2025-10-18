"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type CreateUserDto = components["schemas"]["CreateUserDto"]

// Query keys
export const usersKeys = {
  all: ["users"] as const,
  details: () => [...usersKeys.all, "detail"] as const,
  detail: (id: string | number) => [...usersKeys.details(), id] as const,
  profile: () => [...usersKeys.all, "profile"] as const,
}

/**
 * Get user by ID
 */
export function useUser(id: string | number) {
  return useQuery({
    queryKey: usersKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/users/{id}", {
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

/**
 * Get current user profile
 */
export function useCurrentUserProfile() {
  return useQuery({
    queryKey: usersKeys.profile(),
    queryFn: async () => {
      const response = await apiClient.GET("/users/profile")

      if (response.error) {
        throw response.error
      }

      return response.data
    },
  })
}

/**
 * Create new user
 */
export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateUserDto) => {
      const response = await apiClient.POST("/users", {
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
      queryClient.invalidateQueries({ queryKey: usersKeys.profile() })
    },
  })
}

/**
 * Delete user
 */
export function useDeleteUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string | number) => {
      const response = await apiClient.DELETE("/users/{id}", {
        params: { path: { id: String(id) } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.profile() })
    },
  })
}

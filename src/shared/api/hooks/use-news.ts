"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useIsAuthenticated } from "./use-auth"
import { apiClient } from "../client"
import type { components } from "../schema"

type NewsOutputDto = components["schemas"]["NewsOutputDto"]
type CreateNewsDto = components["schemas"]["CreateNewsDto"]
type UpdateNewsDto = components["schemas"]["UpdateNewsDto"]

// Query keys
export const newsKeys = {
  all: ["news"] as const,
  lists: () => [...newsKeys.all, "list"] as const,
  details: () => [...newsKeys.all, "detail"] as const,
  detail: (id: number) => [...newsKeys.details(), id] as const,
  personalized: () => [...newsKeys.all, "personalized"] as const,
}

/**
 * Get all news
 */
export function useNews(params: { limit?: number }) {
  return useQuery<NewsOutputDto[]>({
    queryKey: [...newsKeys.lists()],
    queryFn: async () => {
      const response = await apiClient.GET("/news", {
        params: {
          query: params,
        },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto[]
    },
  })
}

/**
 * Get news by ID
 */
export function useNewsById(id: number) {
  return useQuery<NewsOutputDto>({
    queryKey: newsKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/news/{id}", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto
    },
    enabled: !!id,
  })
}

/**
 * Get personalized news based on favorite teams (requires auth)
 */
export function usePersonalizedNews(params: { limit?: number }) {
  const { data: isAuthenticated } = useIsAuthenticated()

  return useQuery<NewsOutputDto[]>({
    queryKey: newsKeys.personalized(),
    queryFn: async () => {
      const response = await apiClient.GET("/news/personalized", {
        params: {
          query: params,
        },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto[]
    },
    enabled: !!isAuthenticated,
  })
}

/**
 * Create news (Admin only)
 */
export function useCreateNews() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateNewsDto) => {
      const response = await apiClient.POST("/news", {
        body: data,
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: newsKeys.lists() })
    },
  })
}

/**
 * Update news (Admin only)
 */
export function useUpdateNews() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateNewsDto }) => {
      const response = await apiClient.PUT("/news/{id}", {
        params: { path: { id } },
        body: data,
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: newsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: newsKeys.detail(data.id) })
    },
  })
}

/**
 * Delete news (Admin only)
 */
export function useDeleteNews() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.DELETE("/news/{id}", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: newsKeys.lists() })
      queryClient.removeQueries({ queryKey: newsKeys.detail(data.id) })
    },
  })
}

/**
 * Deactivate news (Admin only)
 */
export function useDeactivateNews() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.PATCH("/news/{id}/deactivate", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: newsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: newsKeys.detail(data.id) })
    },
  })
}

/**
 * Activate news (Admin only)
 */
export function useActivateNews() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.PATCH("/news/{id}/activate", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as NewsOutputDto
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: newsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: newsKeys.detail(data.id) })
    },
  })
}

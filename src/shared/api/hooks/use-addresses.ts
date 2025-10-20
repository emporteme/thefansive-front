"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type CreateAddressDto = components["schemas"]["CreateAddressDto"]
type UpdateAddressDto = components["schemas"]["UpdateAddressDto"]

// Query keys
export const addressesKeys = {
  all: ["addresses"] as const,
  lists: () => [...addressesKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...addressesKeys.lists(), filters] as const,
  details: () => [...addressesKeys.all, "detail"] as const,
  detail: (id: number) => [...addressesKeys.details(), id] as const,
}

/**
 * Get user's addresses
 */
export function useAddresses() {
  return useQuery({
    queryKey: addressesKeys.lists(),
    queryFn: async () => {
      const response = await apiClient.GET("/addresses")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get address by ID
 */
export function useAddress(id: number) {
  return useQuery({
    queryKey: addressesKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/addresses/{id}", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    enabled: !!id,
  })
}

/**
 * Create new address
 */
export function useCreateAddress() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateAddressDto) => {
      const response = await apiClient.POST("/addresses", {
        body: data,
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressesKeys.lists() })
    },
  })
}

/**
 * Update address
 */
export function useUpdateAddress() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateAddressDto }) => {
      const response = await apiClient.PUT("/addresses/{id}", {
        params: { path: { id } },
        body: data,
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: addressesKeys.detail(variables.id) })
      queryClient.invalidateQueries({ queryKey: addressesKeys.lists() })
    },
  })
}

/**
 * Delete address
 */
export function useDeleteAddress() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.DELETE("/addresses/{id}", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressesKeys.lists() })
    },
  })
}

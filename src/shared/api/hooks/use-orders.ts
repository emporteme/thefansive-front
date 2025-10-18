"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type CreateOrderDto = components["schemas"]["CreateOrderDto"]
type OrderOutputDto = components["schemas"]["OrderOutputDto"]
type OrderStatus = components["schemas"]["OrderStatus"]

// Query keys
export const ordersKeys = {
  all: ["orders"] as const,
  lists: () => [...ordersKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...ordersKeys.lists(), filters] as const,
  details: () => [...ordersKeys.all, "detail"] as const,
  detail: (id: string | number) => [...ordersKeys.details(), id] as const,
  my: () => [...ordersKeys.all, "my"] as const,
}

/**
 * Get user's orders
 */
export function useMyOrders(params?: { page?: number; limit?: number; status?: OrderStatus }) {
  return useQuery({
    queryKey: ordersKeys.list(params),
    queryFn: async () => {
      const response = await apiClient.GET("/orders/my", {
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
 * Get order by ID
 */
export function useOrder(id: string | number) {
  return useQuery({
    queryKey: ordersKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/orders/{id}", {
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
 * Create new order
 */
export function useCreateOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateOrderDto) => {
      const response = await apiClient.POST("/orders", {
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
      queryClient.invalidateQueries({ queryKey: ordersKeys.my() })
      queryClient.invalidateQueries({ queryKey: ordersKeys.lists() })
    },
  })
}

/**
 * Cancel order
 */
export function useCancelOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string | number) => {
      const response = await apiClient.PATCH("/orders/{id}/cancel", {
        params: { path: { id: String(id) } },
      })

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ordersKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: ordersKeys.my() })
      queryClient.invalidateQueries({ queryKey: ordersKeys.lists() })
    },
  })
}

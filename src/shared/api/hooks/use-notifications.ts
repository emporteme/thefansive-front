"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"

// Query keys
export const notificationsKeys = {
  all: ["notifications"] as const,
  lists: () => [...notificationsKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...notificationsKeys.lists(), filters] as const,
  details: () => [...notificationsKeys.all, "detail"] as const,
  detail: (id: number) => [...notificationsKeys.details(), id] as const,
  unreadCount: () => [...notificationsKeys.all, "unreadCount"] as const,
}

/**
 * Get user's notifications
 */
export function useNotifications(params?: { page?: number; limit?: number; isRead?: boolean }) {
  return useQuery({
    queryKey: notificationsKeys.list(params),
    queryFn: async () => {
      const response = await apiClient.GET("/notifications", {
        params: { query: params },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get unread notifications count
 */
export function useUnreadNotificationsCount() {
  return useQuery({
    queryKey: notificationsKeys.unreadCount(),
    queryFn: async () => {
      const response = await apiClient.GET("/notifications/unread-count")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get notification by ID
 */
export function useNotification(id: number) {
  return useQuery({
    queryKey: notificationsKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/notifications/{id}", {
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
 * Mark notification as read
 */
export function useMarkNotificationRead() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.PATCH("/notifications/{id}/read", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: notificationsKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: notificationsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: notificationsKeys.unreadCount() })
    },
  })
}

/**
 * Mark all notifications as read
 */
export function useMarkAllNotificationsRead() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const response = await apiClient.POST("/notifications/read-all")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: notificationsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: notificationsKeys.unreadCount() })
    },
  })
}

/**
 * Delete notification
 */
export function useDeleteNotification() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.DELETE("/notifications/{id}", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: notificationsKeys.lists() })
      queryClient.invalidateQueries({ queryKey: notificationsKeys.unreadCount() })
    },
  })
}

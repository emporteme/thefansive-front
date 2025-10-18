"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type AssignTaskDto = components["schemas"]["AssignTaskDto"]

// Inline CompleteUserTaskDto
type CompleteUserTaskDto = {
  userTaskId: number
  proof?: Record<string, never>
}

// Query keys
export const tasksKeys = {
  all: ["tasks"] as const,
  lists: () => [...tasksKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...tasksKeys.lists(), filters] as const,
  details: () => [...tasksKeys.all, "detail"] as const,
  detail: (id: number) => [...tasksKeys.details(), id] as const,
  myTeams: () => [...tasksKeys.all, "myTeams"] as const,
  userTasks: () => [...tasksKeys.all, "userTasks"] as const,
  userTasksActive: () => [...tasksKeys.userTasks(), "active"] as const,
  userTasksStats: () => [...tasksKeys.userTasks(), "stats"] as const,
}

/**
 * Get all tasks
 */
export function useTasks(params?: { teamId?: number; isActive?: boolean }) {
  return useQuery({
    queryKey: tasksKeys.list(params),
    queryFn: async () => {
      const response = await apiClient.GET("/tasks", {
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
 * Get task by ID
 */
export function useTask(id: number) {
  return useQuery({
    queryKey: tasksKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/tasks/{id}", {
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
 * Get tasks for user's favorite teams
 */
export function useMyTeamsTasks() {
  return useQuery({
    queryKey: tasksKeys.myTeams(),
    queryFn: async () => {
      const response = await apiClient.GET("/tasks/my-teams")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get current user's tasks
 */
export function useMyTasks() {
  return useQuery({
    queryKey: tasksKeys.userTasks(),
    queryFn: async () => {
      const response = await apiClient.GET("/tasks/user/me")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get current user's active tasks
 */
export function useMyActiveTasks() {
  return useQuery({
    queryKey: tasksKeys.userTasksActive(),
    queryFn: async () => {
      const response = await apiClient.GET("/tasks/user/me/active")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get current user's task statistics
 */
export function useMyTaskStats() {
  return useQuery({
    queryKey: tasksKeys.userTasksStats(),
    queryFn: async () => {
      const response = await apiClient.GET("/tasks/user/me/stats")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Assign task to user
 */
export function useAssignTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: AssignTaskDto) => {
      const response = await apiClient.POST("/tasks/assign", {
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
      queryClient.invalidateQueries({ queryKey: tasksKeys.userTasks() })
      queryClient.invalidateQueries({ queryKey: tasksKeys.userTasksActive() })
    },
  })
}

/**
 * Start user task
 */
export function useStartTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (userTaskId: number) => {
      const response = await apiClient.PATCH("/tasks/user/{userTaskId}/start", {
        params: { path: { userTaskId } },
      })

      if (!response.data) {
        throw new Error("Failed to start task")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tasksKeys.userTasks() })
      queryClient.invalidateQueries({ queryKey: tasksKeys.userTasksActive() })
    },
  })
}

/**
 * Complete user task
 */
export function useCompleteTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CompleteUserTaskDto) => {
      const response = await apiClient.POST("/tasks/user/complete", {
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
      queryClient.invalidateQueries({ queryKey: tasksKeys.userTasks() })
      queryClient.invalidateQueries({ queryKey: tasksKeys.userTasksActive() })
      queryClient.invalidateQueries({ queryKey: tasksKeys.userTasksStats() })
    },
  })
}

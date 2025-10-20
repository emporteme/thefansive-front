"use client"

import { useMutation } from "@tanstack/react-query"
import { FavoriteTeam } from "@/shared/types/team"
import { apiClient, setAuthToken } from "../client"
import type { components } from "../schema"

type LoginInput = components["schemas"]["LoginInputDto"]
type SignUpInput = components["schemas"]["SignUpInputDto"]
type SendEmailOtpInput = components["schemas"]["SendEmailOtpDto"]
type ValidateOtpInput = components["schemas"]["ValidateOtpDto"]

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const response = await apiClient.POST("/auth/login", {
        body: data,
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("refresh_token", response.data.refresh_token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      setAuthToken(response.data.access_token)

      const favoriteTeamsResponse = await apiClient.GET("/user/favorite-teams")

      const favoriteTeamServer = favoriteTeamsResponse.data as FavoriteTeam[]
      const favoriteTeamsStorage = JSON.parse(localStorage.getItem("favoriteTeams") ?? "[]") as FavoriteTeam[]

      // remove from server
      favoriteTeamServer.forEach(async (favoriteTeam) => {
        if (favoriteTeamsStorage.some((favoriteTeamStorage) => favoriteTeamStorage.id === favoriteTeam.id)) {
          return
        } else {
          apiClient.DELETE("/user/favorite-teams/{teamId}", {
            params: { path: { teamId: favoriteTeam.id } },
          })
        }
      })

      // add to server from storage
      favoriteTeamsStorage.forEach(async (favoriteTeamStorage) => {
        if (favoriteTeamServer.some((favoriteTeam) => favoriteTeam.id === favoriteTeamStorage.id)) {
          return
        } else {
          apiClient.POST("/user/favorite-teams/{teamId}", {
            params: { path: { teamId: favoriteTeamStorage.id } },
          })
        }
      })

      return response.data
    },
  })
}

export function useSignUp() {
  return useMutation({
    mutationFn: async (data: SignUpInput) => {
      const response = await apiClient.POST("/auth/signup", {
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
  })
}

export function useRestorePassword() {
  return useMutation({
    mutationFn: async (_data: { password: string; confirmPassword: string }) => {
      throw new Error("Restore password endpoint not implemented")
    },
  })
}

export function logout() {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("user")
  setAuthToken(null)
}

export function getCurrentUser() {
  const userStr = typeof window !== "undefined" ? localStorage?.getItem("user") : null
  return userStr ? (JSON.parse(userStr) as components["schemas"]["UserOutputDto"]) : null
}

export function isAuthenticated(): boolean {
  return typeof window !== "undefined" && !!localStorage.getItem("access_token")
}

export function useSendEmailOtp() {
  return useMutation({
    mutationFn: async (data: SendEmailOtpInput) => {
      const response = await apiClient.POST("/auth/send-email-otp", {
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
  })
}

export function useValidateOtp() {
  return useMutation({
    mutationFn: async (data: ValidateOtpInput) => {
      const response = await apiClient.POST("/auth/validate-otp", {
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
  })
}

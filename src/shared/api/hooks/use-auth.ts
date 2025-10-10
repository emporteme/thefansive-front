"use client"

import { useMutation } from "@tanstack/react-query"
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

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("refresh_token", response.data.refresh_token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      setAuthToken(response.data.access_token)

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

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
  })
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: async (_data: { email: string }) => {
      throw new Error("Forgot password endpoint not implemented")
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
  const userStr = localStorage.getItem("user")
  return userStr ? (JSON.parse(userStr) as components["schemas"]["UserOutputDto"]) : null
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("access_token")
}

export function useSendEmailOtp() {
  return useMutation({
    mutationFn: async (data: SendEmailOtpInput) => {
      const response = await apiClient.POST("/auth/send-email-otp", {
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
  })
}

export function useValidateOtp() {
  return useMutation({
    mutationFn: async (data: ValidateOtpInput) => {
      const response = await apiClient.POST("/auth/validate-otp", {
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
  })
}

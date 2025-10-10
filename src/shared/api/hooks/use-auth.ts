"use client"

import { useMutation, type UseMutationResult } from "@tanstack/react-query"
import { apiClient, setAuthToken } from "../client"
import type {
  ApiError,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  RestorePasswordRequest,
  RestorePasswordResponse,
  SendEmailOtpRequest,
  SendEmailOtpResponse,
  SignUpRequest,
  SignUpResponse,
  ValidateOtpRequest,
  ValidateOtpResponse,
} from "../types"

export function useLogin(): UseMutationResult<LoginResponse, ApiError, LoginRequest> {
  return useMutation({
    mutationFn: async (data: LoginRequest) => {
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

// Sign up mutation
export function useSignUp(): UseMutationResult<SignUpResponse, ApiError, SignUpRequest> {
  return useMutation({
    mutationFn: async (data: SignUpRequest) => {
      const response = await apiClient.POST("/auth/signup", {
        body: data,
      })

      if (response.error) {
        throw response.error
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      // Save tokens to localStorage
      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("refresh_token", response.data.refresh_token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      // Set auth token for future requests
      setAuthToken(response.data.access_token)

      return response.data
    },
  })
}

// Forgot password mutation
export function useForgotPassword(): UseMutationResult<ForgotPasswordResponse, ApiError, ForgotPasswordRequest> {
  return useMutation({
    mutationFn: async (data: ForgotPasswordRequest) => {
      const response = await apiClient.POST("/auth/forgot-password", {
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

// Restore password mutation
export function useRestorePassword(): UseMutationResult<RestorePasswordResponse, ApiError, RestorePasswordRequest> {
  return useMutation({
    mutationFn: async (data: RestorePasswordRequest) => {
      const response = await apiClient.POST("/auth/restore-password", {
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

// Logout function
export function logout() {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("user")
  setAuthToken(null)
}

// Get current user from localStorage
export function getCurrentUser() {
  const userStr = localStorage.getItem("user")
  return userStr ? JSON.parse(userStr) : null
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return !!localStorage.getItem("access_token")
}

export function useSendEmailOtp(): UseMutationResult<SendEmailOtpResponse, ApiError, SendEmailOtpRequest> {
  return useMutation({
    mutationFn: async (data: SendEmailOtpRequest) => {
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

export function useValidateOtp(): UseMutationResult<ValidateOtpResponse, ApiError, ValidateOtpRequest> {
  return useMutation({
    mutationFn: async (data: ValidateOtpRequest) => {
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

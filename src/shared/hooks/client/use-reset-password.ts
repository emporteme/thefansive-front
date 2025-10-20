"use client"

import { useState } from "react"
import { ApiClientError } from "@/shared/services/api/api-client"
import { authApi } from "@/shared/services/api/auth-api"

interface UseResetPasswordReturn {
  resetPassword: (token: string, newPassword: string) => Promise<void>
  isLoading: boolean
  error: string | null
  success: boolean
  resetState: () => void
}

export function useResetPassword(): UseResetPasswordReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const resetState = () => {
    setError(null)
    setSuccess(false)
  }

  const resetPassword = async (token: string, newPassword: string) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await authApi.resetPassword({ token, newPassword })
      setSuccess(true)
    } catch (err) {
      if (err instanceof ApiClientError) {
        setError(err.message)
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    resetPassword,
    isLoading,
    error,
    success,
    resetState,
  }
}

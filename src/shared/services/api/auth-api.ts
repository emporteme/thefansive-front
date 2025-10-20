import {
  type ForgotPasswordRequest,
  type ForgotPasswordResponse,
  type LoginRequest,
  type LoginResponse,
  type RefreshTokenRequest,
  type RefreshTokenResponse,
  type ResetPasswordRequest,
  type ResetPasswordResponse,
  type SendOtpRequest,
  type SignupRequest,
  type ValidateOtpRequest,
  type VerifyResetTokenRequest,
  type VerifyResetTokenResponse,
} from "@/shared/types/auth"

import { apiClient } from "./api-client"

export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>("/auth/login", data)
  },

  async signup(data: SignupRequest): Promise<boolean> {
    return apiClient.post<boolean>("/auth/signup", data)
  },

  async sendOtp(data: SendOtpRequest): Promise<boolean> {
    return apiClient.post<boolean>("/auth/send-email-otp", data)
  },

  async validateOtp(data: ValidateOtpRequest): Promise<boolean> {
    return apiClient.post<boolean>("/auth/validate-otp", data)
  },

  async forgotPassword(data: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    return apiClient.post<ForgotPasswordResponse>("/auth/forgot-password", data)
  },

  async resetPassword(data: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return apiClient.post<ResetPasswordResponse>("/auth/reset-password", data)
  },

  async verifyResetToken(data: VerifyResetTokenRequest): Promise<VerifyResetTokenResponse> {
    return apiClient.post<VerifyResetTokenResponse>("/auth/verify-reset-token", data)
  },

  async refreshToken(data: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    return apiClient.post<RefreshTokenResponse>("/auth/refresh", data)
  },

  async logout(refreshToken: string): Promise<boolean> {
    return apiClient.post<boolean>("/auth/logout", { refreshToken })
  },
}

export interface User {
  id: number
  email: string
  role: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
  user: User
}

export interface SignupRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  otp: string
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ForgotPasswordResponse {
  message: string
}

export interface ResetPasswordRequest {
  token: string
  newPassword: string
}

export interface ResetPasswordResponse {
  message: string
}

export interface VerifyResetTokenRequest {
  token: string
}

export interface VerifyResetTokenResponse {
  valid: boolean
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface RefreshTokenResponse {
  access_token: string
  refresh_token: string
}

export interface SendOtpRequest {
  email: string
}

export interface ValidateOtpRequest {
  email: string
  otp: string
}

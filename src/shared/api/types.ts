// API Types based on OpenAPI schema
export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
  user: {
    id: number
    email: string
    role: string
  }
}

export interface SignUpRequest {
  email: string
  password: string
  lastName: string
  firstName: string
  otp: string
}

export interface SignUpResponse {
  access_token: string
  refresh_token: string
  user: {
    id: number
    email: string
    role: string
  }
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ForgotPasswordResponse {
  message: string
}

export interface RestorePasswordRequest {
  password: string
  confirmPassword: string
}

export interface RestorePasswordResponse {
  message: string
}

export interface SendEmailOtpRequest {
  email: string
}

export interface SendEmailOtpResponse {
  success: boolean
}

export interface ValidateOtpRequest {
  email: string
  otp: string
}

export interface ValidateOtpResponse {
  success: boolean
}

export interface ApiError {
  message: string
  statusCode: number
  error?: string
}

// OpenAPI Paths type structure
export interface paths {
  "/auth/login": {
    post: {
      requestBody: {
        content: {
          "application/json": LoginRequest
        }
      }
      responses: {
        200: {
          content: {
            "application/json": LoginResponse
          }
        }
        401: {
          content: {
            "application/json": ApiError
          }
        }
      }
    }
  }
  "/auth/signup": {
    post: {
      requestBody: {
        content: {
          "application/json": SignUpRequest
        }
      }
      responses: {
        201: {
          content: {
            "application/json": SignUpResponse
          }
        }
        400: {
          content: {
            "application/json": ApiError
          }
        }
      }
    }
  }
  "/auth/forgot-password": {
    post: {
      requestBody: {
        content: {
          "application/json": ForgotPasswordRequest
        }
      }
      responses: {
        200: {
          content: {
            "application/json": ForgotPasswordResponse
          }
        }
        404: {
          content: {
            "application/json": ApiError
          }
        }
      }
    }
  }
  "/auth/restore-password": {
    post: {
      requestBody: {
        content: {
          "application/json": RestorePasswordRequest
        }
      }
      responses: {
        200: {
          content: {
            "application/json": RestorePasswordResponse
          }
        }
        400: {
          content: {
            "application/json": ApiError
          }
        }
      }
    }
  }
  "/auth/send-email-otp": {
    post: {
      requestBody: {
        content: {
          "application/json": SendEmailOtpRequest
        }
      }
      responses: {
        200: {
          content: {
            "application/json": SendEmailOtpResponse
          }
        }
        400: {
          content: {
            "application/json": ApiError
          }
        }
      }
    }
  }
  "/auth/validate-otp": {
    post: {
      requestBody: {
        content: {
          "application/json": ValidateOtpRequest
        }
      }
      responses: {
        200: {
          content: {
            "application/json": ValidateOtpResponse
          }
        }
        400: {
          content: {
            "application/json": ApiError
          }
        }
      }
    }
  }
}

import type { ApiError } from "../index"

export function getErrorMessage(error: unknown): string {
  if (!error || typeof error !== "object") {
    return "An unexpected error occurred"
  }

  const apiError = error as ApiError

  // Check for validation errors
  if (apiError.cause?.details && Array.isArray(apiError.cause.details)) {
    const validationErrors = apiError.cause.details
      .map((detail) => {
        const constraints = detail.constraints
        if (constraints) {
          return Object.values(constraints)[0]
        }
        return null
      })
      .filter(Boolean)

    if (validationErrors.length > 0) {
      return validationErrors.join(", ")
    }
  }

  // Check for regular error message
  if (apiError.message) {
    return apiError.message
  }

  // Check for error field
  if (apiError.error) {
    return apiError.error
  }

  return "An unexpected error occurred"
}

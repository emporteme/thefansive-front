// API Client
export { apiClient, setAuthToken } from "./client"
import { UseQueryOptions } from "@tanstack/react-query"

// Generated types from OpenAPI schema
export type { paths, components, operations } from "./schema"

// Custom error handling types
export interface ValidationDetail {
  field: string
  value: unknown
  constraints: Record<string, string>
}

export interface ApiError {
  message?: string
  statusCode?: number
  error?: string
  cause?: {
    name: string
    details?: ValidationDetail[]
  }
}

export type QueryOptions<TData = unknown, TError = Error> = Omit<
  UseQueryOptions<TData, TError>,
  "queryKey" | "queryFn"
> & {
  select?: (data: TData) => TData
}

// Auth hooks
export * from "./hooks/use-auth"

// Utilities
export { getErrorMessage } from "./utils/error-handler"

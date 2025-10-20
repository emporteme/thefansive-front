import { env } from "../../../../env.mjs"

const API_URL = env.NEXT_PUBLIC_API_URL

export interface ApiError {
  message: string
  statusCode: number
  error?: string
}

export class ApiClientError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public data?: unknown
  ) {
    super(message)
    this.name = "ApiClientError"
  }
}

export interface ApiRequestOptions extends RequestInit {
  token?: string
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`
    let errorData: unknown

    try {
      errorData = await response.json()
      if (errorData && typeof errorData === "object" && "message" in errorData) {
        errorMessage = (errorData as ApiError).message
      }
    } catch {}

    throw new ApiClientError(response.status, errorMessage, errorData)
  }

  const contentType = response.headers.get("content-type")
  if (contentType && contentType.includes("application/json")) {
    return (await response.json()) as T
  }

  return (await response.text()) as T
}
export const apiClient = {
  async request<T = unknown>(endpoint: string, options: ApiRequestOptions = {}): Promise<T> {
    const { token, ...fetchOptions } = options

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    }

    if (token) {
      ;(headers as Record<string, string>)["Authorization"] = `Bearer ${token}`
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...fetchOptions,
      headers,
    })

    return handleResponse<T>(response)
  },

  async get<T = unknown>(endpoint: string, options?: ApiRequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" })
  },

  async post<T = unknown>(endpoint: string, data?: unknown, options?: ApiRequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  async put<T = unknown>(endpoint: string, data?: unknown, options?: ApiRequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  async patch<T = unknown>(endpoint: string, data?: unknown, options?: ApiRequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  async delete<T = unknown>(endpoint: string, options?: ApiRequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" })
  },
}

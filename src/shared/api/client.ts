import createClient from "openapi-fetch"
import type { paths } from "./schema"

export const apiClient = createClient<paths>({
  baseUrl: "/api", // Используем локальный прокси вместо прямого URL
  headers: {
    "Content-Type": "application/json",
  },
})

let authToken: string | null =
  typeof window !== "undefined" ? window?.localStorage?.getItem("access_token") || null : null

export function setAuthToken(token: string | null) {
  authToken = token
}

apiClient.use({
  onRequest({ request }) {
    if (authToken) {
      request.headers.set("Authorization", `Bearer ${authToken}`)
    }
    return request
  },
  onResponse({ response }) {
    if (!response.ok && process.env.NODE_ENV === "development") {
      console.warn(`API Error: ${response.status} ${response.statusText}`)
    }
    return response
  },
})

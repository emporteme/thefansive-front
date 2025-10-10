import createClient from "openapi-fetch"
import type { paths } from "./types"

export const apiClient = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export function setAuthToken(token: string | null) {
  if (token) {
    apiClient.use({
      onRequest({ request }) {
        request.headers.set("Authorization", `Bearer ${token}`)
        return request
      },
    })
  }
}

apiClient.use({
  onResponse({ response }) {
    if (!response.ok) {
      console.error("API Error:", response.status, response.statusText)
    }
    return response
  },
})

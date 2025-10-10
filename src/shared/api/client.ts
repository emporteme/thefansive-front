import createClient from "openapi-fetch"
import type { paths } from "./types"

const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
}

export const apiClient = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: defaultHeaders,
})

export function setAuthToken(token: string | null) {
  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`
  } else {
    delete defaultHeaders["Authorization"]
  }
}

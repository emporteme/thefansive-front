import createClient from "openapi-fetch"
import type { paths } from "./schema"

// Серверный API клиент для Next.js App Router
export const serverApiClient = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://trading-desk.top",
  headers: {
    "Content-Type": "application/json",
  },
})

// Функция для получения токена из cookies на сервере
function getServerAuthToken(): string | null {
  // Здесь можно добавить логику получения токена из cookies
  // или других серверных источников
  return null
}

// Настройка middleware для серверного клиента
serverApiClient.use({
  onRequest({ request }) {
    const token = getServerAuthToken()
    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`)
    }
    return request
  },
  onResponse({ response }) {
    if (!response.ok && process.env.NODE_ENV === "development") {
      console.warn(`Server API Error: ${response.status} ${response.statusText}`)
    }
    return response
  },
})

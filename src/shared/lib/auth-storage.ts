const ACCESS_TOKEN_KEY = "thefansive_access_token"
const REFRESH_TOKEN_KEY = "thefansive_refresh_token"
const USER_KEY = "thefansive_user"

export interface StoredUser {
  id: number
  email: string
  role: string
}

export const authStorage = {
  getAccessToken(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },

  setAccessToken(token: string): void {
    if (typeof window === "undefined") return
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
  },

  getRefreshToken(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },

  setRefreshToken(token: string): void {
    if (typeof window === "undefined") return
    localStorage.setItem(REFRESH_TOKEN_KEY, token)
  },

  getUser(): StoredUser | null {
    if (typeof window === "undefined") return null
    const userStr = localStorage.getItem(USER_KEY)
    if (!userStr) return null
    try {
      return JSON.parse(userStr) as StoredUser
    } catch {
      return null
    }
  },

  setUser(user: StoredUser): void {
    if (typeof window === "undefined") return
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },

  clearAll(): void {
    if (typeof window === "undefined") return
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  },

  setTokens(accessToken: string, refreshToken: string): void {
    this.setAccessToken(accessToken)
    this.setRefreshToken(refreshToken)
  },
}

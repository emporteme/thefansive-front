"use client"

import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../client"

// Query keys
export const countriesKeys = {
  all: ["countries"] as const,
  lists: () => [...countriesKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...countriesKeys.lists(), filters] as const,
  details: () => [...countriesKeys.all, "detail"] as const,
  detail: (id: number) => [...countriesKeys.details(), id] as const,
  byIso2: (iso2: string) => [...countriesKeys.all, "iso2", iso2] as const,
  count: () => [...countriesKeys.all, "count"] as const,
}

/**
 * Get all countries
 */
export function useCountries(params?: { page?: number; limit?: number; search?: string }) {
  return useQuery({
    queryKey: countriesKeys.list(params),
    queryFn: async () => {
      const response = await apiClient.GET("/countries", {
        params: { query: params },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get countries count
 */
export function useCountriesCount() {
  return useQuery({
    queryKey: countriesKeys.count(),
    queryFn: async () => {
      const response = await apiClient.GET("/countries/count")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get country by ID
 */
export function useCountry(id: number) {
  return useQuery({
    queryKey: countriesKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/countries/{id}", {
        params: { path: { id } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    enabled: !!id,
  })
}

/**
 * Get country by ISO2 code
 */
export function useCountryByIso2(iso2: string) {
  return useQuery({
    queryKey: countriesKeys.byIso2(iso2),
    queryFn: async () => {
      const response = await apiClient.GET("/countries/iso2/{iso2}", {
        params: { path: { iso2 } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    enabled: !!iso2,
  })
}

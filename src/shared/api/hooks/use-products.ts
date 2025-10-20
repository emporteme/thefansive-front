"use client"

import { useQuery } from "@tanstack/react-query"
import { Product } from "@/shared/types/product"
import { apiClient } from "../client"

// Product categories from API
type ProductCategory = "FAN_SUPPORT"

// Query keys
export const productsKeys = {
  all: ["products"] as const,
  lists: () => [...productsKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...productsKeys.lists(), filters] as const,
  details: () => [...productsKeys.all, "detail"] as const,
  detail: (id: number) => [...productsKeys.details(), id] as const,
  search: (query: string) => [...productsKeys.all, "search", query] as const,
  category: (category: ProductCategory) => [...productsKeys.all, "category", category] as const,
  myTeams: () => [...productsKeys.all, "myTeams"] as const,
  popular: () => [...productsKeys.all, "popular"] as const,
}

/**
 * Get all products
 */
export function useProducts(params?: {
  page?: number
  limit?: number
  teamId?: number
  category?: ProductCategory
  isActive?: boolean
  minPrice?: number
  maxPrice?: number
}) {
  return useQuery({
    queryKey: productsKeys.list(params),
    queryFn: async () => {
      const response = await apiClient.GET("/products", {
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
 * Get product by ID
 */
export function useProduct(id: number) {
  return useQuery({
    queryKey: productsKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/products/{id}", {
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
 * Search products
 */
export function useSearchProducts(query: string) {
  return useQuery({
    queryKey: productsKeys.search(query),
    queryFn: async () => {
      const response = await apiClient.GET("/products/search", {
        params: { query: { q: query } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    enabled: query.length > 0,
  })
}

/**
 * Get products by category
 */
export function useProductsByCategory(category: ProductCategory) {
  return useQuery({
    queryKey: productsKeys.category(category),
    queryFn: async () => {
      const response = await apiClient.GET("/products/category/{category}", {
        params: { path: { category } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    enabled: !!category,
  })
}

/**
 * Get products for user's favorite teams
 */
export function usePopularProducts(params?: { limit?: number }) {
  return useQuery<Product[]>({
    queryKey: productsKeys.popular(),
    queryFn: async () => {
      const response = await apiClient.GET("/products/popular", {
        params: {
          query: {
            limit: params?.limit,
          },
        },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data as Product[]
    },
    enabled: !!params?.limit && params?.limit > 0,
  })
}

/**
 * Get products for user's favorite teams
 */
export function useMyTeamsProducts() {
  return useQuery({
    queryKey: productsKeys.myTeams(),
    queryFn: async () => {
      const response = await apiClient.GET("/products/my-teams")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

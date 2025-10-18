"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type IssueCertificateDto = components["schemas"]["IssueCertificateDto"]
type CertificateOutputDto = components["schemas"]["CertificateOutputDto"]

// Query keys
export const certificatesKeys = {
  all: ["certificates"] as const,
  lists: () => [...certificatesKeys.all, "list"] as const,
  my: () => [...certificatesKeys.all, "my"] as const,
  details: () => [...certificatesKeys.all, "detail"] as const,
  detail: (id: string | number) => [...certificatesKeys.details(), id] as const,
  verify: (hash: string) => [...certificatesKeys.all, "verify", hash] as const,
}

/**
 * Get user's certificates
 */
export function useMyCertificates() {
  return useQuery({
    queryKey: certificatesKeys.my(),
    queryFn: async () => {
      const response = await apiClient.GET("/certificates/my")

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
  })
}

/**
 * Get certificate by ID
 */
export function useCertificate(id: string | number) {
  return useQuery({
    queryKey: certificatesKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.GET("/certificates/{id}", {
        params: { path: { id: String(id) } },
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
 * Verify certificate by hash
 */
export function useVerifyCertificate(hash: string) {
  return useQuery({
    queryKey: certificatesKeys.verify(hash),
    queryFn: async () => {
      const response = await apiClient.GET("/certificates/verify/{hash}", {
        params: { path: { hash } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      return response.data
    },
    enabled: !!hash,
  })
}

/**
 * Issue new certificate
 */
export function useIssueCertificate() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: IssueCertificateDto) => {
      const response = await apiClient.POST("/certificates/issue", {
        body: data,
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: certificatesKeys.my() })
    },
  })
}

/**
 * Revoke certificate
 */
export function useRevokeCertificate() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string | number) => {
      const response = await apiClient.PATCH("/certificates/{id}/revoke", {
        params: { path: { id: String(id) } },
      })

      if (!response.data) {
        throw new Error("Request failed")
      }

      if (!response.data) {
        throw new Error("No data received from server")
      }

      return response.data
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: certificatesKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: certificatesKeys.my() })
    },
  })
}

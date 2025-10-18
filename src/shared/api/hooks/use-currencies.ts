"use client"

import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../client"
import type { components } from "../schema"

type CurrencyOutputDto = components["schemas"]["CurrencyOutputDto"]
type ExchangeRateOutputDto = components["schemas"]["ExchangeRateOutputDto"]
type ConvertCurrencyDto = components["schemas"]["ConvertCurrencyDto"]

// Query keys
export const currenciesKeys = {
  all: ["currencies"] as const,
  lists: () => [...currenciesKeys.all, "list"] as const,
  details: () => [...currenciesKeys.all, "detail"] as const,
  detail: (code: string) => [...currenciesKeys.details(), code] as const,
  exchangeRates: () => [...currenciesKeys.all, "exchangeRates"] as const,
  exchangeRatesByBase: (baseCurrency: string) => [...currenciesKeys.exchangeRates(), baseCurrency] as const,
  convert: (params: ConvertCurrencyDto) => [...currenciesKeys.all, "convert", params] as const,
}

/**
 * Get all currencies
 */
export function useCurrencies() {
  return useQuery({
    queryKey: currenciesKeys.lists(),
    queryFn: async () => {
      const response = await apiClient.GET("/currencies")

      if (response.error) {
        throw response.error
      }

      return response.data
    },
  })
}

/**
 * Get currency by code
 */
export function useCurrency(code: string) {
  return useQuery({
    queryKey: currenciesKeys.detail(code),
    queryFn: async () => {
      const response = await apiClient.GET("/currencies/{code}", {
        params: { path: { code } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!code,
  })
}

/**
 * Get all exchange rates
 */
export function useExchangeRates() {
  return useQuery({
    queryKey: currenciesKeys.exchangeRates(),
    queryFn: async () => {
      const response = await apiClient.GET("/currencies/exchange-rates/all")

      if (response.error) {
        throw response.error
      }

      return response.data
    },
  })
}

/**
 * Get exchange rates for base currency
 */
export function useExchangeRatesByBase(baseCurrency: string) {
  return useQuery({
    queryKey: currenciesKeys.exchangeRatesByBase(baseCurrency),
    queryFn: async () => {
      const response = await apiClient.GET("/currencies/exchange-rates/{baseCurrency}", {
        params: { path: { baseCurrency } },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!baseCurrency,
  })
}

/**
 * Convert currency
 */
export function useConvertCurrency(params: ConvertCurrencyDto) {
  return useQuery({
    queryKey: currenciesKeys.convert(params),
    queryFn: async () => {
      const response = await apiClient.GET("/currencies/convert", {
        params: { query: params },
      })

      if (response.error) {
        throw response.error
      }

      return response.data
    },
    enabled: !!params.from && !!params.to && !!params.amount,
  })
}

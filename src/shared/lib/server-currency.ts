import { cookies } from "next/headers"
import type { Currency } from "@/shared/store/currency-store"

const CURRENCY_COOKIE_NAME = "currency"

export const getServerCurrency = (): Currency => {
  const cookieStore = cookies()
  const currencyCookie = cookieStore.get(CURRENCY_COOKIE_NAME)

  if (currencyCookie?.value && isValidCurrency(currencyCookie.value)) {
    return currencyCookie.value as Currency
  }

  return "USD" // Default to USD
}

const isValidCurrency = (currency: string): currency is Currency => {
  return ["USD", "EUR", "GBP", "RUB", "CNY"].includes(currency)
}

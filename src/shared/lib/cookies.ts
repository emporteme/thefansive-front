import { cookies } from "next/headers"
import { Currency } from "@/shared/store/currency-store"

const CURRENCY_COOKIE_NAME = "currency"

export const getCurrencyFromCookie = async (): Promise<Currency> => {
  const cookieStore = await cookies()
  const currencyCookie = cookieStore.get(CURRENCY_COOKIE_NAME)

  if (currencyCookie?.value && isValidCurrency(currencyCookie.value)) {
    return currencyCookie.value as Currency
  }

  return "USD" // Default to USD
}

export const setCurrencyCookie = async (currency: Currency): Promise<void> => {
  const cookieStore = await cookies()
  cookieStore.set(CURRENCY_COOKIE_NAME, currency, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
}

const isValidCurrency = (currency: string): currency is Currency => {
  return ["USD", "EUR", "GBP", "RUB", "CNY"].includes(currency)
}

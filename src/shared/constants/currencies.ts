import { Currency } from "@/shared/store/currency-store"

export interface CurrencyInfo {
  code: Currency
  symbol: string
  name: string
  locale: string
}

export const CURRENCIES: Record<Currency, CurrencyInfo> = {
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    locale: "en-US",
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    locale: "de-DE",
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    locale: "en-GB",
  },
  RUB: {
    code: "RUB",
    symbol: "₽",
    name: "Russian Ruble",
    locale: "ru-RU",
  },
  CNY: {
    code: "CNY",
    symbol: "¥",
    name: "Chinese Yuan",
    locale: "zh-CN",
  },
}

export const getCurrencySymbol = (currency: Currency): string => {
  return CURRENCIES[currency].symbol
}

export const getCurrencyName = (currency: Currency): string => {
  return CURRENCIES[currency].name
}

// Утилиты для форматирования данных
import type { Currency } from "@/shared/store/currency-store"

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("ru-RU").format(num)
}

export const formatCurrency = (amount: number, currency: Currency = "USD"): string => {
  const locales: Record<Currency, string> = {
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
    RUB: "ru-RU",
    CNY: "zh-CN",
  }

  return new Intl.NumberFormat(locales[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const formatPercentage = (value: number): string => {
  return `${value > 0 ? "+" : ""}${value}%`
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

// Утилиты для форматирования данных

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("ru-RU").format(num)
}

export const formatCurrency = (amount: number, currency = "RUB"): string => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
  }).format(amount)
}

export const formatPercentage = (value: number): string => {
  return `${value > 0 ? "+" : ""}${value}%`
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

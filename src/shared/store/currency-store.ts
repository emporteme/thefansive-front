import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Currency = "USD" | "EUR" | "GBP" | "RUB" | "CNY"

export interface CurrencyState {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: "USD",
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: "currency-storage",
    }
  )
)

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  RUB: "₽",
  CNY: "¥",
}

export function getCurrencySymbol(currency: Currency): string {
  return currencySymbols[currency]
}

import { getCurrencyName, getCurrencySymbol } from "@/shared/constants/currencies"
import { useCurrencyStore } from "@/shared/store/currency-store"

export const useCurrency = () => {
  const { currency, setCurrency } = useCurrencyStore()

  return {
    currency,
    setCurrency,
    symbol: getCurrencySymbol(currency),
    name: getCurrencyName(currency),
  }
}

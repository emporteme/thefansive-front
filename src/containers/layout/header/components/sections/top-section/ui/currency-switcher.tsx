"use client"

import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon } from "lucide-react"
import React, { useEffect } from "react"
import { CURRENCIES, getCurrencySymbol } from "@/shared/constants/currencies"
import { cn } from "@/shared/lib/utils"
import { useCurrencyStore } from "@/shared/store/currency-store"
import type { Currency } from "@/shared/store/currency-store"

const CurrencySwitcher: React.FC = () => {
  const { currency, setCurrency } = useCurrencyStore()

  // Sync with cookie on mount
  useEffect(() => {
    const cookieCurrency = document.cookie
      .split("; ")
      .find((row) => row.startsWith("currency-storage="))
      ?.split("=")[1]

    if (cookieCurrency) {
      try {
        const parsed = JSON.parse(decodeURIComponent(cookieCurrency)) as { state?: { currency?: Currency } }
        if (parsed.state?.currency && parsed.state.currency !== currency) {
          setCurrency(parsed.state.currency)
        }
      } catch (error) {
        console.warn("Failed to parse currency from cookie:", error)
      }
    }
  }, [currency, setCurrency])

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency)

    // Update cookie
    document.cookie = `currency=${newCurrency}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
  }

  return (
    <Select.Root value={currency} onValueChange={handleCurrencyChange}>
      <Select.Trigger className="inline-flex cursor-pointer items-center justify-between gap-2 rounded-md p-3.5 text-sm font-bold text-white focus:outline-none active:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50">
        <Select.Value>
          <span className="flex items-center gap-1">
            <span>{getCurrencySymbol(currency)}</span>
            <span>{currency}</span>
          </span>
        </Select.Value>
        <Select.Icon>
          <ChevronDownIcon className="h-4 w-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="data-[side=left]:slide-in-from-right-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-2 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md dark:border-gray-800 dark:bg-gray-950">
          <Select.Viewport className="p-1">
            {Object.values(CURRENCIES).map((currencyInfo) => (
              <Select.Item
                key={currencyInfo.code}
                value={currencyInfo.code}
                className={cn(
                  "relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
                  currency === currencyInfo.code && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                )}
              >
                <Select.ItemText>
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{currencyInfo.symbol}</span>
                    <span>{currencyInfo.code}</span>
                    <span className="text-xs text-gray-500">({currencyInfo.name})</span>
                  </span>
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default CurrencySwitcher

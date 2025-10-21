"use client"

import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon } from "lucide-react"
import React from "react"
import { useChangeLocale, useCurrentLocale } from "@/locale/client"
import { getLanguageFlag, getLanguageName, LANGUAGES } from "@/shared/constants/languages"
import type { Language } from "@/shared/constants/languages"
import { cn } from "@/shared/lib/utils"

const LangSwitcher: React.FC = () => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  const handleLanguageChange = (newLanguage: Language) => {
    changeLocale(newLanguage)
  }

  return (
    <Select.Root value={currentLocale} onValueChange={handleLanguageChange}>
      <Select.Trigger className="inline-flex cursor-pointer items-center justify-between gap-2 rounded-md bg-black p-3.5 text-sm font-bold text-white shadow-sm focus:bg-gray-900 focus:outline-none active:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50">
        <Select.Value>
          <span className="flex items-center gap-2">
            <span className="mt-0.5 text-lg">{getLanguageFlag(currentLocale as Language)}</span>
            <span>{getLanguageName(currentLocale as Language)}</span>
          </span>
        </Select.Value>
        <Select.Icon>
          <ChevronDownIcon className="h-4 w-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="data-[side=left]:slide-in-from-right-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-2 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md dark:border-gray-800 dark:bg-gray-950">
          <Select.Viewport className="p-1">
            {Object.values(LANGUAGES).map((languageInfo) => (
              <Select.Item
                key={languageInfo.code}
                value={languageInfo.code}
                className={cn(
                  "relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
                  currentLocale === languageInfo.code && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                )}
              >
                <Select.ItemText>
                  <span className="flex items-center gap-2">
                    {/* <span className="text-lg">{languageInfo.flag}</span> */}
                    <span>{languageInfo.name}</span>
                    <span className="text-xs text-gray-500">({languageInfo.nativeName})</span>
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

export default LangSwitcher

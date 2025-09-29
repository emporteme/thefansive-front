"use client"

import React, { useState } from "react"
import Cancel from "@/shared/icons/cancel"
import Search from "@/shared/icons/search"
import { cn } from "@/shared/lib/utils"

interface SearchFavoriteClubProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onClear?: () => void
  className?: string
}

const SearchFavoriteClub: React.FC<SearchFavoriteClubProps> = ({ value = "", onChange, onClear, className }) => {
  const [searchValue, setSearchValue] = useState(value)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSearchValue(newValue)
    onChange?.(newValue)
  }

  const handleClear = () => {
    setSearchValue("")
    onChange?.("")
    onClear?.()
  }

  return (
    <div
      className={`flex h-12 w-full items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4 ${className}`}
    >
      <Search
        className={cn(`h-5 w-5 flex-shrink-0 text-slate-400`, {
          "text-slate-900": searchValue,
        })}
      />

      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="h-6 flex-1 border-none bg-transparent text-base text-slate-900 placeholder-slate-400 outline-none"
      />

      {searchValue && (
        <button
          onClick={handleClear}
          className="flex-shrink-0 cursor-pointer border-none bg-transparent p-0"
          type="button"
        >
          <Cancel className="h-5 w-5 text-slate-700 transition-colors" />
        </button>
      )}
    </div>
  )
}

export { SearchFavoriteClub }

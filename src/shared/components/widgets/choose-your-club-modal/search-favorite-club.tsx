"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import Cancel from "@/shared/icons/cancel"
import Search from "@/shared/icons/search"
import { cn } from "@/shared/lib/utils"

interface Club {
  id: number
  name: string
  logo: string
}

interface SearchFavoriteClubProps {
  searchValue: string
  placeholder?: string
  onChange?: (value: string) => void
  onClear?: () => void
  className?: string
  clubs?: Club[]
  onClubSelect?: (club: Club) => void
}

const SearchFavoriteClub: React.FC<SearchFavoriteClubProps> = ({
  searchValue,
  onChange,
  onClear,
  className,
  clubs = [],
  onClubSelect,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredClubs = clubs.filter((club) => club.name.toLowerCase().includes(searchValue.toLowerCase()))

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange?.(newValue)
    setIsDropdownOpen(newValue.length > 0 && filteredClubs.length > 0)
  }

  const handleClear = () => {
    onChange?.("")
    onClear?.()
    setIsDropdownOpen(false)
  }

  const handleClubSelect = (club: Club) => {
    onChange?.(club.name)
    setIsDropdownOpen(false)
    onClubSelect?.(club)
  }

  const handleInputFocus = () => {
    if (searchValue.length > 0 && filteredClubs.length > 0) {
      setIsDropdownOpen(true)
    }
  }

  useEffect(() => {
    if (searchValue.length <= 0) {
      handleClear()
    }
  }, [searchValue])

  return (
    <div
      className={cn(
        `relative w-full rounded-xl`,
        {
          "shadow-lg": isDropdownOpen,
        },
        className
      )}
      ref={dropdownRef}
    >
      <div className="flex h-12 w-full items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4">
        <Search
          className={cn("h-5 w-5 flex-shrink-0 text-slate-400", {
            "text-slate-900": searchValue,
          })}
        />

        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
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

      {isDropdownOpen && filteredClubs.length > 0 && (
        <div className="absolute top-full left-0 z-50 mt-1.5 w-full rounded-2xl border border-slate-100 bg-white shadow-lg">
          {filteredClubs.slice(0, 8).map((club) => (
            <div
              key={club.id}
              onClick={() => handleClubSelect(club)}
              className="flex cursor-pointer items-center gap-2.5 px-4 py-3 first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-50"
            >
              <Image
                src={club.logo}
                alt={club.name}
                width={24}
                height={24}
                className="h-6 w-6 flex-shrink-0 rounded-full object-cover"
              />
              <span className="flex-1 text-base font-bold text-slate-600">{club.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export { SearchFavoriteClub }

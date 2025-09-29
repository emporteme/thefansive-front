"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, Football } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface LeagueOption {
  id: string
  name: string
  sportId: string
  icon?: React.ComponentType<{ className?: string }>
}

interface LeagueFilterProps {
  placeholder?: string
  options?: LeagueOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
  selectedSport?: string
  disabled?: boolean
}

const defaultLeagueOptions: LeagueOption[] = [
  { id: "premier_league", name: "Premier League", sportId: "football", icon: Football },
  { id: "champions_league", name: "Champions League", sportId: "football", icon: Football },
  { id: "la_liga", name: "La Liga", sportId: "football", icon: Football },
  { id: "bundesliga", name: "Bundesliga", sportId: "football", icon: Football },
  { id: "serie_a", name: "Serie A", sportId: "football", icon: Football },
  { id: "ligue_1", name: "Ligue 1", sportId: "football", icon: Football },
  { id: "nba", name: "NBA", sportId: "basketball" },
  { id: "euroleague", name: "EuroLeague", sportId: "basketball" },
  { id: "ufc", name: "UFC", sportId: "fighting" },
  { id: "bellator", name: "Bellator", sportId: "fighting" },
  { id: "mlb", name: "MLB", sportId: "baseball" },
  { id: "fivb", name: "FIVB", sportId: "volleyball" },
  { id: "nfl", name: "NFL", sportId: "american_football" },
  { id: "pga", name: "PGA Tour", sportId: "golf" },
  { id: "wbc", name: "WBC", sportId: "boxing" },
]

const LeagueFilterSelect: React.FC<LeagueFilterProps> = ({
  placeholder = "Select League",
  options = defaultLeagueOptions,
  value,
  onChange,
  className,
  selectedSport,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<LeagueOption | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredOptions = selectedSport ? options.filter((option) => option.sportId === selectedSport) : []

  const isDisabled = disabled || !selectedSport || filteredOptions.length === 0

  useEffect(() => {
    if (value && filteredOptions.length > 0) {
      const option = filteredOptions.find((opt) => opt.id === value)
      setSelectedOption(option || null)
    } else {
      setSelectedOption(null)
    }
  }, [value, filteredOptions])

  useEffect(() => {
    if (!selectedSport) {
      setSelectedOption(null)
      setIsOpen(false)
    }
  }, [selectedSport])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleOptionSelect = (option: LeagueOption) => {
    if (isDisabled) return

    setSelectedOption(option)
    setIsOpen(false)
    onChange?.(option.id)
  }

  const toggleDropdown = () => {
    if (isDisabled) return
    setIsOpen(!isOpen)
  }

  const displayText = selectedOption?.name || placeholder
  const IconComponent = selectedOption?.icon || Football

  return (
    <div className={cn("relative w-[205px]", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={isDisabled}
        className={cn("flex h-12 w-full items-center gap-2.5 rounded-xl border bg-white px-4 transition-colors", {
          "border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:outline-none": !isDisabled,
          "border-blue-500": isOpen && !isDisabled,
          "cursor-not-allowed border-[#F3F4F6] bg-[#E5E7EB]": isDisabled,
        })}
      >
        <IconComponent
          className={cn("h-5 w-5 flex-shrink-0", {
            "text-slate-700": !isDisabled,
            "text-[#9CA3AF]": isDisabled,
          })}
        />

        <div
          className={cn("h-5 w-px", {
            "bg-slate-200": !isDisabled,
            "bg-[#9CA3AF]": isDisabled,
          })}
        />

        <span
          className={cn("flex-1 text-left text-base", {
            "text-slate-900": selectedOption && !isDisabled,
            "text-[#9CA3AF]": !selectedOption || isDisabled,
          })}
        >
          {displayText}
        </span>

        <ArrowRight
          className={cn("h-5 w-5 flex-shrink-0 transition-transform duration-200", {
            "text-slate-700": !isDisabled,
            "text-[#9CA3AF]": isDisabled,
            "rotate-90": isOpen && !isDisabled,
          })}
        />
      </button>

      {isOpen && !isDisabled && filteredOptions.length > 0 && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-2xl border border-slate-100 bg-white shadow-lg">
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredOptions.map((option, index) => {
              const OptionIcon = option.icon || Football
              const isSelected = selectedOption?.id === option.id
              const isFirst = index === 0

              return (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
                    "hover:bg-slate-50",
                    {
                      "bg-slate-100": isSelected || (isFirst && !selectedOption),
                    }
                  )}
                >
                  <OptionIcon className="h-[18px] w-[18px] flex-shrink-0 text-slate-700" />
                  <span className="flex-1 text-base font-medium text-slate-700">{option.name}</span>
                  <ArrowRight className="h-[18px] w-[18px] flex-shrink-0 text-slate-700" />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export { LeagueFilterSelect }
export type { LeagueOption }

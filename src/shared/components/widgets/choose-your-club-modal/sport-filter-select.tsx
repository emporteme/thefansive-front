"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, Football } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface SportOption {
  id: string
  name: string
  icon?: React.ComponentType<{ className?: string }>
}

interface SportFilterProps {
  placeholder?: string
  options?: SportOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const defaultSportOptions: SportOption[] = [
  { id: "football", name: "Football", icon: Football },
  { id: "basketball", name: "Basketball" },
  { id: "fighting", name: "Fighting" },
  { id: "baseball", name: "Baseball" },
  { id: "volleyball", name: "Volleyball" },
  { id: "american_football", name: "American Football" },
  { id: "golf", name: "Golf" },
  { id: "boxing", name: "Boxing" },
]

const ClubFilterSelect: React.FC<SportFilterProps> = ({
  placeholder = "Select Option",
  options = defaultSportOptions,
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SportOption | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value) {
      const option = options.find((opt) => opt.id === value)
      setSelectedOption(option || null)
    }
  }, [value, options])

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

  const handleOptionSelect = (option: SportOption) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange?.(option.id)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const displayText = selectedOption?.name || placeholder
  const IconComponent = selectedOption?.icon || Football

  return (
    <div className={cn("relative w-[205px]", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={cn(
          "flex h-12 w-full items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-4 transition-colors",
          "hover:border-slate-400 focus:border-blue-500 focus:outline-none",
          {
            "border-blue-500": isOpen,
          }
        )}
      >
        <IconComponent className="h-5 w-5 flex-shrink-0 text-slate-700" />

        <div className="h-5 w-px bg-slate-200" />

        <span
          className={cn("flex-1 text-left text-base", {
            "text-slate-900": selectedOption,
            "text-slate-400": !selectedOption,
          })}
        >
          {displayText}
        </span>

        <ArrowRight
          className={cn("h-5 w-5 flex-shrink-0 text-slate-700 transition-transform duration-200", {
            "rotate-90": isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-2xl border border-slate-100 bg-white shadow-lg">
          <div className="max-h-80 overflow-y-auto p-2">
            {options.map((option, index) => {
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

export { ClubFilterSelect }

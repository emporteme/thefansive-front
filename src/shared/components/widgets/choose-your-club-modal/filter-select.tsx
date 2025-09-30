"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowSelect, Football } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

export interface FilterOption {
  id: string
  name: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FilterSelectProps {
  placeholder?: string
  options: FilterOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
  disabled?: boolean
  width?: number
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  placeholder = "Select Option",
  options,
  value,
  onChange,
  className,
  disabled = false,
  width = 210,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<FilterOption | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value) {
      const option = options.find((opt) => opt.id === value)
      setSelectedOption(option || null)
    } else {
      setSelectedOption(null)
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

  const handleOptionSelect = (option: FilterOption) => {
    if (disabled) return

    setSelectedOption(option)
    setIsOpen(false)
    onChange?.(option.id)
  }

  const toggleDropdown = () => {
    if (disabled) return
    setIsOpen(!isOpen)
  }

  const displayText = selectedOption?.name || placeholder
  const IconComponent = selectedOption?.icon || Football

  return (
    <div className={cn(`relative min-w-[210px]`, className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={cn("rounded-2lg flex h-12 w-full items-center gap-2.5 border-2 bg-white px-4 transition-colors", {
          "border-transparent focus:outline-none": !disabled,
          "border-slate-400": isOpen && !disabled,
          "cursor-not-allowed bg-gray-200": disabled,
        })}
      >
        {selectedOption && <IconComponent className="h-5 w-5 flex-shrink-0 text-slate-700" />}

        <span
          className={cn("flex-1 text-left text-base leading-[1.5] font-bold whitespace-nowrap", {
            "text-slate-900": !disabled,
            "text-gray-400": disabled,
          })}
        >
          {displayText}
        </span>

        <ArrowSelect
          className={cn("h-5 w-5 flex-shrink-0 transition-transform duration-300", {
            "text-slate-800": !disabled,
            "text-gray-400": disabled,
            "rotate-180": isOpen && !disabled,
          })}
        />
      </button>

      {isOpen && !disabled && options.length > 0 && (
        <div className="absolute top-full left-0 z-50 mt-1.5 w-full rounded-xl bg-white shadow-lg">
          <div className="max-h-80 overflow-y-auto p-2">
            {options.map((option) => {
              const isSelected = selectedOption?.id === option.id

              return (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 transition-colors",
                    "hover:bg-slate-200",
                    {
                      "bg-slate-200": isSelected,
                    }
                  )}
                >
                  <span className="flex-1 text-sm font-bold text-slate-900">{option.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export { FilterSelect }

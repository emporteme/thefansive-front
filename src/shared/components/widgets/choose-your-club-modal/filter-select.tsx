"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, Football } from "@/shared/icons"
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
  width?: string
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  placeholder = "Select Option",
  options,
  value,
  onChange,
  className,
  disabled = false,
  width = "w-[205px]",
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
    <div className={cn("relative", width, className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={cn("flex h-12 w-full items-center gap-2.5 rounded-xl border bg-white px-4 transition-colors", {
          "border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:outline-none": !disabled,
          "border-blue-500": isOpen && !disabled,
          "cursor-not-allowed border-[#F3F4F6] bg-[#E5E7EB]": disabled,
        })}
      >
        <IconComponent
          className={cn("h-5 w-5 flex-shrink-0", {
            "text-slate-700": !disabled,
            "text-[#9CA3AF]": disabled,
          })}
        />

        <div
          className={cn("h-5 w-px", {
            "bg-slate-200": !disabled,
            "bg-[#9CA3AF]": disabled,
          })}
        />

        <span
          className={cn("flex-1 text-left text-base", {
            "text-slate-900": selectedOption && !disabled,
            "text-[#9CA3AF]": !selectedOption || disabled,
          })}
        >
          {displayText}
        </span>

        <ArrowRight
          className={cn("h-5 w-5 flex-shrink-0 transition-transform duration-200", {
            "text-slate-700": !disabled,
            "text-[#9CA3AF]": disabled,
            "rotate-90": isOpen && !disabled,
          })}
        />
      </button>

      {isOpen && !disabled && options.length > 0 && (
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

export { FilterSelect }

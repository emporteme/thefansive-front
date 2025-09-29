"use client"

import React from "react"
import { Football } from "@/shared/icons"
import { FilterOption, FilterSelect } from "./filter-select"

interface SportFilterProps {
  placeholder?: string
  options?: FilterOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const defaultSportOptions: FilterOption[] = [
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
  return (
    <FilterSelect placeholder={placeholder} options={options} value={value} onChange={onChange} className={className} />
  )
}

export { ClubFilterSelect }

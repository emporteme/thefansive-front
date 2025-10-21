"use client"

import React from "react"
import { SportType } from "@/shared/types/team"
import { FilterSelect } from "./filter-select"

interface SportFilterProps {
  placeholder?: string
  options?: SportType[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const ClubFilterSelect: React.FC<SportFilterProps> = ({
  placeholder = "Select Option",
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <FilterSelect
      placeholder={placeholder}
      options={options?.map((sport) => ({ id: sport.value, name: sport.label })) || []}
      value={value}
      onChange={onChange}
      className={className}
    />
  )
}

export { ClubFilterSelect }

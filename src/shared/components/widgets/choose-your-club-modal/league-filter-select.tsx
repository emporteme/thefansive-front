"use client"

import React, { useMemo } from "react"
import { Football } from "@/shared/icons"
import { FilterOption, FilterSelect } from "./filter-select"

interface LeagueOption extends FilterOption {
  sportId: string
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
  const filteredOptions = useMemo(() => {
    return selectedSport ? options.filter((option) => option.sportId === selectedSport) : []
  }, [selectedSport, options])

  const isDisabled = disabled || !selectedSport || filteredOptions.length === 0

  return (
    <FilterSelect
      placeholder={placeholder}
      options={filteredOptions}
      value={value}
      onChange={onChange}
      className={className}
      disabled={isDisabled}
    />
  )
}

export { LeagueFilterSelect }
export type { LeagueOption }

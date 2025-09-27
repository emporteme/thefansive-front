"use client"

import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"
import { SportCard } from "../ui/sport-card"

interface Sport {
  id: number
  name: string
  image: string
}

const sports: Sport[] = [
  {
    id: 1,
    name: "Football",
    image: "/images/dev/football.png", // You'll need to add these images
  },
  {
    id: 2,
    name: "Basketball",
    image: "/images/dev/basketball.png",
  },
  {
    id: 3,
    name: "Tennis",
    image: "/images/dev/tennis.png",
  },
  {
    id: 4,
    name: "Baseball",
    image: "/images/dev/baseball.png",
  },
  {
    id: 5,
    name: "Hockey",
    image: "/images/dev/hockey.png",
  },
  {
    id: 6,
    name: "Golf",
    image: "/images/dev/golf.png",
  },
]

interface SportFilterProps {
  onSportSelected?: (sportId: number) => void
  onClose?: () => void
}

const SportFilter: React.FC<SportFilterProps> = ({ onSportSelected, onClose: _onClose }) => {
  const [selectedSports, setSelectedSports] = useState<number[]>([])
  const [filterValue, setFilterValue] = useState<string>("")

  const handleSportSelect = (sportId: number) => {
    setSelectedSports((prev) => (prev.includes(sportId) ? prev.filter((id) => id !== sportId) : [...prev, sportId]))
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-slate-900">Chose your sport filter</h2>
      </div>

      {/* Filter Dropdown */}
      <div className="mb-8">
        <div className="relative">
          <select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
          >
            <option value="">Select sport category...</option>
            <option value="team">Team Sports</option>
            <option value="individual">Individual Sports</option>
            <option value="outdoor">Outdoor Sports</option>
            <option value="indoor">Indoor Sports</option>
          </select>
          <ChevronDownIcon className="absolute top-1/2 right-5 h-5 w-5 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Sport Cards */}
      <div className="flex gap-5 overflow-x-auto pb-2">
        {sports.map((sport) => (
          <SportCard
            key={sport.id}
            name={sport.name}
            image={sport.image}
            isSelected={selectedSports.includes(sport.id)}
            onClick={() => handleSportSelect(sport.id)}
          />
        ))}
      </div>

      {/* Selected Sports Counter & Actions */}
      {selectedSports.length > 0 && (
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Selected: {selectedSports.length} sport{selectedSports.length !== 1 ? "s" : ""}
          </div>
          {onSportSelected && (
            <button
              onClick={() => {
                // For now, just pass the first selected sport
                // You could modify this to handle multiple sports differently
                const firstSport = selectedSports[0]
                if (firstSport !== undefined && onSportSelected) {
                  onSportSelected(firstSport)
                }
              }}
              className="rounded-2xl bg-slate-900 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Continue with {sports.find((s) => s.id === selectedSports[0])?.name}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export { SportFilter }

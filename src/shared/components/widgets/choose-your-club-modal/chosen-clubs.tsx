import React from "react"
import { ClubAvatar } from "./club-avatar"

interface Club {
  id: number
  name: string
  logo: string
}

interface ChosenClubsProps {
  clubs: Club[]
  className?: string
}

const ChosenClubs: React.FC<ChosenClubsProps> = ({ clubs, className = "" }) => {
  if (clubs.length === 0) {
    return null
  }

  return (
    <div
      className={`flex gap-2.5 overflow-x-auto rounded-2xl bg-slate-200 p-3 ${className}`}
      style={{
        // Точные цвета из Figma
        backgroundColor: "#E2E8F0", // rgb(226, 232, 240)
      }}
    >
      {clubs.map((club) => (
        <ClubAvatar key={club.id} logo={club.logo} name={club.name} size="md" />
      ))}
    </div>
  )
}

export { ChosenClubs }
export type { Club }

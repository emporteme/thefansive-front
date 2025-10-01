import React from "react"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { ChosenClubCard } from "./chosen-club-card"

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

  const routes = useRoutes()
  const navigate = useNavigate()

  const handleClubClick = (club: Club) => {
    navigate(routes.clubs.single(club.id.toString()))
  }

  return (
    <div className={`flex gap-2.5 overflow-x-auto rounded-2xl bg-slate-200 p-3 ${className}`}>
      {clubs.map((club) => (
        <ChosenClubCard key={club.id} logo={club.logo} name={club.name} onClick={() => handleClubClick(club)} />
      ))}
    </div>
  )
}

export { ChosenClubs }
export type { Club }

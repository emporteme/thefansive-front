import React from "react"
import { useFavoriteTeams, useTeams } from "@/shared/api/hooks"
import { cn } from "@/shared/lib/utils"
import { Team } from "@/shared/types/team"
import { ClubsCardItem } from "./clubs-card-item"

interface Club {
  id: number
  name: string
  logo: string
}

interface ClubsCardListProps {
  favoriteClubs?: Club[]
  onToggleFavorite?: (id: number) => void
  onTeamClick?: (team: Team) => void
  className?: string
}

const ClubsCardList: React.FC<ClubsCardListProps> = ({ onToggleFavorite, onTeamClick, className }) => {
  const { data: teams } = useTeams()
  const { data: myTeams } = useFavoriteTeams()

  if (teams?.length === 0) {
    return (
      <div className={`py-8 text-center ${className}`}>
        <p className="text-slate-500">Clubs not found</p>
      </div>
    )
  }

  const isFavorite = (team: Team) => myTeams?.some((c) => c.id === team.id)

  return (
    <div className={cn(`flex flex-col gap-4`, className)}>
      <h3 className="text-2xl font-semibold text-slate-900">Trending</h3>
      <div className={`grid grid-cols-[repeat(5,minmax(160px,1fr))] gap-2.5 px-4`}>
        {teams?.map((team) => (
          <ClubsCardItem
            key={team.id}
            team={team}
            isFavorite={isFavorite(team)}
            onToggleFavorite={onToggleFavorite}
            onTeamClick={() => onTeamClick?.(team)}
          />
        ))}
      </div>
    </div>
  )
}

export { ClubsCardList }
export type { Club, ClubsCardListProps }

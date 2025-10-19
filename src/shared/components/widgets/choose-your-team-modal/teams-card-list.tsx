import React from "react"
import { useFavoriteTeams, useTeams } from "@/shared/api/hooks"
import { cn } from "@/shared/lib/utils"
import { Team } from "@/shared/types/team"
import { TeamsCardItem } from "./teams-card-item"

interface TeamsCardListProps {
  onToggleFavorite?: (id: number) => void
  onTeamClick?: (team: Team) => void
  className?: string
}

const TeamsCardList: React.FC<TeamsCardListProps> = ({ onToggleFavorite, onTeamClick, className }) => {
  const { data: teams } = useTeams()
  const { data: favoriteTeams } = useFavoriteTeams()

  if (teams?.length === 0) {
    return (
      <div className={`py-8 text-center ${className}`}>
        <p className="text-slate-500">Teams not found</p>
      </div>
    )
  }

  const isFavorite = (team: Team) => favoriteTeams?.some((favoriteTeam) => favoriteTeam.teamId === team.id)

  return (
    <div className={cn(`flex flex-col gap-4`, className)}>
      <h3 className="text-2xl font-semibold text-slate-900">Trending</h3>
      <div className={`grid grid-cols-[repeat(5,minmax(160px,1fr))] gap-2.5 px-4`}>
        {teams?.map((team) => (
          <TeamsCardItem
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

export { TeamsCardList }

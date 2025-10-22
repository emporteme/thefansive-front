import React from "react"
import { cn } from "@/shared/lib/utils"
import { FavoriteTeam, Team } from "@/shared/types/team"
import { TeamsCardItem } from "./teams-card-item"
import { TeamsCardItemSkeleton } from "./teams-card-item-skeleton"

interface TeamsCardListProps {
  onToggleFavorite?: (team: Team) => void
  onTeamClick?: (team: Team) => void
  className?: string
  teams: Team[]
  favoriteTeams: FavoriteTeam[]
  isLoading: boolean
  isTrending: boolean
}

const TeamsCardList: React.FC<TeamsCardListProps> = ({
  onToggleFavorite,
  onTeamClick,
  className,
  teams,
  favoriteTeams,
  isLoading,
  isTrending,
}) => {
  if (teams?.length === 0 && !isLoading) {
    return (
      <div className={`py-8 text-center ${className}`}>
        <p className="text-slate-500">Teams not found</p>
      </div>
    )
  }

  const isFavorite = (team: Team) => favoriteTeams?.some((favoriteTeam) => favoriteTeam.teamId === team.id)

  return (
    <div className={cn(`flex flex-col gap-4`, className)}>
      {isTrending && <h3 className="text-2xl font-semibold text-slate-900">Trending</h3>}
      <div className={`grid grid-cols-[repeat(5,minmax(160px,1fr))] gap-2.5 px-4`}>
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => <TeamsCardItemSkeleton key={`skeleton-${index}`} />)
          : teams?.map((team) => (
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

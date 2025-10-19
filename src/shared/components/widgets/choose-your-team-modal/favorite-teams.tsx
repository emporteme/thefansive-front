import React, { useMemo } from "react"
import { useFavoriteTeams } from "@/shared/api/hooks"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { cn } from "@/shared/lib/utils"
import { EmptyTeam, FavoriteTeam } from "@/shared/types/team"
import { FavoriteTeamCard } from "./favorite-team-card"

interface FavoriteTeamsProps {
  className?: string
}

const maxShowedClubs = 9

const FavoriteTeams: React.FC<FavoriteTeamsProps> = ({ className = "" }) => {
  const { data: favoriteTeams } = useFavoriteTeams()
  const routes = useRoutes()
  const navigate = useNavigate()

  const handleTeamClick = (team: FavoriteTeam) => {
    navigate(routes.clubs.single(team.teamId.toString()))
  }

  const { displayTeams, hasScroll } = useMemo(() => {
    const emptyTeams = Array.from(
      { length: maxShowedClubs - (favoriteTeams?.length || 0) },
      (_, index) =>
        ({
          id: -(index + 1),
          logoUrl: "/images/fallbacks/empty-card-image-small.png",
        }) as EmptyTeam
    )

    if (!favoriteTeams) {
      return { displayTeams: emptyTeams, hasScroll: false }
    }

    if (favoriteTeams.length > maxShowedClubs) {
      return { displayTeams: favoriteTeams, hasScroll: true }
    }

    return { displayTeams: [...favoriteTeams, ...emptyTeams], hasScroll: false }
  }, [favoriteTeams])

  return (
    <div
      className={cn(
        `mx-auto flex gap-2.5 rounded-2xl bg-slate-200 px-6 py-3`,
        {
          "w-[calc(9*80px+8*10px+48px)] !scroll-m-5 overflow-x-auto": hasScroll,
          "w-fit": !hasScroll,
        },
        className
      )}
    >
      {displayTeams.map((team) => (
        <FavoriteTeamCard
          key={team.id}
          team={team}
          onClick={() => {
            if ("team" in team) {
              handleTeamClick(team)
            }
          }}
        />
      ))}
    </div>
  )
}

export { FavoriteTeams }

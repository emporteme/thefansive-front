"use client"

import { useState } from "react"
import { useCurrentLocale } from "@/locale/client"
import { useFavoriteTeams, useRemoveFavoriteTeam } from "@/shared/api/hooks"
import { ChooseYourTeamModal } from "@/shared/components/widgets"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { FavoriteTeam, Team } from "@/shared/types/team"
import { AddFavoriteClubs, FavoriteTeamCard, FavoriteTeamCardSkeleton } from "../ui"

const FavoriteTeams: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const [isChooseYourClubModalOpen, setIsChooseYourClubModalOpen] = useState(false)
  const { data: favoriteTeams, isLoading } = useFavoriteTeams()
  const { mutate: removeFavoriteTeam } = useRemoveFavoriteTeam()
  const locale = useCurrentLocale()

  const handleAddClub = () => {
    setIsChooseYourClubModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsChooseYourClubModalOpen(false)
  }

  const handleTeamClick = (team: FavoriteTeam) => {
    navigate(routes.clubs.single(team.teamId.toString()))
  }

  const handleRemoveClub = (team: Team) => {
    removeFavoriteTeam(team)
  }

  return (
    <>
      <ChooseYourTeamModal isOpen={isChooseYourClubModalOpen} onClose={handleCloseModal} />
      <div className="flex w-full flex-col gap-4.5 rounded-3xl bg-slate-100 p-5 pb-7.5">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-slate-900">Favorite Clubs</h3>
          <AddFavoriteClubs onAdd={handleAddClub} />
        </div>

        {isLoading ? (
          <div className="grid w-full grid-cols-6 gap-2">
            {Array.from({ length: 6 }, (_, index) => (
              <FavoriteTeamCardSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : (
          favoriteTeams && (
            <div className="grid w-full grid-cols-6 gap-2">
              {favoriteTeams?.map((team) => (
                <FavoriteTeamCard
                  key={team.id}
                  logo={team.team.logoUrl}
                  name={team.team.name[locale]}
                  onCancel={() => handleRemoveClub(team.team)}
                  onClick={() => handleTeamClick(team)}
                />
              ))}
            </div>
          )
        )}
      </div>
    </>
  )
}

export { FavoriteTeams }

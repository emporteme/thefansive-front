import { useState } from "react"
import { useCurrentLocale } from "@/locale/client"
import { useFavoriteTeams, useRemoveFavoriteTeam } from "@/shared/api/hooks"
import { ChooseYourTeamModal } from "@/shared/components/widgets"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { FavoriteTeam, Team } from "@/shared/types/team"
import { AddFavoriteClubs, FavoriteTeamCard } from "../ui"

export const clubsData = [
  {
    id: 1,
    logo: "/images/dev/liverpool-logo.png",
    name: "F.C. Liverpool",
  },
  {
    id: 2,
    logo: "/images/dev/arsenal-logo.png",
    name: "F.C. Arsenal",
  },
  {
    id: 3,
    logo: "/images/dev/lakers-logo.png",
    name: "Los Angeles Lakers",
  },
  {
    id: 4,
    logo: "/images/dev/wolverhampton-logo.png",
    name: "Wolverhampton",
  },
  {
    id: 5,
    logo: "/images/dev/manchester-logo.png",
    name: "Manchester City",
  },
  {
    id: 6,
    logo: "/images/dev/madrid-logo.png",
    name: "Real Madrid",
  },
  {
    id: 7,
    logo: "/images/dev/madrid-logo.png",
    name: "Chelsea",
  },
  {
    id: 8,
    logo: "/images/dev/madrid-logo.png",
    name: "Nottingham Forest",
  },
  {
    id: 9,
    logo: "/images/dev/madrid-logo.png",
    name: "Sunderland",
  },
  {
    id: 10,
    logo: "/images/dev/madrid-logo.png",
    name: "Manchester United",
  },
]

export const favoriteClubsData = [
  {
    id: 1,
    logo: "/images/dev/liverpool-logo.png",
    name: "F.C. Liverpool",
  },
  {
    id: 2,
    logo: "/images/dev/arsenal-logo.png",
    name: "F.C. Arsenal",
  },
  {
    id: 3,
    logo: "/images/dev/lakers-logo.png",
    name: "Los Angeles Lakers",
  },
  {
    id: 4,
    logo: "/images/dev/wolverhampton-logo.png",
    name: "Wolverhampton",
  },
  {
    id: 5,
    logo: "/images/dev/manchester-logo.png",
    name: "Manchester City",
  },
  {
    id: 10,
    logo: "/images/dev/madrid-logo.png",
    name: "Manchester United",
  },
]

const FavoriteTeams: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const [isChooseYourClubModalOpen, setIsChooseYourClubModalOpen] = useState(false)
  const { data: favoriteTeams } = useFavoriteTeams()
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

        {favoriteTeams && (
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
        )}
      </div>
    </>
  )
}

export { FavoriteTeams }

import { useState } from "react"
import { ChooseYourClubModal } from "@/shared/components/widgets/choose-your-club-modal"
import { Club } from "@/shared/components/widgets/choose-your-club-modal/favorite-clubs"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { AddFavoriteClubs, FavoriteClubCard } from "../ui"

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

const FavoriteClubs: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const [clubs, setClubs] = useState(clubsData)
  const [favoriteClubs, setFavoriteClubs] = useState(favoriteClubsData)
  const [isChooseYourClubModalOpen, setIsChooseYourClubModalOpen] = useState(false)

  const handleRemoveClub = (id: number) => {
    setFavoriteClubs(favoriteClubs.filter((club) => club.id !== id))
  }

  const handleAddClub = () => {
    setIsChooseYourClubModalOpen(true)
  }

  const handleClubFavoriteToggle = (club: Club) => {
    if (favoriteClubs.some((c) => c.id === club.id)) {
      setFavoriteClubs(favoriteClubs.filter((c) => c.id !== club.id))
    } else {
      setFavoriteClubs((favoriteClubs) => [...favoriteClubs, club])
    }
  }

  const handleCloseModal = () => {
    setIsChooseYourClubModalOpen(false)
  }

  const handleSearchClubSelect = (club: Club) => {
    setClubs([club])
  }

  const handleClearSearch = () => {
    setClubs(clubsData)
  }

  const handleClubClick = (club: Club) => {
    navigate(routes.clubs.single(club.id.toString()))
  }

  return (
    <>
      <ChooseYourClubModal
        clubs={clubs}
        favoriteClubs={favoriteClubs}
        isOpen={isChooseYourClubModalOpen}
        onClose={handleCloseModal}
        onClubFavoriteToggle={handleClubFavoriteToggle}
        onSearchClubSelect={handleSearchClubSelect}
        onClearSearch={handleClearSearch}
      />
      <div className="flex w-full flex-col gap-4.5 rounded-3xl bg-slate-100 p-5 pb-7.5">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-slate-900">Favorite Clubs</h3>
          <AddFavoriteClubs onAdd={handleAddClub} />
        </div>

        {favoriteClubs.length > 0 && (
          <div className="grid w-full grid-cols-6 gap-2">
            {favoriteClubs.map((club) => (
              <FavoriteClubCard
                key={club.id}
                logo={club.logo}
                name={club.name}
                onCancel={() => handleRemoveClub(club.id)}
                onClick={() => handleClubClick(club)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export { FavoriteClubs }

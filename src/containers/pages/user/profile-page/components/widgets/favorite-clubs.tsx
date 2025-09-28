import { useState } from "react"
import { ChooseYourClubModal } from "@/shared/components/widgets/choose-your-club-modal"
import { AddFavoriteClubs } from "../ui/add-favorite-clubs"
import { FavoriteCard } from "../ui/favorite-card"

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
    id: 6,
    logo: "/images/dev/madrid-logo.png",
    name: "Real Madrid",
  },
]

const FavoriteClubs: React.FC = () => {
  const [favoriteClubs, setFavoriteClubs] = useState(favoriteClubsData)
  const [isSportFilterOpen, setIsSportFilterOpen] = useState(false)

  const handleCancel = (id: number) => {
    setFavoriteClubs(favoriteClubs.filter((club) => club.id !== id))
  }

  const handleAddClub = () => {
    setIsSportFilterOpen(true)
  }

  const handleSportSelected = (sportId: number) => {
    // Here you could navigate to a clubs list filtered by the selected sport
    // For now, we'll just close the modal and show a message
    console.log(`Selected sport ID: ${sportId}`)
    setIsSportFilterOpen(false)
    // TODO: Navigate to clubs selection for the chosen sport
  }

  const handleCloseModal = () => {
    setIsSportFilterOpen(false)
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-900">Favorite Clubs</h3>
        <AddFavoriteClubs onAdd={handleAddClub} />
      </div>
      <div className="flex gap-5 overflow-x-auto">
        {favoriteClubs.map((club) => (
          <FavoriteCard key={club.id} logo={club.logo} name={club.name} onCancel={() => handleCancel(club.id)} />
        ))}
      </div>

      <ChooseYourClubModal
        isOpen={isSportFilterOpen}
        onClose={handleCloseModal}
        onSportSelected={handleSportSelected}
      />
    </div>
  )
}

export { FavoriteClubs }

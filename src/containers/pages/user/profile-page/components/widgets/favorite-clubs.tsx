import { useState } from "react"
import { ChooseYourClubModal } from "@/shared/components/widgets/choose-your-club-modal"
import { Club } from "@/shared/components/widgets/choose-your-club-modal/chosen-clubs"
import { AddFavoriteClubs, FavoriteCard } from "../ui"

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

  const handleRemoveClub = (id: number) => {
    setFavoriteClubs(favoriteClubs.filter((club) => club.id !== id))
  }

  const handleAddClub = () => {
    setIsSportFilterOpen(true)
  }

  const handleClubSelected = (club: Club) => {
    setFavoriteClubs((favoriteClubs) => [...favoriteClubs, club])
    setIsSportFilterOpen(false)
  }

  const handleCloseModal = () => {
    setIsSportFilterOpen(false)
  }

  return (
    <div className="flex flex-1 flex-col rounded-3xl bg-slate-100 p-5 pb-7.5">
      <div className="mb-4.5 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-900">Favorite Clubs</h3>
        <AddFavoriteClubs onAdd={handleAddClub} />
      </div>
      <div className="flex flex-wrap gap-2">
        {favoriteClubs.map((club) => (
          <FavoriteCard key={club.id} logo={club.logo} name={club.name} onCancel={() => handleRemoveClub(club.id)} />
        ))}
      </div>

      <ChooseYourClubModal isOpen={isSportFilterOpen} onClose={handleCloseModal} onClubSelected={handleClubSelected} />
    </div>
  )
}

export { FavoriteClubs }

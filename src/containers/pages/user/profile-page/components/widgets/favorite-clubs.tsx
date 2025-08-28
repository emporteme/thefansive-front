import { useState } from "react"
import { FavoriteCard } from "../ui/favorite-card"

const clubs = [
  {
    id: 1,
    logo: "/images/dev/fc-liverpool-logo.png",
    name: "Liverpool",
  },
  {
    id: 2,
    logo: "/images/dev/fc-wolverhampton-logo.png",
    name: "Wolverhampton",
  },
]

const FavoriteClubs: React.FC = () => {
  const [favoriteClubs, setFavoriteClubs] = useState(clubs)

  const handleCancel = (id: number) => {
    setFavoriteClubs(favoriteClubs.filter((club) => club.id !== id))
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-center text-2xl font-semibold text-slate-600">Favorite Clubs</h3>
      <div className="flex flex-col gap-2">
        {favoriteClubs.map((club) => (
          <FavoriteCard key={club.id} logo={club.logo} name={club.name} onCancel={() => handleCancel(club.id)} />
        ))}
      </div>
    </div>
  )
}

export { FavoriteClubs }

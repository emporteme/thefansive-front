import { useState } from "react"
import { AddFavoriteCard } from "../ui/add-favorite-clubs"
import { FavoriteCard } from "../ui/favorite-card"

const athletes = [
  {
    id: 1,
    logo: "/images/dev/messi.png",
    name: "Lionel Messi",
  },
]

const FavoriteAthletes: React.FC = () => {
  const [favoriteAthletes, setFavoriteAthletes] = useState(athletes)

  const handleCancel = (id: number) => {
    setFavoriteAthletes(favoriteAthletes.filter((athlete) => athlete.id !== id))
  }

  return (
    <div className="flex min-w-[280px] flex-col gap-6">
      <h3 className="text-center text-2xl font-semibold text-slate-600">Favorite Athletes</h3>
      <div className="flex flex-col gap-2">
        {favoriteAthletes.map((athlete) => (
          <FavoriteCard
            key={athlete.id}
            logo={athlete.logo}
            name={athlete.name}
            onCancel={() => handleCancel(athlete.id)}
          />
        ))}
        <AddFavoriteCard title="Add Athlete" onAdd={() => {}} />
      </div>
    </div>
  )
}

export { FavoriteAthletes }

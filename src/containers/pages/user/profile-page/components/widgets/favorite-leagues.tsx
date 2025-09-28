import { useState } from "react"
import { AddFavoriteCard } from "../ui/add-favorite-clubs"
import { FavoriteCard } from "../ui/favorite-card"

const leagues = [
  {
    id: 1,
    logo: "/images/dev/premier-league-logo.png",
    name: "Premier League",
  },
]

const FavoriteLeagues: React.FC = () => {
  const [favoriteLeagues, setFavoriteLeagues] = useState(leagues)

  const handleCancel = (id: number) => {
    setFavoriteLeagues(favoriteLeagues.filter((league) => league.id !== id))
  }

  return (
    <div className="flex min-w-[280px] flex-col gap-6">
      <h3 className="text-center text-2xl font-semibold text-slate-600">Favorite Leagues</h3>
      <div className="flex flex-col gap-2">
        {favoriteLeagues.map((league) => (
          <FavoriteCard
            key={league.id}
            logo={league.logo}
            name={league.name}
            onCancel={() => handleCancel(league.id)}
          />
        ))}
        <AddFavoriteCard title="Add League" onAdd={() => {}} />
      </div>
    </div>
  )
}

export { FavoriteLeagues }

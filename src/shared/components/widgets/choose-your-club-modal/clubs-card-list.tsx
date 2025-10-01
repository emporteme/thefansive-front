import React from "react"
import { ClubsCardItem } from "./clubs-card-item"

interface Club {
  id: number
  name: string
  logo: string
}

interface ClubsCardListProps {
  clubs: Club[]
  favoriteClubs?: Club[]
  onToggleFavorite?: (id: number) => void
  onClubClick?: (club: Club) => void
  className?: string
}

const ClubsCardList: React.FC<ClubsCardListProps> = ({
  clubs,
  favoriteClubs,
  onToggleFavorite,
  onClubClick,
  className = "",
}) => {
  if (clubs.length === 0) {
    return (
      <div className={`py-8 text-center ${className}`}>
        <p className="text-slate-500">Clubs not found</p>
      </div>
    )
  }

  const isFavorite = (club: Club) => favoriteClubs?.some((c) => c.id === club.id)

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h3 className="text-2xl font-semibold text-slate-900">Trending</h3>
      <div className={`grid grid-cols-[repeat(5,minmax(160px,1fr))] gap-2.5 px-4`}>
        {clubs.map((club) => (
          <ClubsCardItem
            key={club.id}
            club={club}
            isFavorite={isFavorite(club)}
            onToggleFavorite={onToggleFavorite}
            onClubClick={onClubClick}
          />
        ))}
      </div>
    </div>
  )
}

export { ClubsCardList }
export type { Club, ClubsCardListProps }

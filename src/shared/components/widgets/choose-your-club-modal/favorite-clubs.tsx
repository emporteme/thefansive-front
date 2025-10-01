import React, { useMemo } from "react"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { FavoriteClubCard } from "./favorite-club-card"

interface Club {
  id: number
  name: string
  logo: string
}

interface ChosenClubsProps {
  clubs: Club[]
  className?: string
}

const maxShowedClubs = 9

const FavoriteClubs: React.FC<ChosenClubsProps> = ({ clubs, className = "" }) => {
  if (clubs.length === 0) {
    return null
  }

  const routes = useRoutes()
  const navigate = useNavigate()

  const handleClubClick = (club: Club) => {
    navigate(routes.clubs.single(club.id.toString()))
  }

  const fullClubs = useMemo(() => {
    if (clubs.length >= maxShowedClubs) {
      return clubs
    }

    const emptyClubs = Array.from(
      { length: maxShowedClubs - clubs.length },
      (_, index) =>
        ({
          id: -(index + 1),
          name: "",
          logo: "/images/fallbacks/empty-card-image-small.png",
        }) as Club
    )

    return [...clubs, ...emptyClubs]
  }, [clubs])

  return (
    <div className={`mx-auto flex w-fit gap-2.5 overflow-x-auto rounded-2xl bg-slate-200 px-6 py-3 ${className}`}>
      {fullClubs.map((club) => (
        <FavoriteClubCard key={club.id} club={club} onClick={() => handleClubClick(club)} />
      ))}
    </div>
  )
}

export { FavoriteClubs }
export type { Club }

import React, { useMemo } from "react"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { cn } from "@/shared/lib/utils"
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

  const { displayClubs, hasScroll } = useMemo(() => {
    if (clubs.length > maxShowedClubs) {
      return { displayClubs: clubs, hasScroll: true }
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

    return { displayClubs: [...clubs, ...emptyClubs], hasScroll: false }
  }, [clubs])

  return (
    <div
      className={cn(
        `mx-auto flex gap-2.5 rounded-2xl bg-slate-200 px-6 py-3`,
        {
          "w-[calc(9*80px+8*10px+48px)] overflow-x-auto": hasScroll,
          "w-fit": !hasScroll,
        },
        className
      )}
    >
      {displayClubs.map((club) => (
        <FavoriteClubCard key={club.id} club={club} onClick={() => handleClubClick(club)} />
      ))}
    </div>
  )
}

export { FavoriteClubs }
export type { Club }

import React from "react"
import { FavoriteAthletes } from "../widgets/favorite-athletes"
import { FavoriteClubs } from "../widgets/favorite-clubs"
import { FavoriteLeagues } from "../widgets/favorite-leagues"

const FavoriteSection: React.FC = () => {
  return (
    <div className="flex w-full justify-between gap-3 rounded-xl bg-slate-100 p-6">
      <FavoriteClubs />
      <FavoriteAthletes />
      <FavoriteLeagues />
    </div>
  )
}

export { FavoriteSection }

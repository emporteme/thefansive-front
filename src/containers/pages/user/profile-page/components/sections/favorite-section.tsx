import React from "react"
import { FavoriteClubs } from "../widgets/favorite-clubs"

const FavoriteSection: React.FC = () => {
  return (
    <div className="w-full rounded-3xl bg-slate-100 p-6">
      <FavoriteClubs />
    </div>
  )
}

export { FavoriteSection }

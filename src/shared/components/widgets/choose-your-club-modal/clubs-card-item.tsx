import Image from "next/image"
import React from "react"
import { Favorite as FavoriteIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import { Club } from "./clubs-card-list"

interface ClubsCardItemProps {
  club: Club
  isFavorite?: boolean
  onToggleFavorite?: (id: number) => void
  onClubClick?: (club: Club) => void
  className?: string
}

const ClubsCardItem: React.FC<ClubsCardItemProps> = ({
  club,
  isFavorite = false,
  onToggleFavorite,
  onClubClick,
  className = "",
}) => {
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleFavorite?.(club.id)
  }

  const handleClubClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClubClick?.(club)
  }

  return (
    <div
      className={`h-[232px] w-40 cursor-pointer rounded-2xl bg-white transition-all ${className}`}
      onClick={handleClubClick}
    >
      <div className="p-1.5 pb-2.5">
        <div className="relative mx-auto mb-1.5 h-[148px] w-[148px]">
          <Image src={club.logo} alt={`${club.name} logo`} fill className="rounded-[10px] object-cover" />
        </div>

        <div className="flex-between flex flex-col gap-1.5">
          <h3 className="line-clamp-2 min-h-[32px] text-sm font-semibold text-slate-900">{club.name}</h3>

          <div className="flex justify-end">
            <button
              onClick={handleToggleFavorite}
              className={cn(
                "flex h-6 items-center gap-1.5 rounded-sm border border-transparent px-2 py-1 transition-colors hover:border-slate-900",
                {
                  "bg-slate-900": isFavorite,
                  "bg-slate-100": !isFavorite,
                }
              )}
            >
              <span
                className={cn("text-2xs font-semibold tracking-normal", {
                  "text-white": isFavorite,
                  "text-slate-700": !isFavorite,
                })}
              >
                {isFavorite ? "Following" : "Follow"}
              </span>
              <FavoriteIcon
                className={`h-3 w-3 ${isFavorite ? "fill-white text-white" : "fill-slate-100 text-slate-900"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ClubsCardItem }
export type { ClubsCardItemProps }

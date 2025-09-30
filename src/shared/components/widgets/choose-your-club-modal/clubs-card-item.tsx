import Image from "next/image"
import React from "react"
import { Favourite } from "@/shared/icons"

interface ClubsCardItemProps {
  id: number
  name: string
  logo: string
  isFavorite?: boolean
  onToggleFavorite?: (id: number) => void
  onClubSelect?: (club: { id: number; name: string; logo: string }) => void
  className?: string
}

const ClubsCardItem: React.FC<ClubsCardItemProps> = ({
  id,
  name,
  logo,
  isFavorite = false,
  onToggleFavorite,
  onClubSelect,
  className = "",
}) => {
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleFavorite?.(id)
  }

  const handleClubClick = () => {
    onClubSelect?.({ id, name, logo })
  }

  return (
    <div
      className={`h-[232px] w-40 cursor-pointer rounded-2xl bg-white transition-all hover:shadow-md ${className}`}
      onClick={handleClubClick}
    >
      <div className="p-1.5 pb-2.5">
        <div className="relative mx-auto mb-1.5 h-[148px] w-[148px]">
          <Image src={logo} alt={`${name} logo`} fill className="rounded-[10px] object-cover" />
        </div>

        <div className="flex-between flex flex-col gap-1.5">
          <h3 className="line-clamp-2 min-h-[32px] text-sm font-semibold text-slate-900">{name}</h3>

          <div className="flex justify-end">
            <button
              onClick={handleToggleFavorite}
              className="flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1.5 transition-colors hover:bg-slate-200"
            >
              <span className="text-3lg font-medium text-slate-700">{isFavorite ? "Following" : "Follow"}</span>
              <Favourite className={`h-3 w-3 ${isFavorite ? "fill-red-500 text-red-500" : "text-slate-700"}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ClubsCardItem }
export type { ClubsCardItemProps }

import Image from "next/image"
import React from "react"
import { useCurrentLocale } from "@/locale/client"
import { Favorite as FavoriteIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import { Team } from "@/shared/types/team"

interface TeamsCardItemProps {
  team: Team
  isFavorite?: boolean
  onToggleFavorite?: (team: Team) => void
  onTeamClick?: (team: Team) => void
  className?: string
}

const TeamsCardItem: React.FC<TeamsCardItemProps> = ({
  team,
  isFavorite = false,
  onToggleFavorite,
  onTeamClick,
  className,
}) => {
  const locale = useCurrentLocale()

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleFavorite?.(team)
  }

  const handleTeamClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onTeamClick?.(team)
  }

  return (
    <div
      className={cn(`h-[232px] w-40 cursor-pointer rounded-2xl bg-white transition-all`, className)}
      onClick={handleTeamClick}
    >
      <div className="p-1.5 pb-2.5">
        <div className="relative mx-auto mb-1.5 h-[148px] w-[148px]">
          <Image
            src={team.logoUrl}
            alt={`${team.name[locale]} logo`}
            fill
            className="rounded-lg bg-slate-200 object-contain p-4"
            quality={90}
          />
        </div>

        <div className="flex-between flex flex-col gap-1.5">
          <h3 className="line-clamp-2 min-h-[32px] text-sm font-semibold text-slate-900">{team.name[locale]}</h3>

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

export { TeamsCardItem }

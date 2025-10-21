import Image from "next/image"
import { useCurrentLocale } from "@/locale/client"
import { cn } from "@/shared/lib"
import { EmptyTeam, FavoriteTeam } from "@/shared/types/team"

interface FavoriteTeamCardProps {
  team: FavoriteTeam | EmptyTeam
  onClick: () => void
  className?: string
}

const FavoriteTeamCard: React.FC<FavoriteTeamCardProps> = ({ team, onClick, className = "" }) => {
  const locale = useCurrentLocale()

  const isFavoriteTeam = (team: FavoriteTeam | EmptyTeam): team is FavoriteTeam => {
    return "team" in team
  }

  const logoUrl = isFavoriteTeam(team) ? team.team.logoUrl : team.logoUrl
  const altText = isFavoriteTeam(team) ? team.team.name[locale] : ""

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClick()
  }

  return (
    <div
      className={cn(
        `flex h-20 w-20 flex-shrink-0 cursor-pointer scroll-mx-2.5 items-center justify-center rounded-full border border-[#CAD5E2] bg-white ${className}`,
        {
          "cursor-default": !("team" in team),
        }
      )}
      onClick={handleClick}
    >
      <div className={`h-13.5 w-11.5 overflow-hidden rounded-lg`}>
        <Image
          src={logoUrl}
          alt={altText}
          width={45}
          height={54}
          className="h-full w-full object-contain"
          quality={100}
        />
      </div>
    </div>
  )
}

export { FavoriteTeamCard }

import Image from "next/image"
import React from "react"
import { useCurrentLocale } from "@/locale/client"
import { Team } from "@/shared/types/team"

interface ITeamCardProps {
  team: Team
}

const TeamCard: React.FC<ITeamCardProps> = ({ team }) => {
  const locale = useCurrentLocale()

  return (
    <div
      data-team-id={team.id}
      className="flex w-[230px] cursor-pointer flex-col gap-3 transition-transform hover:scale-[1.01]"
    >
      <Image
        src={team.logoUrl}
        alt={team.name[locale]}
        width={230}
        height={260}
        className="h-[260px] w-full rounded-md bg-slate-200 object-contain p-8"
      />
      <h3 className="text-center text-xl leading-[1.2] font-bold tracking-[0] text-slate-900">{team.name[locale]}</h3>
    </div>
  )
}

export default TeamCard

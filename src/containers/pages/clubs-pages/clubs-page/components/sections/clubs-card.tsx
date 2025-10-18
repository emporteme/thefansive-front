import Image from "next/image"
import React from "react"

interface IClubsCardProps {
  id?: string | number
  club: {
    id: number
    name: string
    logo: string
  }
}

const ClubsCard: React.FC<IClubsCardProps> = ({ club }) => {
  return (
    <div data-club-id={club.id} className="flex w-[230px] cursor-pointer flex-col gap-3 rounded-md">
      <Image
        src={club.logo}
        alt={club.name}
        width={230}
        height={260}
        className="h-[260px] w-full rounded-md object-cover"
      />
      <h3 className="text-center text-xl leading-[1.2] font-bold tracking-[0] text-slate-900">{club.name}</h3>
    </div>
  )
}

export default ClubsCard

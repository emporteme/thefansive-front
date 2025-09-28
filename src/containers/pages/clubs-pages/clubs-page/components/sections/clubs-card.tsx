import Image from "next/image"
import React from "react"

interface IClubsCardProps {
  title: string
  image: string
}

const ClubsCard: React.FC<IClubsCardProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col gap-3 text-center text-xl font-bold text-black">
      <Image
        src={image || "/images/dev/club-card-1.svg"}
        alt={title}
        width={250}
        height={260}
        className="h-full w-full object-cover"
      />
      <h3>{title || "Juventus"}</h3>
    </div>
  )
}

export default ClubsCard

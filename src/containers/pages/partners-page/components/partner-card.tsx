import React from "react"
import { CachedImage } from "@/shared/components/ui"
import { Partner } from "../partners-page"

interface PartnerCardProps {
  partner: Partner
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e)
  }

  return (
    <div onClick={handleClick} className="h-[100px] w-[100px] cursor-pointer">
      <CachedImage
        src={partner.image}
        alt={partner.name}
        width={100}
        height={100}
        className="h-full w-full object-contain"
      />
    </div>
  )
}

export default PartnerCard

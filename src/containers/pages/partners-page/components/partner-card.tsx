import Image from "next/image"
import React from "react"
import { Partner } from "../partners-page"

interface PartnerCardProps {
  partner: Partner
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(e)
  }

  return (
    <div onClick={handleClick}>
      <Image src={partner.image} alt={partner.name} width={100} height={100} />
    </div>
  )
}

export default PartnerCard

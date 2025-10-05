import React from "react"
import PartnerCard from "./partner-card"
import { Partner } from "../partners-page"

interface PartnersListProps {
  partners: Partner[]
}

const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  return (
    <div className="mt-16 grid grid-cols-9 gap-8">
      {partners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </div>
  )
}

export default PartnersList

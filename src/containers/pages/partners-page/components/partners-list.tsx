"use client"

import React, { useMemo, useState } from "react"
import { Pagination } from "@/shared/components/ui"
import PartnerCard from "./partner-card"
import { Partner } from "../partners-page"

interface PartnersListProps {
  partners: Partner[]
  itemsPerPage?: number
}

const PartnersList: React.FC<PartnersListProps> = ({ partners, itemsPerPage = 18 }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const pageCount = Math.ceil(partners.length / itemsPerPage)

  const currentPartners = useMemo(() => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return partners.slice(startIndex, endIndex)
  }, [partners, currentPage, itemsPerPage])

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  return (
    <div className="mt-16">
      <div className="grid grid-cols-9 gap-8">
        {currentPartners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-16">
          <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  )
}

export default PartnersList

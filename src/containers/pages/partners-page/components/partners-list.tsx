"use client"

import React, { useMemo, useState } from "react"
import { Pagination } from "@/shared/components/ui"
import PartnerCard from "./partner-card"
import { Partner } from "../partners-page"

interface PartnersListProps {
  partners: Partner[]
  itemsPerPage?: number
}

const PartnersList: React.FC<PartnersListProps> = ({ partners, itemsPerPage = 31 }) => {
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

  const renderPartners = () => {
    const rows = []
    const partnersPerRow = 9

    for (let i = 0; i < currentPartners.length; i += partnersPerRow) {
      const rowPartners = currentPartners.slice(i, i + partnersPerRow)
      const isLastRow = i + partnersPerRow >= currentPartners.length
      const isIncompleteRow = rowPartners.length < partnersPerRow

      const getGridCols = (count: number) => {
        switch (count) {
          case 1:
            return "grid-cols-1"
          case 2:
            return "grid-cols-2"
          case 3:
            return "grid-cols-3"
          case 4:
            return "grid-cols-4"
          case 5:
            return "grid-cols-5"
          case 6:
            return "grid-cols-6"
          case 7:
            return "grid-cols-7"
          case 8:
            return "grid-cols-8"
          default:
            return "grid-cols-9"
        }
      }

      rows.push(
        <div
          key={i}
          className={`grid gap-8 ${
            isLastRow && isIncompleteRow
              ? `${getGridCols(rowPartners.length)} mx-auto justify-self-center`
              : "grid-cols-9"
          }`}
        >
          {rowPartners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      )
    }

    return rows
  }

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-8">{renderPartners()}</div>

      {pageCount > 1 && (
        <div className="mt-12">
          <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  )
}

export default PartnersList

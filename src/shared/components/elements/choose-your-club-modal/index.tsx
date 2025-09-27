"use client"

import React from "react"
import { BaseModal } from "@/shared/components/widgets"
import { SportFilter } from "./sport-filter"

interface SportFilterModalProps {
  isOpen: boolean
  onClose: () => void
  onSportSelected: (sportId: number) => void
}

const SportFilterModal: React.FC<SportFilterModalProps> = ({ isOpen, onClose, onSportSelected }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} className="p-6" showCloseButton={true} closeOnOverlayClick={true}>
      <SportFilter onSportSelected={onSportSelected} />
    </BaseModal>
  )
}

export { SportFilterModal }

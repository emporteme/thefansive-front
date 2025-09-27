"use client"

import React from "react"
import { BaseModal } from "./base-modal"

interface SportFilterModalProps {
  isOpen: boolean
  onClose: () => void
  onSportSelected: (sportId: number) => void
  children: React.ReactNode
}

const SportFilterModal: React.FC<SportFilterModalProps> = ({ isOpen, onClose, onSportSelected, children }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} className="p-6" showCloseButton={true} closeOnOverlayClick={true}>
      {children}
    </BaseModal>
  )
}

export { SportFilterModal }

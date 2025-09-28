"use client"

import React from "react"
import { ChosenClubs } from "./chosen-clubs"
import { SportFilter } from "./sport-filter"
import { BaseModal } from "../base-modal"

interface ChooseYourClubModalProps {
  isOpen: boolean
  onClose: () => void
  onSportSelected: (sportId: number) => void
}

const ChooseYourClubModal: React.FC<ChooseYourClubModalProps> = ({ isOpen, onClose, onSportSelected }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} className="p-6" showCloseButton={true} closeOnOverlayClick={true}>
      <ChosenClubs clubs={[]} />
      <SportFilter />
    </BaseModal>
  )
}

export { ChooseYourClubModal }

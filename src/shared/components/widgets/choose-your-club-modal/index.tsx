"use client"

import React from "react"
import { favoriteClubsData } from "@/containers/pages/user/profile-page/components/widgets/favorite-clubs"
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
      <ChosenClubs clubs={favoriteClubsData} />
      <SportFilter />
    </BaseModal>
  )
}

export { ChooseYourClubModal }

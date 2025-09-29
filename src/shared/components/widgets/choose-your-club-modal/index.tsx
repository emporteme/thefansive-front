"use client"

import React from "react"
import { favoriteClubsData } from "@/containers/pages/user/profile-page/components/widgets/favorite-clubs"
import { Cancel } from "@/shared/icons"
import { ChosenClubs, Club } from "./chosen-clubs"
import { BaseModal } from "../base-modal"

interface ChooseYourClubModalProps {
  isOpen: boolean
  onClose: () => void
  onClubSelected: (club: Club) => void
}

const ChooseYourClubModal: React.FC<ChooseYourClubModalProps> = ({ isOpen, onClose, onClubSelected }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      className="!bg-slate-100 px-16 py-9"
      showCloseButton={true}
      closeOnOverlayClick={true}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900">Your Favorite</h2>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-1 border-[#CAD5E2] bg-white transition-colors"
        >
          <Cancel className="h-6 w-6 text-black" />
        </button>
      </div>
      <ChosenClubs clubs={favoriteClubsData} />
    </BaseModal>
  )
}

export { ChooseYourClubModal }

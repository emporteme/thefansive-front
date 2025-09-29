"use client"

import React, { useState } from "react"
import { favoriteClubsData } from "@/containers/pages/user/profile-page/components/widgets/favorite-clubs"
import { ModalLayout } from "@/shared/components/ui"
import { Cancel } from "@/shared/icons"
import { ChosenClubs, Club } from "./chosen-clubs"
import { LeagueFilterSelect } from "./league-filter-select"
import { SearchFavoriteClub } from "./search-favorite-club"
import { ClubFilterSelect } from "./sport-filter-select"

interface ChooseYourClubModalProps {
  isOpen: boolean
  onClose: () => void
  onClubSelected: (club: Club) => void
  onSportChange?: (sportId: string) => void
  onLeagueChange?: (leagueId: string) => void
}

const ChooseYourClubModal: React.FC<ChooseYourClubModalProps> = ({
  isOpen,
  onClose,
  onClubSelected,
  onSportChange,
  onLeagueChange,
}) => {
  const [selectedSport, setSelectedSport] = useState<string>("")
  const [selectedLeague, setSelectedLeague] = useState<string>("")

  const handleClubSelect = (club: Club) => {
    onClubSelected(club)
    onClose()
  }

  const handleSportChange = (sportId: string) => {
    setSelectedSport(sportId)
    setSelectedLeague("")
    onSportChange?.(sportId)
  }

  const handleLeagueChange = (leagueId: string) => {
    setSelectedLeague(leagueId)
    onLeagueChange?.(leagueId)
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      className="h-[1000px] !bg-slate-100 px-16 py-9"
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
      <SearchFavoriteClub className="mt-6" clubs={favoriteClubsData} onClubSelect={handleClubSelect} />
      <div className="mt-6 flex items-center gap-2">
        <ClubFilterSelect placeholder="Sports" className="mb-6" onChange={handleSportChange} value={selectedSport} />
        <LeagueFilterSelect
          placeholder="League"
          className="mb-6"
          onChange={handleLeagueChange}
          value={selectedLeague}
          selectedSport={selectedSport}
        />
      </div>
    </ModalLayout>
  )
}

export { ChooseYourClubModal }

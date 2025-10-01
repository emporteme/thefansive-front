"use client"

import React, { useState } from "react"
import { ModalLayout } from "@/shared/components/ui"
import { Cancel } from "@/shared/icons"
import { ChosenClubs, Club } from "./chosen-clubs"
import { ClubsCardList } from "./clubs-card-list"
import { LeagueFilterSelect } from "./league-filter-select"
import { SearchFavoriteClub } from "./search-favorite-club"
import { ClubFilterSelect } from "./sport-filter-select"

interface ChooseYourClubModalProps {
  isOpen: boolean
  clubs: Club[]
  favoriteClubs: Club[]
  onClose: () => void
  onClubFavoriteToggle: (club: Club) => void
  onSportChange?: (sportId: string) => void
  onLeagueChange?: (leagueId: string) => void
  onSearchClubSelect?: (club: Club) => void
}

const ChooseYourClubModal: React.FC<ChooseYourClubModalProps> = ({
  isOpen,
  clubs,
  favoriteClubs,
  onClose,
  onClubFavoriteToggle,
  onSportChange,
  onLeagueChange,
  onSearchClubSelect,
}) => {
  const [selectedSport, setSelectedSport] = useState<string>("")
  const [selectedLeague, setSelectedLeague] = useState<string>("")

  const handleSportChange = (sportId: string) => {
    setSelectedSport(sportId)
    setSelectedLeague("")
    onSportChange?.(sportId)
  }

  const handleLeagueChange = (leagueId: string) => {
    setSelectedLeague(leagueId)
    onLeagueChange?.(leagueId)
  }

  const handleToggleFavorite = (clubId: number) => {
    const club = clubs.find((club) => club.id === clubId)
    onClubFavoriteToggle(club as Club)
  }

  const handleCloseModal = () => {
    setSelectedSport("")
    setSelectedLeague("")
    onClose()
  }

  const handleSearchClubSelect = (club: Club) => {
    onSearchClubSelect?.(club)
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={handleCloseModal}
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
      <ChosenClubs clubs={favoriteClubs} />
      <SearchFavoriteClub className="mt-6" clubs={clubs} onClubSelect={handleSearchClubSelect} />
      <div className="mt-6 flex items-center gap-2">
        <ClubFilterSelect placeholder="Sports" onChange={handleSportChange} value={selectedSport} />
        <LeagueFilterSelect
          placeholder="League"
          onChange={handleLeagueChange}
          value={selectedLeague}
          selectedSport={selectedSport}
        />
      </div>

      <ClubsCardList
        className="mt-6"
        clubs={clubs}
        favoriteClubs={favoriteClubs}
        onToggleFavorite={handleToggleFavorite}
      />
    </ModalLayout>
  )
}

export { ChooseYourClubModal }

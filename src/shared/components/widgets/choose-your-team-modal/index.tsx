"use client"

import React, { useState } from "react"
import { useAddFavoriteTeam } from "@/shared/api/hooks"
import { ModalLayout } from "@/shared/components/ui"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Cancel } from "@/shared/icons"
import { Team } from "@/shared/types/team"
import { ClubsCardList } from "./clubs-card-list"
import { Club, FavoriteTeams } from "./favorite-teams"
import { LeagueFilterSelect } from "./league-filter-select"
import { SearchFavoriteClub } from "./search-favorite-club"
import { ClubFilterSelect } from "./sport-filter-select"

interface ChooseYourTeamModalProps {
  isOpen: boolean
  onClose: () => void
  onSportChange?: (sportId: string) => void
  onLeagueChange?: (leagueId: string) => void
  onSearchClubSelect?: (club: Club) => void
  onClearSearch?: () => void
}

const ChooseYourTeamModal: React.FC<ChooseYourTeamModalProps> = ({
  isOpen,
  onClose,
  onSportChange,
  onLeagueChange,
  onSearchClubSelect,
  onClearSearch,
}) => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const [selectedSport, setSelectedSport] = useState<string>("")
  const [selectedLeague, setSelectedLeague] = useState<string>("")
  const [searchValue, setSearchValue] = useState("")

  const { mutate: addFavoriteTeam } = useAddFavoriteTeam()

  const clearSearch = () => {
    setSearchValue("")
  }

  const handleSportChange = (sportId: string) => {
    clearSearch()
    setSelectedSport(sportId)
    setSelectedLeague("")
    onSportChange?.(sportId)
  }

  const handleLeagueChange = (leagueId: string) => {
    clearSearch()
    setSelectedLeague(leagueId)
    onLeagueChange?.(leagueId)
  }

  const handleToggleFavorite = (teamId: number) => {
    addFavoriteTeam(teamId)
  }

  const handleCloseModal = () => {
    setSelectedSport("")
    setSelectedLeague("")
    clearSearch()
    onClose()
  }

  const handleSearchClubSelect = (club: Club) => {
    onSearchClubSelect?.(club)
    setSelectedSport("")
    setSelectedLeague("")
  }

  const handleClearSearch = () => {
    onClearSearch?.()
  }

  const handleTeamClick = (team: Team) => {
    navigate(routes.clubs.single(team.id.toString()))
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
      <FavoriteTeams />
      <SearchFavoriteClub
        className="mt-6"
        clubs={[]}
        searchValue={searchValue}
        onChange={setSearchValue}
        onClubSelect={handleSearchClubSelect}
        onClear={handleClearSearch}
      />
      <div className="mt-6 flex items-center gap-2">
        <ClubFilterSelect placeholder="Sports" onChange={handleSportChange} value={selectedSport} />
        <LeagueFilterSelect
          placeholder="League"
          onChange={handleLeagueChange}
          value={selectedLeague}
          selectedSport={selectedSport}
        />
      </div>

      <ClubsCardList className="mt-6" onToggleFavorite={handleToggleFavorite} onTeamClick={handleTeamClick} />
    </ModalLayout>
  )
}

export { ChooseYourTeamModal }

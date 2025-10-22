"use client"

import React, { useState } from "react"
import { useFavoriteTeams, useSearchTeams, useSportTypes, useTeams, useToggleFavoriteTeam } from "@/shared/api/hooks"
import { ModalLayout } from "@/shared/components/ui"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Cancel } from "@/shared/icons"
import { FavoriteTeam, SportTypeValue, Team } from "@/shared/types/team"
import { FavoriteTeams } from "./favorite-teams"
import { LeagueFilterSelect } from "./league-filter-select"
import { SearchFavoriteClub } from "./search-favorite-club"
import { ClubFilterSelect } from "./sport-filter-select"
import { TeamsCardList } from "./teams-card-list"

interface ChooseYourTeamModalProps {
  isOpen: boolean
  onClose: () => void
}

const isFavoriteTeam = (teamId: number, favoriteTeams: FavoriteTeam[] | undefined) =>
  favoriteTeams?.some((favoriteTeam) => favoriteTeam.teamId === teamId)

const ChooseYourTeamModal: React.FC<ChooseYourTeamModalProps> = ({ isOpen, onClose }) => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const [selectedSport, setSelectedSport] = useState<string | undefined>(undefined)
  const [selectedLeague, setSelectedLeague] = useState<string>("")
  const [searchValue, setSearchValue] = useState("")
  const { data: sportTypes } = useSportTypes()
  const { toggleFavoriteOptimistic } = useToggleFavoriteTeam()
  const { data: favoriteTeams, isLoading: isFavoriteTeamsLoading } = useFavoriteTeams()
  const { data: teams, isLoading: isTeamsLoading } = useTeams({
    sportType: selectedSport as SportTypeValue,
  })
  const { data: searchTeams } = useSearchTeams(searchValue)

  const clearSearch = () => {
    setSearchValue("")
  }

  const handleSportChange = (sportId: string) => {
    clearSearch()
    setSelectedSport(sportId)
    setSelectedLeague("")
  }

  const handleLeagueChange = (leagueId: string) => {
    clearSearch()
    setSelectedLeague(leagueId)
  }

  const handleToggleFavorite = (team: Team) => {
    const isFavorite = isFavoriteTeam(team.id, favoriteTeams) ?? false
    toggleFavoriteOptimistic(team, isFavorite)
  }

  const handleCloseModal = () => {
    setSelectedSport("")
    setSelectedLeague("")
    clearSearch()
    onClose()
  }

  const handleTeamSelect = (team: Team) => {
    navigate(routes.clubs.single(team.id.toString()))
  }

  const handleClearSearch = () => {}

  const handleTeamClick = (team: Team) => {
    navigate(routes.clubs.single(team.id.toString()))
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={handleCloseModal}
      className="min-h-[900px] !bg-slate-100 px-16 py-9"
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
        teams={searchTeams || []}
        searchValue={searchValue}
        onChange={setSearchValue}
        onTeamSelect={handleTeamSelect}
        onClear={handleClearSearch}
      />
      <div className="mt-6 flex items-center gap-2">
        <ClubFilterSelect
          placeholder="Sports"
          onChange={handleSportChange}
          value={selectedSport}
          options={sportTypes}
        />
        <LeagueFilterSelect
          placeholder="League"
          onChange={handleLeagueChange}
          value={selectedLeague}
          selectedSport={selectedSport}
        />
      </div>

      <TeamsCardList
        teams={teams || []}
        favoriteTeams={favoriteTeams || []}
        isLoading={isTeamsLoading || isFavoriteTeamsLoading}
        className="mt-6"
        onToggleFavorite={handleToggleFavorite}
        onTeamClick={handleTeamClick}
        isTrending={!selectedSport && !selectedLeague}
      />
    </ModalLayout>
  )
}

export { ChooseYourTeamModal }

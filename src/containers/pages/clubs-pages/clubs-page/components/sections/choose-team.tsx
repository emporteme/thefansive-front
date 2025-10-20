"use client"

import Image from "next/image"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Keyboard, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useCurrentLocale } from "@/locale/client"
import { ChooseYourTeamModal } from "@/shared/components/widgets"
import { useIsHydrated } from "@/shared/hooks/client"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { ArrowSelect } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import { EmptyTeam, FavoriteTeam, Team } from "@/shared/types/team"
import "swiper/css"
import "swiper/css/navigation"

interface Club {
  id: number
  name: string
  logo: string
}

interface TeamLogoCardProps {
  team: FavoriteTeam | EmptyTeam
  onClick?: () => void
}

const TeamLogoCard: React.FC<TeamLogoCardProps> = ({ team, onClick }) => {
  const locale = useCurrentLocale()

  const isFavoriteTeam = (team: FavoriteTeam | EmptyTeam): team is FavoriteTeam => {
    return "team" in team
  }

  const logoUrl = isFavoriteTeam(team) ? team.team.logoUrl : team.logoUrl
  const altText = isFavoriteTeam(team) ? team.team.name[locale] : ""

  return (
    <div
      className="flex h-20 w-20 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#CAD5E2] bg-white transition-transform"
      onClick={onClick}
    >
      <div className="h-13.5 w-11.5 overflow-hidden rounded-lg">
        <Image
          src={logoUrl}
          alt={altText}
          width={45}
          height={54}
          className="h-full w-full object-contain"
          quality={100}
        />
      </div>
    </div>
  )
}

const maxShowedClubs = 9

interface ChooseTeamProps {
  className?: string
  isLoading: boolean
  favoriteTeams: FavoriteTeam[]
}

const ChooseTeam: React.FC<ChooseTeamProps> = ({ className, isLoading, favoriteTeams }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isHydrated = useIsHydrated()
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)
  const navigate = useNavigate()
  const routes = useRoutes()

  const displayTeams = useMemo(() => {
    if (isLoading || !isHydrated) {
      return Array.from({ length: maxShowedClubs }, (_, index) => ({
        id: -(index + 1000),
        logoUrl: "",
        isSkeleton: true,
      })) as (EmptyTeam & { isSkeleton: boolean })[]
    }

    const emptyTeams = Array.from(
      { length: maxShowedClubs - (favoriteTeams ? favoriteTeams?.length : 0) },
      (_, index) =>
        ({
          id: -(index + 1),
          logoUrl: "/images/fallbacks/empty-card-image-small.png",
        }) as EmptyTeam
    )

    if (!favoriteTeams) {
      return emptyTeams
    }

    if (favoriteTeams.length >= maxShowedClubs) {
      return favoriteTeams
    }

    return [...favoriteTeams, ...emptyTeams]
  }, [favoriteTeams, isLoading, isHydrated])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [displayTeams])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSearchClubSelect = (_club: Club) => {}

  const handleClearSearch = () => {}

  const handleTeamClick = (team: Team) => {
    navigate(routes.clubs.single(team.id.toString()))
  }

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <div className={cn("mx-20 flex items-center justify-between rounded-2xl bg-slate-200 px-6 py-3", className)}>
      <div className="flex items-center gap-2.5">
        <button
          ref={prevRef}
          onClick={handlePrevClick}
          aria-label="Previous clubs"
          className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-700 transition"
        >
          <ArrowSelect className="h-4 w-4 rotate-90" />
        </button>

        <div className="w-[calc(8*80px+7*10px)] overflow-hidden">
          {!isHydrated ? (
            // До гидратации показываем статичный grid с skeleton элементами
            <div className="flex gap-2.5">
              {Array.from({ length: maxShowedClubs }, (_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border border-[#CAD5E2] bg-white"
                >
                  <div className="h-13.5 w-11.5 overflow-hidden rounded-lg">
                    <div className="h-full w-full animate-pulse rounded-lg bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Keyboard, A11y]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              speed={600}
              slidesPerView={8}
              spaceBetween={10}
              keyboard={{ enabled: true }}
              a11y={{ enabled: true }}
              className="w-full"
            >
              {displayTeams?.map((team) => {
                const isFavoriteTeam = "team" in team
                const isSkeleton = "isSkeleton" in team && (team as EmptyTeam & { isSkeleton: boolean }).isSkeleton

                if (isSkeleton) {
                  return (
                    <SwiperSlide key={team.id}>
                      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border border-[#CAD5E2] bg-white">
                        <div className="h-13.5 w-11.5 overflow-hidden rounded-lg">
                          <div className="h-full w-full animate-pulse rounded-lg bg-slate-200" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                }

                return (
                  <SwiperSlide key={team.id}>
                    <TeamLogoCard
                      team={team}
                      onClick={() => {
                        if (isFavoriteTeam) {
                          handleTeamClick((team as FavoriteTeam).team)
                        } else {
                          handleOpenModal()
                        }
                      }}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}
        </div>

        <button
          ref={nextRef}
          onClick={handleNextClick}
          aria-label="Next clubs"
          className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-700 transition"
        >
          <ArrowSelect className="h-4 w-4 -rotate-90" />
        </button>
      </div>

      <button
        onClick={handleOpenModal}
        className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-gray-50"
      >
        <span>Choose your team</span>
        <ArrowSelect className="h-4 w-4" />
      </button>

      {typeof window !== "undefined" &&
        isModalOpen &&
        createPortal(
          <ChooseYourTeamModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSearchClubSelect={handleSearchClubSelect}
            onClearSearch={handleClearSearch}
          />,
          document.body
        )}
    </div>
  )
}

export default ChooseTeam

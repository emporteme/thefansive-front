"use client"

import Image from "next/image"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Keyboard, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import { clubsData } from "@/containers/pages/user/profile-page/components/widgets/favorite-clubs"
import { ChooseYourClubModal } from "@/shared/components/widgets/choose-your-club-modal"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { ArrowSelect } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface Club {
  id: number
  name: string
  logo: string
}

interface ClubLogoCardProps {
  club: Club
  onClick?: () => void
}

const ClubLogoCard: React.FC<ClubLogoCardProps> = ({ club, onClick }) => {
  return (
    <div
      className="flex h-20 w-20 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#CAD5E2] bg-white transition-transform"
      onClick={onClick}
    >
      <div className="h-13.5 w-11.5 overflow-hidden rounded-lg">
        <Image
          src={club.logo}
          alt={club.name}
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

const ChooseTeam: React.FC<{ className?: string }> = ({ className }) => {
  const [favoriteClubs, setFavoriteClubs] = useState<Club[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clubs, setClubs] = useState<Club[]>(clubsData)
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)
  const navigate = useNavigate()
  const routes = useRoutes()

  const displayClubs = useMemo(() => {
    if (favoriteClubs.length >= maxShowedClubs) {
      return favoriteClubs
    }

    const emptyClubs = Array.from({ length: maxShowedClubs - favoriteClubs.length }, (_, index) => ({
      id: -(index + 1),
      name: "",
      logo: "/images/fallbacks/empty-card-image-small.png",
    }))

    return [...favoriteClubs, ...emptyClubs]
  }, [favoriteClubs])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [displayClubs])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleClubFavoriteToggle = (club: Club) => {
    if (favoriteClubs.some((c) => c.id === club.id)) {
      setFavoriteClubs(favoriteClubs.filter((c) => c.id !== club.id))
    } else {
      setFavoriteClubs([...favoriteClubs, club])
    }
  }

  const handleSearchClubSelect = (club: Club) => {
    setClubs([club])
  }

  const handleClearSearch = () => {
    setClubs(clubsData)
  }

  const handleClubClick = (club: Club) => {
    navigate(routes.clubs.single(club.id.toString()))
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
            {displayClubs.map((club) => (
              <SwiperSlide key={club.id}>
                <ClubLogoCard club={club} onClick={() => club.id > 0 && handleClubClick(club)} />
              </SwiperSlide>
            ))}
          </Swiper>
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
          <ChooseYourClubModal
            clubs={clubs}
            favoriteClubs={favoriteClubs}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onClubFavoriteToggle={handleClubFavoriteToggle}
            onSearchClubSelect={handleSearchClubSelect}
            onClearSearch={handleClearSearch}
          />,
          document.body
        )}
    </div>
  )
}

export default ChooseTeam

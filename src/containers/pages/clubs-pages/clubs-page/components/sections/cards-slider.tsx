"use client"

import classNames from "classnames"
import React, { useRef } from "react"
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import { ArrowLeft, ArrowRight } from "@/shared/icons"

interface ICardsSliderProps {
  title: string
  navCount: number
  elements: React.ReactNode[]
  autoDelay?: number
  loop?: boolean
  className?: string
}

const CardsSlider: React.FC<ICardsSliderProps> = ({
  title,
  navCount,
  elements = [],
  autoDelay = 4000,
  loop = true,
  className,
}) => {
  // Guard: nothing to render
  if (elements.length === 0) {
    return null
  }

  // Navigation element refs
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  // Show navigation only if we have more elements than navCount
  const showNavigation = elements.length > navCount

  return (
    <div className={classNames("w-full px-[5vw]", className)}>
      {/* Header with title and navigation */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>

        {showNavigation && (
          <div className="flex gap-2">
            <button
              ref={prevRef}
              aria-label="Previous cards"
              className={classNames(
                "group h-10 w-10 rounded-lg border border-gray-200 bg-white",
                "transition hover:bg-gray-50",
                "flex items-center justify-center text-gray-700"
              )}
            >
              <ArrowLeft />
            </button>

            <button
              ref={nextRef}
              aria-label="Next cards"
              className={classNames(
                "group h-10 w-10 rounded-lg border border-gray-200 bg-white",
                "transition hover:bg-gray-50",
                "flex items-center justify-center text-gray-700"
              )}
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Keyboard, A11y]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: autoDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={loop && showNavigation}
        speed={600}
        slidesPerView={navCount}
        spaceBetween={16}
        breakpoints={{
          640: {
            slidesPerView: Math.min(navCount, 2),
            spaceBetween: 16,
          },
          768: {
            slidesPerView: Math.min(navCount, 3),
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: navCount,
            spaceBetween: 24,
          },
        }}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        className="w-full"
      >
        {elements.map((element, index) => (
          <SwiperSlide key={`card-${index}`}>
            <div className="h-full">{element}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardsSlider

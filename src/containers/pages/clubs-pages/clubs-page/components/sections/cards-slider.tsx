"use client"

import classNames from "classnames"
import React, { useEffect, useRef } from "react"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import { ArrowLeft, ArrowRight } from "@/shared/icons"

interface ICardsSliderProps {
  title: string
  subtitle?: string
  navCount: number
  rowCount: number
  elements: React.ReactNode[]
  autoDelay?: number
  loop?: boolean
  className?: string
}

const CardsSlider: React.FC<ICardsSliderProps> = ({
  title,
  subtitle,
  navCount,
  rowCount = 1,
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
  const swiperRef = useRef<SwiperType | null>(null)

  // Calculate total items that can be shown in the grid
  const totalItemsInView = navCount * rowCount

  // Show navigation only if we have more elements than can fit in the grid
  const showNavigation = elements.length > totalItemsInView

  // Update navigation after component mounts
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.update()
    }
  }, [showNavigation])

  return (
    <div className={classNames("w-full", className)}>
      {/* Header with title and navigation */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
          <p className="font-medium text-slate-900">{subtitle}</p>
        </div>
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

      {/* Grid-based Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Keyboard, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
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
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        className="w-full"
      >
        {/* Group elements into grid pages */}
        {Array.from({ length: Math.ceil(elements.length / totalItemsInView) }, (_, pageIndex) => (
          <SwiperSlide key={`page-${pageIndex}`}>
            <div
              className="grid h-full gap-1.5"
              style={{
                gridTemplateColumns: `repeat(${navCount}, 1fr)`,
                gridTemplateRows: `repeat(${rowCount}, 1fr)`,
              }}
            >
              {elements
                .slice(pageIndex * totalItemsInView, (pageIndex + 1) * totalItemsInView)
                .map((element, cardIndex) => (
                  <div key={`card-${pageIndex}-${cardIndex}`} className="h-full">
                    {element}
                  </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardsSlider

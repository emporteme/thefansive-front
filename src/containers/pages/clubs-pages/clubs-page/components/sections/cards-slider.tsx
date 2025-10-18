"use client"

import classNames from "classnames"
import React, { useRef } from "react"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ArrowLeft, ArrowRight } from "@/shared/icons"
import "swiper/css"
import "swiper/css/navigation"

interface ICardsSliderProps {
  title: string
  subtitle?: string
  navCount: number
  rowCount: number
  elements: React.ReactNode[]
  autoDelay?: number
  loop?: boolean
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const CardsSlider: React.FC<ICardsSliderProps> = ({
  onClick,
  title,
  subtitle,
  navCount,
  rowCount = 1,
  elements = [],
  autoDelay = 4000,
  loop = true,
  className,
}) => {
  if (elements.length === 0) {
    return null
  }

  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  const totalItemsInView = navCount * rowCount

  const showNavigation = elements.length > totalItemsInView

  return (
    <div className={classNames("w-full", className)} onClick={onClick}>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-3xl leading-[48px] font-semibold tracking-[0] text-slate-900">{title}</h2>
          <p className="text-base font-normal tracking-[0] text-slate-900">{subtitle}</p>
        </div>
        <div className={classNames("flex gap-2", !showNavigation && "invisible")}>
          <button
            ref={prevRef}
            aria-label="Previous cards"
            className={classNames(
              "group border-1.5 h-15 w-16 rounded-lg border border-slate-200 bg-white",
              "transition hover:bg-gray-50",
              "flex items-center justify-center text-slate-900"
            )}
          >
            <ArrowLeft />
          </button>

          <button
            ref={nextRef}
            aria-label="Next cards"
            className={classNames(
              "group h-15 w-16 rounded-lg border border-gray-200 bg-white",
              "transition hover:bg-gray-50",
              "flex items-center justify-center text-slate-900"
            )}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

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

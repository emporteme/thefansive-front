"use client"

import classNames from "classnames"
import React, { useRef, useState } from "react"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Keyboard, Navigation } from "swiper/modules"
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
  loop = false,
  className,
}) => {
  if (elements.length === 0) {
    return null
  }

  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const totalItemsInView = navCount * rowCount

  const showNavigation = elements.length > totalItemsInView

  return (
    <div className={classNames("w-full", className)} onClick={onClick}>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-3xl leading-[48px] font-semibold tracking-[0] text-slate-900">{title}</h2>
          <p className="text-base font-normal tracking-[0] text-slate-900">{subtitle}</p>
        </div>
        <div className={classNames("flex gap-6", !showNavigation && "invisible")}>
          <button
            ref={prevRef}
            aria-label="Previous cards"
            disabled={isBeginning && !loop}
            className={classNames(
              "group flex h-15 w-16 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-900 transition hover:bg-gray-50",
              {
                "cursor-default !bg-slate-200 !text-slate-400": isBeginning && !loop,
              }
            )}
          >
            <ArrowLeft />
          </button>

          <button
            ref={nextRef}
            aria-label="Next cards"
            disabled={isEnd && !loop}
            className={classNames(
              "group flex h-15 w-16 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-900 transition hover:bg-gray-50",
              {
                "cursor-default !bg-slate-200 !text-slate-400": isEnd && !loop,
              }
            )}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Keyboard, A11y]}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            const navigation = swiper.params.navigation
            if (navigation) {
              navigation.prevEl = prevRef.current
              navigation.nextEl = nextRef.current
            }
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={loop}
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

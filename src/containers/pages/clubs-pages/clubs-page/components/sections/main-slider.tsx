"use client"

import classNames from "classnames"
import Image from "next/image"
import React, { useEffect, useMemo, useRef, useState } from "react"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ArrowLeft, ArrowRight } from "@/shared/icons"
import "swiper/css"
import "swiper/css/navigation"

type SlideImage = {
  src: string
  alt?: string
}

type MainSliderProps = {
  images: SlideImage[]
  autoDelay?: number
  loop?: boolean
  className?: string
  leftButton?: React.ReactNode
  rightButton?: React.ReactNode
}

const MainSlider: React.FC<MainSliderProps> = ({
  images = [],
  autoDelay = 4000,
  loop = true,
  className,
  leftButton,
  rightButton,
}) => {
  const slides = useMemo(() => (images || []).filter(Boolean), [images])

  if (slides.length === 0) {
    return null
  }

  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  const [progress, setProgress] = useState<number[]>(Array(slides.length).fill(0))
  const [active, setActive] = useState(0)
  const delayRef = useRef<number>(autoDelay)

  useEffect(() => {
    setProgress(Array(slides.length).fill(0))
    setActive(0)
  }, [slides.length])

  const updateBars = (currentIndex: number, fraction: number) => {
    setProgress((prev) => {
      const next = prev.slice()
      for (let i = 0; i < slides.length; i++) {
        if (i < currentIndex) next[i] = 1
        else if (i === currentIndex) next[i] = Math.min(Math.max(fraction, 0), 1)
        else next[i] = 0
      }
      return next
    })
  }

  const handleProgressClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
      if (swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start()
      }
    }
  }

  return (
    <div
      className={classNames(
        "relative mt-7.5 w-full overflow-hidden rounded-none bg-black",
        "aspect-[1440/500]",
        className
      )}
    >
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className={classNames(
          "group absolute top-1/2 left-8 z-20 -translate-y-1/2",
          "h-12.5 w-12.5 rounded-full bg-white/10 backdrop-blur",
          "transition hover:bg-white/20",
          "flex items-center justify-center text-white"
        )}
      >
        <div className="text-3xl leading-none">{leftButton ?? <ArrowLeft />}</div>
      </button>

      <button
        ref={nextRef}
        aria-label="Next slide"
        className={classNames(
          "group absolute top-1/2 right-8 z-20 -translate-y-1/2",
          "h-12.5 w-12.5 rounded-full bg-white/10 backdrop-blur",
          "transition hover:bg-white/20",
          "flex items-center justify-center text-white"
        )}
      >
        <div className="text-3xl leading-none">{rightButton ?? <ArrowRight />}</div>
      </button>

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
        }}
        loop={loop}
        speed={600}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        onSlideChange={(swiper) => {
          const idx = swiper.realIndex ?? swiper.activeIndex ?? 0
          setActive(idx)
          updateBars(idx, 0)
          const d = (swiper.params.autoplay as { delay?: number })?.delay ?? autoDelay
          delayRef.current = typeof d === "number" ? d : autoDelay
        }}
        onAutoplayTimeLeft={(_, time, _progress) => {
          if (time !== undefined && delayRef.current) {
            const fraction = 1 - time / delayRef.current
            updateBars(active, fraction)
          }
        }}
        className="h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={`${img.src}-${i}`}>
            <div className="relative h-full w-full">
              <Image
                src={img.src}
                alt={img.alt ?? `slide-${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="pointer-events-none object-cover select-none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-x-0 bottom-12.5 z-20 flex items-center justify-center gap-3 px-8">
        {progress.map((v, i) => (
          <button
            key={`bar-${i}`}
            onClick={() => handleProgressClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={classNames(
              "z-30 h-1 w-20 overflow-hidden rounded-full bg-white/50 transition-all duration-200",
              "cursor-pointer hover:bg-white/70",
              active === i && "ring-1 ring-white/50 ring-offset-1 ring-offset-black"
            )}
          >
            <div
              className="h-full bg-white transition-[width] duration-100 ease-linear"
              style={{ width: `${Math.round(v * 100)}%` }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default MainSlider

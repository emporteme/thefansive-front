"use client"

import classNames from "classnames"
import Image from "next/image"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import { ArrowLeft, ArrowRight } from "@/shared/icons"

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
  // Guard: nothing to render
  const slides = useMemo(() => (images || []).filter(Boolean), [images])
  if (slides.length === 0) {
    return null
  }

  // Navigation element refs
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  // Progress for each slide [0..1]
  const [progress, setProgress] = useState<number[]>(Array(slides.length).fill(0))
  const [active, setActive] = useState(0)
  const delayRef = useRef<number>(autoDelay)

  // Reset progress when images length changes
  useEffect(() => {
    setProgress(Array(slides.length).fill(0))
    setActive(0)
  }, [slides.length])

  // Helper to recompute bars every tick
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

  return (
    <div className={classNames("relative w-full", "h-[500px] overflow-hidden rounded-none bg-black", className)}>
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className={classNames(
          "group absolute top-1/2 left-3 z-20 -translate-y-1/2",
          "h-12 w-12 rounded-full bg-white/10 backdrop-blur",
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
          "group absolute top-1/2 right-3 z-20 -translate-y-1/2",
          "h-12 w-12 rounded-full bg-white/10 backdrop-blur",
          "transition hover:bg-white/20",
          "flex items-center justify-center text-white"
        )}
      >
        <div className="text-3xl leading-none">{rightButton ?? <ArrowRight />}</div>
      </button>

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
        loop={loop}
        speed={600}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        onSlideChange={(swiper) => {
          // realIndex ignores duplicated slides when loop=true
          const idx = swiper.realIndex ?? swiper.activeIndex ?? 0
          setActive(idx)
          updateBars(idx, 0)
          // keep Swiper's current delay in case it's changed per-slide
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const d = (swiper.params.autoplay as any)?.delay ?? autoDelay
          delayRef.current = typeof d === "number" ? d : autoDelay
        }}
        onAutoplayTimeLeft={(_, time, _progress) => {
          // Swiper gives remaining time; convert to filled fraction
          if (time !== undefined && delayRef.current) {
            const fraction = 1 - time / delayRef.current
            updateBars(active, fraction)
          }
        }}
        className="h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={`${img.src}-${i}`}>
            {/* Slide content */}
            <div className="relative h-full w-full">
              {/* Background image */}
              <Image
                src={img.src}
                alt={img.alt ?? `slide-${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="pointer-events-none object-cover select-none"
              />
              {/* Optional: dark overlay to match your screenshot mood */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Example caption area (left empty by default) */}
              {/* <div className="bottom-16 left-8 absolute text-white">…</div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bars (bottom center) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-2 px-6">
        {progress.map((v, i) => (
          <div key={`bar-${i}`} className="h-1 w-16 overflow-hidden rounded-full bg-white/20">
            <div
              className="linear h-full bg-white transition-[width] duration-100"
              style={{ width: `${Math.round(v * 100)}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainSlider

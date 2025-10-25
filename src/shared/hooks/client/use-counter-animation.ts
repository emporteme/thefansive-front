import { useEffect, useState } from "react"

interface UseCounterAnimationOptions {
  duration?: number
  delay?: number
  easing?: (t: number) => number
}

// Easing функция для плавной анимации
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)

export const useCounterAnimation = (targetValue: number, options: UseCounterAnimationOptions = {}) => {
  const {
    duration = 2000, // 2 секунды по умолчанию
    delay = 0,
    easing = easeOutCubic,
  } = options

  const [currentValue, setCurrentValue] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (targetValue === 0) {
      setCurrentValue(0)
      return
    }

    setIsAnimating(true)
    setCurrentValue(0)

    const startTime = Date.now() + delay

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easing(progress)
      const newValue = Math.floor(targetValue * easedProgress)

      setCurrentValue(newValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrentValue(targetValue)
        setIsAnimating(false)
      }
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [targetValue, duration, delay, easing])

  return { currentValue, isAnimating }
}

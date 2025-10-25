import { useCallback, useEffect, useRef, useState } from "react"

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface UseCountdownOptions {
  onComplete?: () => void
  autoStart?: boolean
}

export const useCountdown = (
  targetDate: Date | string | number,
  options: UseCountdownOptions = {}
): CountdownTime & {
  isExpired: boolean
  isRunning: boolean
  start: () => void
  pause: () => void
  reset: () => void
} => {
  const { onComplete, autoStart = true } = options

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isExpired, setIsExpired] = useState(false)
  const [isRunning, setIsRunning] = useState(autoStart)

  // Используем ref для стабильной ссылки на onComplete
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime()
    const target = new Date(targetDate).getTime()
    const difference = target - now

    if (difference <= 0) {
      setIsExpired(true)
      setIsRunning(false)
      onCompleteRef.current?.()
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }, [targetDate])

  useEffect(() => {
    if (!isRunning) return

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Set up interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning, calculateTimeLeft])

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const reset = () => {
    setIsRunning(false)
    setIsExpired(false)
    setTimeLeft({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  }

  return {
    ...timeLeft,
    isExpired,
    isRunning,
    start,
    pause,
    reset,
  }
}

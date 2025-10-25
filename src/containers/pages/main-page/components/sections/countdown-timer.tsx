import React, { memo, useCallback } from "react"
import { useCountdown } from "@/shared/hooks/client"
import { Timer } from "@/shared/icons"

interface CountdownTimerProps {
  endDate: Date
  className?: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = memo(({ endDate, className }) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(endDate, {
    updateInterval: 5000, // Обновляем каждые 5 секунд
  })

  const formatTime = useCallback((): string => {
    if (isExpired) return "Ended"
    return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
  }, [days, hours, minutes, seconds, isExpired])

  return (
    <span className={`flex items-center gap-1 text-sm tracking-[0] text-gray-600 ${className}`}>
      <Timer />
      <p>{formatTime()}</p>
    </span>
  )
})

CountdownTimer.displayName = "CountdownTimer"

export default CountdownTimer

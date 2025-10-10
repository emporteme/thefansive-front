"use client"

import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/shared/components/ui"

interface OtpInputProps {
  length?: number
  onComplete: (otp: string) => void
  onResend?: () => void
  isValidating?: boolean
  hasError?: boolean
}

export const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onComplete,
  onResend,
  isValidating = false,
  hasError = false,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""))
  const [timer, setTimer] = useState(60)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer countdown
  useEffect(() => {
    if (timer <= 0) {
      return
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  const handleChange = (index: number, value: string) => {
    if (isValidating) return

    const newValue = value.replace(/[^0-9]/g, "")
    if (newValue.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = newValue
    setOtp(newOtp)

    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""))
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isValidating) return

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    if (isValidating) return

    e.preventDefault()
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length)

    const newOtp = [...otp]
    pastedData.split("").forEach((char, index) => {
      if (index < length) {
        newOtp[index] = char
      }
    })
    setOtp(newOtp)

    const lastFilledIndex = Math.min(pastedData.length, length) - 1
    inputRefs.current[lastFilledIndex]?.focus()

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""))
    }
  }

  const handleResend = () => {
    if (onResend) {
      setTimer(60)
      setOtp(Array(length).fill(""))
      onResend()
    }
  }

  return (
    <div className="mx-auto flex flex-col gap-3">
      <div className="flex items-center justify-center gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={isValidating}
            className={`h-12 w-12 rounded-xl border bg-white text-center text-lg font-semibold transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
              hasError
                ? "border-[#EC003F] text-slate-950 shadow-[0_0_0_4px_#FFE0E0,0_2px_4px_0_rgba(17,12,34,0.12)]"
                : "border-slate-950 text-slate-950 focus:border-slate-950 focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            }`}
          />
        ))}
      </div>
      {timer > 0 ? (
        <Button type="button" variant="link" className="self-end text-xs" disabled>
          Resend code in {timer}s
        </Button>
      ) : (
        <Button type="button" variant="link" className="self-end text-xs" onClick={handleResend}>
          Resend code
        </Button>
      )}
    </div>
  )
}

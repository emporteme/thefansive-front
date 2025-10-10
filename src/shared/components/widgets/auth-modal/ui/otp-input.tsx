"use client"

import React, { useRef, useState } from "react"
import { Button } from "@/shared/components/ui"

interface OtpInputProps {
  length?: number
  onComplete: (otp: string) => void
  isValidating?: boolean
  hasError?: boolean
  timer?: number
}

export const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onComplete,
  isValidating = false,
  hasError = false,
  timer = 0,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

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

  const isShowTimer = timer > 0

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
      {isShowTimer && (
        <Button type="button" variant="link" className="self-end text-xs" disabled>
          Resend code in {timer}s
        </Button>
      )}
    </div>
  )
}

"use client"

import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

interface OtpInputProps {
  length?: number
  onComplete: (otp: string) => void
  isValidating?: boolean
  hasError?: boolean
  setHasError?: React.Dispatch<React.SetStateAction<boolean>>
  timer?: number
  onResend?: () => void
}

export const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onComplete,
  isValidating = false,
  hasError = false,
  setHasError,
  timer = 0,
  onResend,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (hasError) {
      inputRefs.current[length - 1]?.focus()
    }
  }, [hasError, length])

  const handleChange = (index: number, value: string) => {
    if (isValidating) return

    if (hasError) {
      setHasError?.(false)
    }

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

    if (hasError) {
      setHasError?.(false)
    }

    if (/^[0-9]$/.test(e.key)) {
      if (otp[index]) {
        e.preventDefault()
        const nextEmptyIndex = otp.findIndex((digit, idx) => idx > index && digit === "")
        if (nextEmptyIndex !== -1) {
          const newOtp = [...otp]
          newOtp[nextEmptyIndex] = e.key
          setOtp(newOtp)
          inputRefs.current[nextEmptyIndex]?.focus()

          if (newOtp.every((digit) => digit !== "")) {
            onComplete(newOtp.join(""))
          }
        }
        return
      }
    }

    if (e.key === "Backspace") {
      e.preventDefault()

      if (otp[index]) {
        const newOtp = [...otp]
        newOtp[index] = ""
        setOtp(newOtp)
        inputRefs.current[index - 1]?.focus()
      } else if (index > 0) {
        const newOtp = [...otp]
        newOtp[index - 1] = ""
        setOtp(newOtp)
        inputRefs.current[index - 1]?.focus()
      }
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

  const handleClick = (index: number) => {
    inputRefs.current[index]?.focus()

    if (hasError) {
      setHasError?.(false)
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
            onClick={() => handleClick(index)}
            onPaste={handlePaste}
            disabled={isValidating}
            placeholder="-"
            className={cn(
              "rounded-2lg h-12 w-12 border bg-white text-center text-lg font-semibold caret-transparent transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              {
                "border-rose-600 text-slate-900 shadow-[0_0_0_4px_#FFE0E0,0_2px_4px_0_rgba(17,12,34,0.12)] focus:border-rose-800":
                  hasError,
                "border-slate-900 text-slate-900 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2":
                  !hasError && digit,
                "border-slate-300 text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2":
                  !hasError && !digit,
              }
            )}
          />
        ))}
      </div>
      {hasError && isShowTimer && (
        <Button type="button" variant="link" className="self-end text-xs" disabled>
          Invalid code. Please try again.
        </Button>
      )}
      {isShowTimer && !hasError && (
        <Button type="button" variant="link" className="self-end text-xs" disabled>
          Resend code in {timer}s
        </Button>
      )}
      {!isShowTimer && onResend && (
        <Button type="button" variant="link" className="self-end text-xs" onClick={onResend}>
          Resend code
        </Button>
      )}
    </div>
  )
}

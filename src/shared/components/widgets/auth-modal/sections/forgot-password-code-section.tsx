"use client"

import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useSendEmailOtp, useValidateOtp } from "@/shared/api"
import { Button } from "@/shared/components/ui"
import type { AuthModalMode } from "../types"
import { OtpInput, WelcomeText } from "../ui"

interface ForgotPasswordCodeSectionProps {
  onModeChange: (mode: AuthModalMode) => void
  email: string
  setEmail: (email: string) => void
}

const ForgotPasswordCodeSection: React.FC<ForgotPasswordCodeSectionProps> = ({ onModeChange, email, setEmail }) => {
  const [hasOtpError, setHasOtpError] = useState(false)
  const [timer, setTimer] = useState(60)
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))

  const validateOtpMutation = useValidateOtp()
  const sendOtpMutation = useSendEmailOtp()

  useEffect(() => {
    if (timer <= 0) return

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await validateOtpMutation.mutateAsync({ email, otp: otp.join("") })
      setEmail("")
      onModeChange("reset-password")
    } catch {
      setHasOtpError(true)
    }
  }

  const handleResend = () => {
    sendOtpMutation.mutateAsync({ email })
    setHasOtpError(false)
    setOtp(Array(6).fill(""))
    setTimer(60)
  }

  const handleBackToLogin = () => {
    onModeChange("login")
  }

  const isDisabled = validateOtpMutation.isPending || otp.join("").length !== 6

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6 px-4">
        <div className="mx-auto flex flex-col gap-6">
          <h2 className="text-lg leading-[1.2] font-semibold text-slate-900">Enter code</h2>

          <OtpInput
            onComplete={(otp) => setOtp(otp.split(""))}
            isValidating={validateOtpMutation.isPending}
            hasError={hasOtpError}
            setHasError={setHasOtpError}
            timer={timer}
            onResend={handleResend}
          />
        </div>

        <div className="mt-2 flex flex-col items-center gap-3">
          <Button size="xl" className="w-[220px]" type="submit" disabled={isDisabled}>
            {validateOtpMutation.isPending ? "Confirming..." : "Confirm"}
          </Button>
          <Button variant="link" className="w-[220px]" size="xl" onClick={handleBackToLogin}>
            Back to Login
          </Button>
        </div>
      </form>
    </>
  )
}

export default ForgotPasswordCodeSection

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { getErrorMessage, useSendEmailOtp, useSignUp, useValidateOtp } from "@/shared/api"
import { Button } from "@/shared/components/ui"
import { Email, Password } from "@/shared/icons"
import { type SignupFormData, signupSchema } from "../schemas/signup-schema"
import type { AuthModalMode } from "../types"
import { OtpInput, QuestionLink, WelcomeText } from "../ui"
import { Input } from "../ui/input"

interface SignUpSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const SignUpSection: React.FC<SignUpSectionProps> = ({ onModeChange }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  })

  const [showOtpInput, setShowOtpInput] = useState(false)
  const [isOtpValidated, setIsOtpValidated] = useState(false)
  const [validatedOtp, setValidatedOtp] = useState("")
  const [hasOtpError, setHasOtpError] = useState(false)

  const signUpMutation = useSignUp()
  const sendOtpMutation = useSendEmailOtp()
  const validateOtpMutation = useValidateOtp()

  const firstName = watch("firstName")
  const lastName = watch("lastName")
  const email = watch("email")
  const password = watch("password")

  const onSubmit = async (data: SignupFormData) => {
    if (!isOtpValidated || !validatedOtp) {
      toast.error("Please verify your email first")
      return
    }

    try {
      const signupData = {
        email: data.email,
        password: data.password,
        lastName: data.lastName,
        firstName: data.firstName,
        otp: validatedOtp,
      }
      await signUpMutation.mutateAsync(signupData)
      toast.success("Successfully signed up!")
      // Optionally close modal or redirect
    } catch (error: unknown) {
      console.error("Signup error:", error)
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    }
  }

  const handleLoginClick = () => {
    onModeChange("login")
  }

  const handleSendCode = async () => {
    if (!email) {
      toast.error("Please enter your email first")
      return
    }

    try {
      await sendOtpMutation.mutateAsync({ email })
      toast.success("Code sent to your email!")
      setShowOtpInput(true)
    } catch (error: unknown) {
      console.error("Send OTP error:", error)
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    }
  }

  const handleOtpComplete = async (otp: string) => {
    if (!email) return

    // Reset error state when user starts typing new OTP
    setHasOtpError(false)

    try {
      await validateOtpMutation.mutateAsync({ email, otp })
      toast.success("Code verified successfully!")
      setIsOtpValidated(true)
      setValidatedOtp(otp)
      setHasOtpError(false)
      setShowOtpInput(false) // Hide OTP input after successful validation
    } catch (error: unknown) {
      console.error("Validate OTP error:", error)
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
      setHasOtpError(true)
      setIsOtpValidated(false)
      setValidatedOtp("")
    }
  }

  const handleTimerEnd = () => {
    setShowOtpInput(false)
  }

  const handleResend = async () => {
    await handleSendCode()
  }

  const isDisabled =
    isSubmitting || signUpMutation.isPending || !firstName || !lastName || !email || !password || !isOtpValidated

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[67px] flex flex-col gap-4 px-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              label="First Name"
              placeholder="First Name"
              type="text"
              register={register("firstName")}
              error={errors.firstName?.message}
            />
          </div>
          <div className="flex-1">
            <Input
              label="Last Name"
              placeholder="Last Name"
              type="text"
              register={register("lastName")}
              error={errors.lastName?.message}
            />
          </div>
        </div>

        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Input
              label="Email"
              LeftIcon={Email}
              placeholder="Email"
              type="email"
              register={register("email")}
              error={errors.email?.message}
              onEnter={handleSendCode}
            />
          </div>
          <Button
            size="lg"
            type="button"
            onClick={handleSendCode}
            disabled={sendOtpMutation.isPending || isOtpValidated || showOtpInput}
            className="self-end"
          >
            {sendOtpMutation.isPending ? "Sending..." : isOtpValidated ? "Verified" : "Send Code"}
          </Button>
        </div>

        {showOtpInput && (
          <OtpInput
            onComplete={handleOtpComplete}
            onResend={handleResend}
            onTimerEnd={handleTimerEnd}
            isValidating={validateOtpMutation.isPending}
            hasError={hasOtpError}
          />
        )}

        <Input
          label="Password"
          LeftIcon={Password}
          placeholder="Password"
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />

        <div className="mt-12 space-y-4">
          <Button size="xl" className="w-full" type="submit" disabled={isDisabled}>
            {isSubmitting || signUpMutation.isPending ? "Signing up..." : "Sign Up"}
          </Button>
          <QuestionLink onClick={handleLoginClick} question="Have an account?" action="Login" />
        </div>
      </form>
    </>
  )
}

export default SignUpSection

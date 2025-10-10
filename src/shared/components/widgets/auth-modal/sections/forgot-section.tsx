"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/shared/components/ui"
import { Email } from "@/shared/icons"
import { type ForgotFormData, forgotSchema } from "../schemas/forgot-schema"
import type { AuthModalMode } from "../types"
import { QuestionLink, WelcomeText } from "../ui"
import { Input } from "../ui/input"

interface ForgotSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const ForgotSection: React.FC<ForgotSectionProps> = ({ onModeChange }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
    mode: "onBlur",
  })

  const email = watch("email")

  const onSubmit = async (data: ForgotFormData) => {
    console.log("Forgot password data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    onModeChange("restore")
  }

  const handleBackToLogin = () => {
    onModeChange("login")
  }

  const isDisabled = isSubmitting || !email

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[67px] flex flex-col gap-6">
        <p className="-mb-2 text-center text-sm text-slate-600">
          Fill your email and you will receive a code on that email
        </p>

        <Input
          label="Email"
          LeftIcon={Email}
          placeholder="Enter your email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
        />

        <div className="space-y-4">
          <Button size="xl" className="w-full" type="submit" disabled={isDisabled}>
            {isSubmitting ? "Sending..." : "Send Reset Code"}
          </Button>
          <QuestionLink onClick={handleBackToLogin} question="Remember your password?" action="Back to Login" />
        </div>
      </form>
    </>
  )
}

export default ForgotSection

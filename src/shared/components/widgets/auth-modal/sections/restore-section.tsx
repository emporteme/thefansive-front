"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/shared/components/ui"
import { Password } from "@/shared/icons"
import { type RestoreFormData, restoreSchema } from "../schemas/restore-schema"
import type { AuthModalMode } from "../types"
import { QuestionLink, WelcomeText } from "../ui"
import { Input } from "../ui/input"

interface RestoreSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const RestoreSection: React.FC<RestoreSectionProps> = ({ onModeChange }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RestoreFormData>({
    resolver: zodResolver(restoreSchema),
    mode: "onBlur",
  })

  const password = watch("password")
  const confirmPassword = watch("confirmPassword")

  const onSubmit = async (data: RestoreFormData) => {
    console.log("Reset password data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    onModeChange("login")
  }

  const handleBackToLogin = () => {
    onModeChange("login")
  }

  const isDisabled = isSubmitting || !password || !confirmPassword

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[67px] flex flex-col gap-6">
        <p className="text-center text-sm text-slate-600">Enter your new password below</p>

        <Input
          label="New Password"
          LeftIcon={Password}
          placeholder="New Password"
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />

        <Input
          label="Confirm New Password"
          LeftIcon={Password}
          placeholder="Confirm New Password"
          type="password"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <div className="space-y-4">
          <Button size="xl" className="w-full" type="submit" disabled={isDisabled}>
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </Button>
          <QuestionLink onClick={handleBackToLogin} question="Remember your password?" action="Back to Login" />
        </div>
      </form>
    </>
  )
}

export default RestoreSection

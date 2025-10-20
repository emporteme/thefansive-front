"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { getErrorMessage, useRestorePassword } from "@/shared/api"
import { Button } from "@/shared/components/ui"
import { Password } from "@/shared/icons"
import { type RestoreFormData, restoreSchema } from "../schemas/restore-schema"
import type { AuthModalMode } from "../types"
import { WelcomeText } from "../ui"
import { Input } from "../ui/input"

interface ResetPasswordSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const ResetPasswordSection: React.FC<ResetPasswordSectionProps> = ({ onModeChange }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RestoreFormData>({
    resolver: zodResolver(restoreSchema),
    mode: "onBlur",
  })

  const restorePasswordMutation = useRestorePassword()

  const password = watch("password")
  const confirmPassword = watch("confirmPassword")

  const onSubmit = async (_data: RestoreFormData) => {
    try {
      // await restorePasswordMutation.mutateAsync(data)
      onModeChange("reset-password-success")
    } catch (error: unknown) {
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    }
  }

  const handleBack = () => {
    onModeChange("forgot-password")
  }

  const isDisabled = isSubmitting || restorePasswordMutation.isPending || !password || !confirmPassword

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-6 px-4">
        <h2 className="text-lg leading-[1.2] font-semibold text-slate-900">Reset Password</h2>

        <div className="space-y-3">
          <Input
            label="Create a new password for your account."
            LeftIcon={Password}
            placeholder="New Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
          />

          <Input
            label="Confirm Password"
            LeftIcon={Password}
            placeholder="Confirm Password"
            type="password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>

        <div className="mt-2 flex flex-col items-center gap-3">
          <Button size="xl" className="w-[220px]" type="submit" disabled={isDisabled}>
            {isSubmitting || restorePasswordMutation.isPending ? "Saving..." : "Save and Continue"}
          </Button>
          <Button variant="link" className="w-[220px]" size="xl" onClick={handleBack}>
            Back
          </Button>
        </div>
      </form>
    </>
  )
}

export default ResetPasswordSection

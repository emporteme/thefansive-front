"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { getErrorMessage, useForgotPassword } from "@/shared/api"
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

  const forgotPasswordMutation = useForgotPassword()

  const email = watch("email")

  const onSubmit = async (data: ForgotFormData) => {
    try {
      await forgotPasswordMutation.mutateAsync(data)
      toast.success("Reset code sent to your email!")
      onModeChange("restore")
    } catch (error: unknown) {
      console.error("Forgot password error:", error)
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    }
  }

  const handleBackToLogin = () => {
    onModeChange("login")
  }

  const isDisabled = isSubmitting || forgotPasswordMutation.isPending || !email

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-6 px-4">
        <h2 className="text-lg leading-[1.2] font-semibold text-slate-900">Forgot Password?</h2>

        <Input
          label="Email"
          LeftIcon={Email}
          placeholder="example@mail.com"
          type="email"
          register={register("email")}
          error={errors.email?.message}
          hint="Enter your email address and we’ll send you a link to reset your password."
        />

        <div className="flex flex-col items-center gap-3">
          <Button size="xl" className="w-[220px]" type="submit" disabled={isDisabled}>
            {isSubmitting || forgotPasswordMutation.isPending ? "Sending..." : "Send code"}
          </Button>
          <Button variant="link" className="w-[220px]" size="xl" onClick={handleBackToLogin}>
            Back to Login
          </Button>
        </div>
      </form>
    </>
  )
}

export default ForgotSection

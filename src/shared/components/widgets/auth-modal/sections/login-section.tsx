"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { getErrorMessage, useLogin } from "@/shared/api"
import { Button } from "@/shared/components/ui"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { Email, Password } from "@/shared/icons"
import { getRoutes } from "@/shared/utils/get-routes"
import { type LoginFormData, loginSchema } from "../schemas/login-schema"
import type { AuthModalMode } from "../types"
import { GoogleSignInButton, OrDivider, QuestionLink, RememberForgotSection, WelcomeText } from "../ui"
import { Input } from "../ui/input"

interface LoginSectionProps {
  onModeChange: (mode: AuthModalMode) => void
  closeModal?: () => void
}

const LoginSection: React.FC<LoginSectionProps> = ({ onModeChange, closeModal }) => {
  const navigate = useNavigate()
  const routes = getRoutes()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  })

  const loginMutation = useLogin()

  const email = watch("email")
  const password = watch("password")

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginMutation.mutateAsync(data)
      navigate(routes.user.profile())
      toast.success("Successfully logged in!")
      closeModal?.()
    } catch (error: unknown) {
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    }
  }

  const handleSignUpClick = () => {
    onModeChange("signup")
  }

  const handleForgotPasswordClick = () => {
    onModeChange("forgot")
  }

  const isDisabled = isSubmitting || loginMutation.isPending || !email || !password

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-9 px-4">
        <GoogleSignInButton />
        <OrDivider text="or continue with Email" />
        <div className="space-y-3">
          <div className="space-y-3">
            <Input
              label="Email"
              LeftIcon={Email}
              placeholder="example@mail.com"
              type="email"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              LeftIcon={Password}
              placeholder="Enter your password"
              type="password"
              register={register("password")}
              error={errors.password?.message}
            />
          </div>
          <RememberForgotSection onForgotPasswordClick={handleForgotPasswordClick} />
        </div>
        <div className="mt-4 space-y-4">
          <Button tabIndex={0} size="xl" className="w-full" type="submit" disabled={isDisabled}>
            {isSubmitting || loginMutation.isPending ? "Logging in..." : "Login"}
          </Button>
          <QuestionLink onClick={handleSignUpClick} question="Don't have an account?" action="Sign Up" />
        </div>
      </form>
    </>
  )
}

export default LoginSection

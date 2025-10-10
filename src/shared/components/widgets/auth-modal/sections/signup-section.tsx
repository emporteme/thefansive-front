"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/shared/components/ui"
import { Email, EmailCode, Password, User } from "@/shared/icons"
import { type SignupFormData, signupSchema } from "../schemas/signup-schema"
import type { AuthModalMode } from "../types"
import { QuestionLink, WelcomeText } from "../ui"
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

  const fullName = watch("fullName")
  const email = watch("email")
  const emailCode = watch("emailCode")
  const password = watch("password")

  const onSubmit = async (data: SignupFormData) => {
    console.log("Signup data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const handleLoginClick = () => {
    onModeChange("login")
  }

  const handleSendCode = () => {
    console.log("Send code clicked")
  }

  const isDisabled = isSubmitting || !fullName || !email || !emailCode || !password

  return (
    <>
      <WelcomeText />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[67px] flex flex-col gap-4">
        <Input
          label="Full Name"
          LeftIcon={User}
          placeholder="Full Name"
          type="text"
          register={register("fullName")}
          error={errors.fullName?.message}
        />

        <Input
          label="Email"
          LeftIcon={Email}
          placeholder="Email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
        />

        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              label="Email Code"
              LeftIcon={EmailCode}
              placeholder="Email Code"
              type="text"
              register={register("emailCode")}
              error={errors.emailCode?.message}
            />
          </div>
          <button
            type="button"
            onClick={handleSendCode}
            className="mt-[30px] cursor-pointer self-start rounded-xl bg-green-500 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-600"
          >
            Send Code
          </button>
        </div>

        <Input
          label="Password"
          LeftIcon={Password}
          placeholder="Password"
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />

        <div className="my-4 space-y-4">
          <Button size="xl" className="w-full" type="submit" disabled={isDisabled}>
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </Button>
          <QuestionLink onClick={handleLoginClick} question="Have an account?" action="Login" />
        </div>
      </form>
    </>
  )
}

export default SignUpSection

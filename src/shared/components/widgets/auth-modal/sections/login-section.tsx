"use client"

import React from "react"
import { Button } from "@/shared/components/ui"
import { Email, Password } from "@/shared/icons"
import type { AuthModalMode } from "../types"
import { GoogleSignInButton, OrDivider, QuestionLink, RememberForgotSection, WelcomeText } from "../ui"
import { Input } from "../ui/input"

interface LoginSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const LoginSection: React.FC<LoginSectionProps> = ({ onModeChange }) => {
  const handleLogin = () => {
    // TODO: Implement login logic
  }

  const handleSignUpClick = () => {
    onModeChange("signup")
  }

  const handleForgotPasswordClick = () => {
    onModeChange("forgot")
  }

  return (
    <>
      <WelcomeText />
      <div className="mt-12 flex flex-col gap-9">
        <GoogleSignInButton />
        <OrDivider text="or continue with Email" />
        <div className="space-y-3">
          <div className="space-y-3">
            <Input label="Email" LeftIcon={Email} placeholder="example@mail.com" type="email" />
            <Input label="Password" LeftIcon={Password} placeholder="Enter your password" type="password" />
          </div>
          <RememberForgotSection onForgotPasswordClick={handleForgotPasswordClick} />
        </div>
        <div className="mt-4 space-y-4">
          <Button size="xl" className="w-full" onClick={handleLogin} disabled>
            Login
          </Button>
          <QuestionLink onClick={handleSignUpClick} question="Don't have an account?" action="Sign Up" />
        </div>
      </div>
    </>
  )
}

export default LoginSection

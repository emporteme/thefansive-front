"use client"

import React from "react"
import { Email, Password } from "@/shared/icons"
import type { AuthModalMode } from "../types"
import { GoogleSignInButton, LoginButton, OrDivider, RememberForgotSection, SignUpLink, WelcomeText } from "../ui"
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
      <div className="mt-[67px] flex flex-col gap-6">
        <GoogleSignInButton />
        <OrDivider text="or continue with Email" />

        <div className="space-y-3">
          <Input LeftIcon={Email} placeholder="example@mail.com" type="email" />
          <Input LeftIcon={Password} placeholder="Enter your password" type="password" />
        </div>

        <RememberForgotSection onForgotPasswordClick={handleForgotPasswordClick} />
        <LoginButton onClick={handleLogin} />
        <SignUpLink onClick={handleSignUpClick} />
      </div>
    </>
  )
}

export default LoginSection

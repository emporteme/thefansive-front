"use client"

import React from "react"
import type { AuthModalMode } from "../types"
import {
  EmailInput,
  GoogleSignInButton,
  LoginButton,
  OrDivider,
  PasswordInput,
  RememberForgotSection,
  SignUpLink,
  WelcomeText,
} from "../ui"

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

  return (
    <>
      <WelcomeText />
      <div className="mt-[67px] flex flex-col gap-6">
        <GoogleSignInButton />
        <OrDivider text="or continue with Email" />

        <div className="space-y-3">
          <EmailInput />
          <PasswordInput />
        </div>

        <RememberForgotSection />
        <LoginButton onClick={handleLogin} />
        <SignUpLink onClick={handleSignUpClick} />
      </div>
    </>
  )
}

export default LoginSection

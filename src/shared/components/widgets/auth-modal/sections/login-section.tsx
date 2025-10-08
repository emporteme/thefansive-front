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
      <h1 className="mt-[94px] text-[32px] leading-[48px] font-normal text-black">
        Welcome to <br /> <span className="text-[40px] leading-[48px] font-bold">Thefansive platform</span>
      </h1>
      <p className="mt-2 text-base text-black">Go Beyond Being a Spectator</p>

      <div className="mt-[67px] flex flex-col gap-6">
        <GoogleSignInButton />
        <OrDivider />

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

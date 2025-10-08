"use client"

import React from "react"
import Logo from "@/shared/components/elements/logo"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { getRoutes } from "@/shared/utils/get-routes"
import {
  CloseButton,
  EmailInput,
  GoogleSignInButton,
  LoginButton,
  OrDivider,
  PasswordInput,
  RememberForgotSection,
  SignUpLink,
} from "./components"

const AuthPage = () => {
  const routes = getRoutes()
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(routes.user.profile())
  }

  const handleClose = () => {
    navigate(routes.home())
  }

  return (
    <div className="relative flex w-[680px] flex-col rounded-3xl bg-white px-6 pt-[31px] pb-8 shadow-2xl shadow-slate-400/50">
      {/* Close button */}
      <div className="absolute top-[14px] right-[14px]">
        <CloseButton onClick={handleClose} />
      </div>

      {/* Logo */}
      <Logo className="w-[143px]" />

      {/* Header */}
      <h1 className="mt-[94px] text-[32px] leading-[48px] font-normal text-black">
        Welcome to <br /> <span className="text-[40px] leading-[48px] font-bold">Thefansive platform</span>
      </h1>
      <p className="mt-2 text-base text-black">Go Beyond Being a Spectator</p>

      {/* Form */}
      <div className="mt-[67px] flex flex-col gap-6">
        <GoogleSignInButton />
        <OrDivider />

        <div className="space-y-3">
          <EmailInput />
          <PasswordInput />
        </div>

        <RememberForgotSection />
        <LoginButton onClick={handleLogin} />
        <SignUpLink />
      </div>
    </div>
  )
}

export default AuthPage

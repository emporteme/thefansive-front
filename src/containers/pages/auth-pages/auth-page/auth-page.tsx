"use client"

import React from "react"
import Logo from "@/shared/components/elements/logo"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { getRoutes } from "@/shared/utils/get-routes"
import { EmailInput } from "./components/email-input"
import { GoogleSignInButton } from "./components/google-sign-in-button"
import { LoginButton } from "./components/login-button"
import { OrDivider } from "./components/or-divider"
import { PasswordInput } from "./components/password-input"
import { RememberForgotSection } from "./components/remember-forgot-section"
import { SignUpLink } from "./components/sign-up-link"

const AuthPage = () => {
  const routes = getRoutes()
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(routes.user.profile())
  }

  return (
    <div className="flex min-w-120 flex-col rounded-xl bg-white px-6 py-8 shadow-2xl shadow-slate-400/50">
      <Logo className="mb-[5vh] w-32" />
      <h1 className="mt-3 text-3xl leading-[150%] text-black">
        Welcome to <br /> <span className="text-4xl font-bold">Thefansive platform</span>
      </h1>
      <p className="mt-2 text-slate-600">Go Beyond Being a Fan</p>

      <div className="mt-12 flex flex-col gap-6">
        <GoogleSignInButton />
        <OrDivider />

        <div className="space-y-4">
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

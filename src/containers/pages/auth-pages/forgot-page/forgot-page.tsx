"use client"

import Link from "next/link"
import React, { useState } from "react"
import { toast } from "react-toastify"
import Logo from "@/shared/components/elements/logo"
import { useForgotPassword } from "@/shared/hooks/client/use-forgot-password"
import { Email } from "@/shared/icons"
import { getRoutes } from "@/shared/utils/get-routes"

const ForgotPage = () => {
  const routes = getRoutes()
  const [email, setEmail] = useState("")
  const { forgotPassword, isLoading, error, success } = useForgotPassword()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address")
      return
    }

    await forgotPassword(email)
  }

  React.useEffect(() => {
    if (success) {
      toast.success("If an account with that email exists, a password reset link has been sent.")
    }
  }, [success])

  React.useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return (
    <div className="flex min-w-120 flex-col rounded-xl bg-white px-6 py-8 shadow-2xl shadow-slate-400/50">
      <Logo className="mb-[5vh] w-32" />
      <h1 className="mt-3 text-3xl leading-[150%] text-black">
        Forgot <br /> <span className="text-4xl font-bold">Password?</span>
      </h1>
      <p className="mt-2 text-slate-600">Don't worry, we'll help you reset it</p>

      <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
        {success ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-center text-sm text-green-800">
              ✓ If an account with that email exists, a password reset link has been sent. Please check your inbox.
            </p>
          </div>
        ) : (
          <>
            <p className="-mb-2 text-center text-sm text-slate-600">
              Fill your email and you will receive a link on that email
            </p>

            <div className="relative text-slate-400">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Email />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-black transition-all duration-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </>
        )}

        <div className="text-center text-sm">
          <span className="text-slate-500">Remember your password? </span>
          <Link href={routes.auth.login()} className="font-semibold text-slate-800 hover:text-slate-600">
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPage

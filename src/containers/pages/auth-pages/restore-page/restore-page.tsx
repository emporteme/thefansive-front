"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Logo from "@/shared/components/elements/logo"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useResetPassword } from "@/shared/hooks/client/use-reset-password"
import { Password } from "@/shared/icons"
import { getRoutes } from "@/shared/utils/get-routes"

const RestorePage = () => {
  const routes = getRoutes()
  const navigate = useNavigate()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "medium" | "strong" | null>(null)

  const { resetPassword, isLoading, error, success } = useResetPassword()

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing reset token")
    }
  }, [token])

  useEffect(() => {
    if (newPassword.length > 0) {
      if (newPassword.length < 8) {
        setPasswordStrength("weak")
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
        setPasswordStrength("medium")
      } else {
        setPasswordStrength("strong")
      }
    } else {
      setPasswordStrength(null)
    }
  }, [newPassword])

  useEffect(() => {
    if (success) {
      toast.success("Password reset successfully! Redirecting to login...")
      setTimeout(() => {
        navigate(routes.auth.login())
      }, 2000)
    }
  }, [success, navigate, routes])

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!token) {
      toast.error("Invalid or missing reset token")
      return
    }

    if (!newPassword) {
      toast.error("Please enter a new password")
      return
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long")
      return
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
      toast.error("Password must contain at least one uppercase letter, lowercase letter, and number")
      return
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    await resetPassword(token, newPassword)
  }

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "weak":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "strong":
        return "bg-green-500"
      default:
        return "bg-gray-300"
    }
  }

  const getStrengthWidth = () => {
    switch (passwordStrength) {
      case "weak":
        return "w-1/3"
      case "medium":
        return "w-2/3"
      case "strong":
        return "w-full"
      default:
        return "w-0"
    }
  }

  return (
    <div className="flex min-w-120 flex-col rounded-xl bg-white px-6 py-8 shadow-2xl shadow-slate-400/50">
      <Logo className="mb-[5vh] w-32" />
      <h1 className="mt-3 text-3xl leading-[150%] text-black">
        Reset <br /> <span className="text-4xl font-bold">Password</span>
      </h1>
      <p className="mt-2 text-slate-600">Create a new secure password</p>

      <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
        <p className="text-center text-slate-600">Enter your new password below</p>

        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password />
          </div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isLoading || !token}
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {passwordStrength && (
          <div className="space-y-1">
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div className={`h-full transition-all duration-300 ${getStrengthColor()} ${getStrengthWidth()}`} />
            </div>
            <p className="text-center text-xs text-slate-600">
              Password strength: <span className="font-medium capitalize">{passwordStrength}</span>
            </p>
          </div>
        )}

        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password />
          </div>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading || !token}
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !token}
          className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-black transition-all duration-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>

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

export default RestorePage

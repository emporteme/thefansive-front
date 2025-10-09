"use client"

import React from "react"
import { Email } from "@/shared/icons"
import type { AuthModalMode } from "../types"
import { WelcomeText } from "../ui"

interface ForgotSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const ForgotSection: React.FC<ForgotSectionProps> = ({ onModeChange }) => {
  const handleSendCode = () => {
    onModeChange("restore")
  }

  const handleBackToLogin = () => {
    onModeChange("login")
  }

  return (
    <>
      <WelcomeText />

      <div className="mt-[67px] flex flex-col gap-6">
        {/* Description Text */}
        <p className="-mb-2 text-center text-sm text-slate-600">
          Fill your email and you will receive a code on that email
        </p>

        {/* Email Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Email className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSendCode}
          className="w-full cursor-pointer rounded-xl bg-slate-100 px-4 py-[15px] text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-200"
        >
          Send Reset Code
        </button>

        {/* Back to Login Link */}
        <div className="text-center text-base">
          <span className="text-slate-700">Remember your password? </span>
          <button onClick={handleBackToLogin} className="font-semibold text-slate-700 hover:text-slate-900">
            Back to Login
          </button>
        </div>
      </div>
    </>
  )
}

export default ForgotSection

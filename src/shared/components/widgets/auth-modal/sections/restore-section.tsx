"use client"

import React from "react"
import { Password } from "@/shared/icons"
import type { AuthModalMode } from "../types"

interface RestoreSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const RestoreSection: React.FC<RestoreSectionProps> = ({ onModeChange }) => {
  const handleResetPassword = () => {
    // TODO: Implement reset password logic
    // After successful reset, redirect to login
    // onModeChange("login")
  }

  const handleBackToLogin = () => {
    onModeChange("login")
  }

  return (
    <>
      <h1 className="mt-[94px] text-[32px] leading-[48px] font-normal text-black">
        Reset <br /> <span className="text-[40px] leading-[48px] font-bold">Password</span>
      </h1>
      <p className="mt-2 text-base text-black">Create a new secure password</p>

      <div className="mt-[67px] flex flex-col gap-6">
        {/* Description Text */}
        <p className="text-center text-slate-600">Enter your new password below</p>

        {/* New Password Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="password"
            placeholder="New Password"
            className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="password"
            placeholder="Confirm New Password"
            className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleResetPassword}
          className="w-full cursor-pointer rounded-xl bg-slate-100 px-4 py-[15px] text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-200"
        >
          Reset Password
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

export default RestoreSection

"use client"

import React from "react"
import { Email, EmailCode, Password, User } from "@/shared/icons"
import type { AuthModalMode } from "../types"

interface SignUpSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const SignUpSection: React.FC<SignUpSectionProps> = ({ onModeChange }) => {
  const handleSignUp = () => {
    // TODO: Implement sign up logic
  }

  const handleLoginClick = () => {
    onModeChange("login")
  }

  return (
    <>
      <h1 className="mt-[94px] text-[32px] leading-[48px] font-normal text-black">
        Welcome to <br /> <span className="text-[40px] leading-[48px] font-bold">Thefansive platform</span>
      </h1>
      <p className="mt-2 text-base text-black">Go Beyond Being a Fan</p>

      <div className="mt-[67px] flex flex-col gap-4">
        {/* Full Name Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <User className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Email className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          />
        </div>

        {/* Email Code Input with Send Code Button */}
        <div className="flex gap-2">
          <div className="relative flex-1 text-slate-400">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <EmailCode className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Email Code"
              className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
            />
          </div>
          <button className="cursor-pointer rounded-xl bg-green-500 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-600">
            Send Code
          </button>
        </div>

        {/* Password Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          />
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          className="my-4 w-full cursor-pointer rounded-xl bg-slate-100 px-4 py-[15px] text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-200"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <div className="text-center text-base">
          <span className="text-slate-700">Have an account? </span>
          <button onClick={handleLoginClick} className="font-semibold text-slate-700 hover:text-slate-900">
            Login
          </button>
        </div>
      </div>
    </>
  )
}

export default SignUpSection

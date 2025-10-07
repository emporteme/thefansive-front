"use client"

import React, { useState } from "react"
import { Password } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface ChangePasswordProps {
  className?: string
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ className }) => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className={cn("flex flex-col gap-6 rounded-3xl bg-slate-100 p-7.5", className)}>
      <h2 className="text-dark-bg text-2xl font-semibold">Change password</h2>

      <div className="flex flex-col gap-6">
        {/* Current Password */}
        <div className="flex w-full max-w-[360px] flex-col gap-2">
          <label className="text-dark-bg px-1 text-base font-normal">Old password</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
              <Password className="h-5 w-5" />
            </div>
            <input
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              className="text-dark-bg block w-full rounded-xl border border-slate-200 bg-white py-3 pr-12 pl-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
            >
              {showCurrentPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="flex w-full max-w-[360px] flex-col gap-2">
          <label className="text-dark-bg px-1 text-base font-normal">New Password</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
              <Password className="h-5 w-5" />
            </div>
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="text-dark-bg block w-full rounded-xl border border-slate-200 bg-white py-3 pr-12 pl-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
            >
              {showNewPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="flex w-full max-w-[360px] flex-col gap-2">
          <label className="text-dark-bg px-1 text-base font-normal">Confirm New Password</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
              <Password className="h-5 w-5" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your new password"
              className="text-dark-bg block w-full rounded-xl border border-slate-200 bg-white py-3 pr-12 pl-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
            >
              {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Eye icon components (visible state)
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 5C5.83333 5 2.5 8.33333 1.66667 10C2.5 11.6667 5.83333 15 10 15C14.1667 15 17.5 11.6667 18.3333 10C17.5 8.33333 14.1667 5 10 5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

// Eye off icon components (hidden state)
const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 5C5.83333 5 2.5 8.33333 1.66667 10C2.5 11.6667 5.83333 15 10 15C14.1667 15 17.5 11.6667 18.3333 10C17.5 8.33333 14.1667 5 10 5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="10" r="2.5" fill="currentColor" />
    <line x1="2.5" y1="2.5" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export { ChangePassword }

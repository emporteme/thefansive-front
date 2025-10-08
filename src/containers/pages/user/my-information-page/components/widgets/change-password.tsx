"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React, { forwardRef, useImperativeHandle, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Password } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface ChangePasswordProps {
  className?: string
}

export interface ChangePasswordRef {
  submit: () => Promise<void>
}

// Zod validation schema
const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword !== data.currentPassword, {
    message: "New password must be different from current password",
    path: ["newPassword"],
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>

const ChangePassword = forwardRef<ChangePasswordRef, ChangePasswordProps>(({ className }, ref) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onBlur",
  })

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      // TODO: Implement API call to change password
      console.log("Password change data:", data)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      reset()
      // TODO: Show success message
    } catch (error) {
      // TODO: Show error message
      console.error("Password change failed:", error)
    }
  }

  // Expose submit method to parent component
  useImperativeHandle(ref, () => ({
    submit: async () => {
      await handleSubmit(onSubmit)()
    },
  }))

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
              {...register("currentPassword")}
              placeholder="Enter your current password"
              className={cn(
                "text-dark-bg block w-full rounded-xl border bg-white py-3 pr-12 pl-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-none",
                errors.currentPassword ? "border-red-500 focus:ring-red-400" : "border-slate-200 focus:ring-slate-400"
              )}
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
            >
              {showCurrentPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          {errors.currentPassword && <p className="px-1 text-sm text-red-500">{errors.currentPassword.message}</p>}
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
              {...register("newPassword")}
              placeholder="Enter your new password"
              className={cn(
                "text-dark-bg block w-full rounded-xl border bg-white py-3 pr-12 pl-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-none",
                errors.newPassword ? "border-red-500 focus:ring-red-400" : "border-slate-200 focus:ring-slate-400"
              )}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
            >
              {showNewPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          {errors.newPassword && <p className="px-1 text-sm text-red-500">{errors.newPassword.message}</p>}
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
              {...register("confirmPassword")}
              placeholder="Re-enter your new password"
              className={cn(
                "text-dark-bg block w-full rounded-xl border bg-white py-3 pr-12 pl-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-none",
                errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-slate-200 focus:ring-slate-400"
              )}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-700"
            >
              {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          {errors.confirmPassword && <p className="px-1 text-sm text-red-500">{errors.confirmPassword.message}</p>}
        </div>
      </div>
    </div>
  )
})

ChangePassword.displayName = "ChangePassword"

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

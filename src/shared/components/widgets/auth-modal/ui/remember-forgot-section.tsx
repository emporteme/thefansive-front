import React from "react"

interface RememberForgotSectionProps {
  onForgotPasswordClick?: () => void
}

export const RememberForgotSection = ({ onForgotPasswordClick }: RememberForgotSectionProps) => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="h-[18px] w-[18px] cursor-pointer rounded-md border-2 border-slate-400 text-slate-600 focus:ring-slate-500"
        />
        <span className="ml-2.5 text-base text-slate-800">Remember me</span>
      </label>
      <button onClick={onForgotPasswordClick} className="text-base font-medium text-slate-700 hover:text-slate-900">
        Forgot Password?
      </button>
    </div>
  )
}

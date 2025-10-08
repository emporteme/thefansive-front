import React from "react"

export const OrDivider = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-2 text-sm text-slate-500">or continue with Email</span>
      </div>
    </div>
  )
}

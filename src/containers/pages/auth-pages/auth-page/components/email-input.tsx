import React from "react"
import { Email } from "@/shared/icons"

export const EmailInput = () => {
  return (
    <div className="relative text-slate-400">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Email />
      </div>
      <input
        type="email"
        placeholder="example@mail.com"
        className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
      />
    </div>
  )
}

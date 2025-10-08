import React from "react"
import { Email } from "@/shared/icons"

export const EmailInput = () => {
  return (
    <div className="relative text-slate-400">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Email className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="email"
        placeholder="example@mail.com"
        className="block w-full rounded-xl border border-slate-300 bg-white py-3 pr-3 pl-12 text-slate-400 transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
      />
    </div>
  )
}

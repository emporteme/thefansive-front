import React from "react"

interface OrDividerProps {
  text: string
}

export const OrDivider = ({ text }: OrDividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-3 text-sm text-slate-500">{text}</span>
      </div>
    </div>
  )
}

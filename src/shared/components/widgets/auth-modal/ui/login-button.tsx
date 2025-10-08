import React from "react"

interface LoginButtonProps {
  onClick: () => void
  children?: React.ReactNode
}

export const LoginButton = ({ onClick, children = "Log in" }: LoginButtonProps) => {
  return (
    <button
      className="w-full cursor-pointer rounded-xl bg-slate-100 px-4 py-[15px] text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-200"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

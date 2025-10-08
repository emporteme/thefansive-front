import React from "react"

interface LoginButtonProps {
  onClick: () => void
}

export const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <button
      className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-black transition-all duration-200 hover:bg-slate-50"
      onClick={onClick}
    >
      Log in
    </button>
  )
}

import React from "react"

interface SignUpLinkProps {
  onClick?: () => void
}

export const SignUpLink = ({ onClick }: SignUpLinkProps) => {
  return (
    <div className="text-center text-base">
      <span className="text-slate-700">Don't have an account? </span>
      <button onClick={onClick} className="font-semibold text-slate-700 hover:text-slate-900">
        Sign Up
      </button>
    </div>
  )
}

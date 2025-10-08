import React from "react"
import { Google } from "@/shared/icons"

export const GoogleSignInButton = () => {
  return (
    <button className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-3 rounded-xl bg-slate-100 px-4 py-4 text-slate-700 transition-all duration-200 hover:bg-slate-200">
      <Google className="h-6 w-6" />
      <span className="text-base font-medium">Sign in with Google</span>
    </button>
  )
}

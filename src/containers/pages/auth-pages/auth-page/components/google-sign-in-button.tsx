import React from "react"
import { Google } from "@/shared/icons"

export const GoogleSignInButton = () => {
  return (
    <button className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-3 rounded-lg border border-black bg-white px-4 py-3 text-black transition-all duration-200 hover:bg-slate-50">
      <Google />
      <span className="text-sm font-medium">Sign in with Google</span>
    </button>
  )
}

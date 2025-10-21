import React from "react"
import { CachedImage } from "@/shared/components/ui"

export const GoogleSignInButton = () => {
  return (
    <button
      type="button"
      className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-3 rounded-xl bg-slate-100 px-4 py-4 text-slate-700 transition-all duration-200 active:bg-slate-50"
    >
      <CachedImage src="/images/icons/google.svg" alt="Google" width={24} height={24} />
      <span className="text-lg font-semibold">Sign in with Google</span>
    </button>
  )
}

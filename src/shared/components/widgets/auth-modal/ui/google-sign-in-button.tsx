import Image from "next/image"
import React from "react"

export const GoogleSignInButton = () => {
  return (
    <button className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-3 rounded-xl bg-slate-100 px-4 py-4 text-slate-700 transition-all duration-200 hover:bg-slate-200">
      <Image src="/images/icons/google.svg" alt="Google" width={24} height={24} />
      <span className="text-lg font-semibold">Sign in with Google</span>
    </button>
  )
}

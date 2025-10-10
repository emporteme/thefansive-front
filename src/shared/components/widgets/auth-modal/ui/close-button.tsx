import React from "react"
import { Cancel } from "@/shared/icons"

interface CloseButtonProps {
  onClick?: () => void
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 transition-all duration-200 hover:bg-slate-200"
    >
      <Cancel className="h-6 w-6 text-slate-700" />
    </button>
  )
}

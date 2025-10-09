import React from "react"
import { Button, Checkbox } from "@/shared/components/ui"

interface RememberForgotSectionProps {
  onForgotPasswordClick?: () => void
}

export const RememberForgotSection = ({ onForgotPasswordClick }: RememberForgotSectionProps) => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex cursor-pointer items-center gap-2.5">
        <Checkbox />
        <span className="text-sm font-medium text-slate-800">Remember me</span>
      </label>
      <Button variant="link" size="md" onClick={onForgotPasswordClick}>
        Forgot Password?
      </Button>
    </div>
  )
}

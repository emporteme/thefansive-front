import React, { useState } from "react"
import { Button, Checkbox } from "@/shared/components/ui"

interface RememberForgotSectionProps {
  onForgotPasswordClick?: () => void
}

export const RememberForgotSection = ({ onForgotPasswordClick }: RememberForgotSectionProps) => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Checkbox
        className="flex cursor-pointer items-center gap-2.5"
        id="remember-me"
        onChange={() => setIsRememberMeChecked(!isRememberMeChecked)}
        isChecked={isRememberMeChecked}
      >
        <span className="text-sm font-medium text-slate-800">Remember me</span>
      </Checkbox>
      <Button type="button" variant="link" size="md" onClick={onForgotPasswordClick}>
        Forgot Password?
      </Button>
    </div>
  )
}

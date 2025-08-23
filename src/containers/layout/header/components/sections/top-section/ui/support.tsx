import React from "react"
import { Support as SupportIcon } from "@/shared/icons"

const Support: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Support</span>
      <SupportIcon />
    </div>
  )
}

export default Support

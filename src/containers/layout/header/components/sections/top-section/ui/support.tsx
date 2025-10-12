import React from "react"
import { Support as SupportIcon } from "@/shared/icons"

const Support: React.FC = () => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3.5 transition-all duration-200 hover:bg-gray-900">
      <span className="hidden text-sm font-semibold md:block">Support</span>
      <SupportIcon fill />
    </div>
  )
}

export default Support

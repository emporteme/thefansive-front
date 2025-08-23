import React from "react"
import { Mobile as MobileIcon } from "@/shared/icons"

const MobileApp: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Mobile App</span>
      <MobileIcon />
    </div>
  )
}

export default MobileApp

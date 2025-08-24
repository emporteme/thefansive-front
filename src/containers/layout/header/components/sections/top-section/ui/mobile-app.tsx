import React from "react"
import { Mobile as MobileIcon } from "@/shared/icons"

const MobileApp: React.FC = () => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3.5 transition-all duration-200 hover:bg-gray-900">
      <span className="hidden text-sm font-semibold md:block">Mobile App</span>
      <MobileIcon />
    </div>
  )
}

export default MobileApp

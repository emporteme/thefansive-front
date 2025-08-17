import React, { FC } from "react"

const LogoWidget: FC = () => {
  return (
    <div className="flex items-center">
      <div className="mr-3 h-8 w-8 rounded-lg bg-blue-600"></div>
      <span className="text-xl font-bold text-gray-900">Example</span>
    </div>
  )
}

export { LogoWidget }

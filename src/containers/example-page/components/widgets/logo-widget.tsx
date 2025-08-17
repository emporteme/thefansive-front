import React, { FC } from 'react'

const LogoWidget: FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-blue-600 mr-3 rounded-lg w-8 h-8"></div>
      <span className="font-bold text-gray-900 text-xl">Example</span>
    </div>
  )
}

export { LogoWidget }

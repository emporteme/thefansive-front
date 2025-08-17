import React, { FC } from "react"

const UserProfileWidget: FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
      <span className="text-sm font-medium text-gray-700">Пользователь</span>
    </div>
  )
}

export { UserProfileWidget }

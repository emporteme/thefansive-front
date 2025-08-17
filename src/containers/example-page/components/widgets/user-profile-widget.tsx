import React, { FC } from 'react'

const UserProfileWidget: FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-gray-300 rounded-full w-8 h-8"></div>
      <span className="font-medium text-gray-700 text-sm">Пользователь</span>
    </div>
  )
}

export { UserProfileWidget }

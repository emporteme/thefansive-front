import React from "react"

const Burger: React.FC = () => {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-1 rounded-lg p-3.5 px-3 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 lg:hidden lg:px-4">
      <div className="h-0.5 w-4.5 bg-gray-700" />
      <div className="h-0.5 w-4.5 bg-gray-700" />
      <div className="h-0.5 w-4.5 bg-gray-700" />
    </div>
  )
}

export default Burger

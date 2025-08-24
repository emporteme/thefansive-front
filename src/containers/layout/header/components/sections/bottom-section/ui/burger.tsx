import React from "react"

type BurgerProps = {
  isOpen: boolean
  onClick: () => void
}

const Burger: React.FC<BurgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg p-3.5 px-3 py-3 text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:hidden lg:px-4"
    >
      <div
        className={`h-0.5 w-4.5 bg-gray-700 transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <div
        className={`h-0.5 w-4.5 bg-gray-700 transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`h-0.5 w-4.5 bg-gray-700 transition-transform duration-200 ease-in-out ${
          isOpen ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </button>
  )
}

export default Burger

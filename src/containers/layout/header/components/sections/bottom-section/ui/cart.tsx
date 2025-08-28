import React from "react"
import { Cart as CartIcon } from "@/shared/icons"

const Cart: React.FC = () => {
  return (
    <div className="relative flex cursor-pointer items-center rounded-lg p-3.5 text-gray-700 transition-all duration-200 hover:bg-gray-100">
      <CartIcon className="h-5 w-5" />

      {/* The Cart Count */}
      <span className="absolute top-0 right-0 flex min-h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-center text-xs font-medium text-white">
        10
      </span>
    </div>
  )
}

export default Cart

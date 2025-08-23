import React from "react"
import { Cart as CartIcon } from "@/shared/icons"

const Cart: React.FC = () => {
  return (
    <div className="relative flex cursor-pointer items-center rounded-lg p-3.5 text-gray-700 transition-all duration-200 hover:bg-gray-100">
      <CartIcon className="h-5 w-5" />
    </div>
  )
}

export default Cart

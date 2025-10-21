import Link from "next/link"
import React from "react"
import { Cart as CartIcon } from "@/shared/icons"
import { getRoutes } from "@/shared/utils/get-routes"

const Cart: React.FC = () => {
  const routes = getRoutes()

  return (
    <Link href={routes.cart.home()}>
      <div className="relative flex size-12 cursor-pointer items-center rounded-lg p-3.5 text-gray-700 transition-all duration-200 hover:bg-gray-100 active:bg-gray-200">
        <CartIcon className="size-5" />
        <span className="text-2xs absolute top-2 right-1.5 flex min-h-4 min-w-4 items-center justify-center rounded-full bg-blue-400 px-1 text-center font-medium text-white">
          3
        </span>
      </div>
    </Link>
  )
}

export default Cart

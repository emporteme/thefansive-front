import React from "react"
import { Auth, Burger, Cart, Links, Logo, Search } from "./ui"

const BottomSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-5 bg-white px-[5vw] py-4">
      <div className="flex items-center gap-10">
        <Logo />
        <Links />
      </div>
      <div className="flex items-center gap-2">
        <Search />
        <Cart />
        <Auth />
        <Burger />
      </div>
    </div>
  )
}

export default BottomSection

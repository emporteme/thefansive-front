import React from "react"
import { Auth, Cart, Links, Logo, Search } from "./ui"

const BottomSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-10">
        <Logo />
        <Links />
      </div>
      <div className="flex items-center gap-2">
        <Search />
        <Cart />
        <Auth />
      </div>
    </div>
  )
}

export default BottomSection

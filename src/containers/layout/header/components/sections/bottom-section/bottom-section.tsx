import React from "react"
import { Auth, Burger, Cart, Links, Logo, Search } from "./ui"

type BottomSectionProps = {
  isMobileMenuOpen: boolean
  onToggleMobileMenu: () => void
}

const BottomSection: React.FC<BottomSectionProps> = ({ isMobileMenuOpen, onToggleMobileMenu }) => {
  return (
    <div className="flex items-center justify-between gap-5 bg-white px-[5vw] py-4">
      <div className="flex items-center gap-10">
        <Logo />
        <Links />
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 md:flex">
          <Search />
          <Cart />
          <Auth />
        </div>
        <Burger isOpen={isMobileMenuOpen} onClick={onToggleMobileMenu} />
      </div>
    </div>
  )
}

export default BottomSection

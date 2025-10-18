import React from "react"
import Logo from "@/shared/components/elements/logo"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { Auth, Burger, Cart, Links, Search } from "./ui"

type BottomSectionProps = {
  isMobileMenuOpen: boolean
  onToggleMobileMenu: () => void
}

const BottomSection: React.FC<BottomSectionProps> = ({ isMobileMenuOpen, onToggleMobileMenu }) => {
  return (
    <ContainerLayout className="flex items-center justify-between gap-5 border-b border-[#CAD5E2] bg-white py-4">
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
    </ContainerLayout>
  )
}

export default BottomSection

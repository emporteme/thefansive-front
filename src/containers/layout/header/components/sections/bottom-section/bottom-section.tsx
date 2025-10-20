import React from "react"
import Logo from "@/shared/components/elements/logo"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { useIsAuthenticated } from "@/shared/hooks/client/use-is-authenticated"
import { Auth, Burger, Cart, Links, Search } from "./ui"
import User from "./ui/user"

type BottomSectionProps = {
  isMobileMenuOpen: boolean
  onToggleMobileMenu: () => void
}

const BottomSection: React.FC<BottomSectionProps> = ({ isMobileMenuOpen, onToggleMobileMenu }) => {
  const { isAuth } = useIsAuthenticated()

  return (
    <div className="border-b border-[#CAD5E2]">
      <ContainerLayout className="flex items-center justify-between gap-5 bg-white py-4">
        <div className="flex items-center gap-10">
          <Logo />
          <Links />
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <Search />
            <Cart />
            {isAuth ? <User /> : <Auth />}
          </div>
          <Burger isOpen={isMobileMenuOpen} onClick={onToggleMobileMenu} />
        </div>
      </ContainerLayout>
    </div>
  )
}

export default BottomSection

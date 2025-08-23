import React from "react"
import { BottomSection, TopSection } from "./components/sections"

const Header: React.FC = () => {
  return (
    <header className="flex flex-col">
      <TopSection />
      <BottomSection />
    </header>
  )
}

export default Header

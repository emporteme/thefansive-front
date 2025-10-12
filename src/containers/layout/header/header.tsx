"use client"
import React, { useCallback, useEffect, useState } from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { BottomSection, MobileMenu, TopSection } from "./components/sections"

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    // Lock body scroll when menu is open
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      if (typeof document !== "undefined") {
        document.body.style.overflow = ""
      }
    }
  }, [isMobileMenuOpen])

  return (
    <header className="flex flex-col bg-white">
      <TopSection />
      <BottomSection isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  )
}

export default Header

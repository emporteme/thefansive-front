import Link from "next/link"
import React from "react"
import { Auth, Cart, Search } from "../bottom-section/ui"
import { getHeaderLinks, type HeaderLink } from "../bottom-section/ui/links"

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-200 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Slide-out panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-xl transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col gap-4 p-5">
          {/* Search */}
          <div className="flex items-center justify-between">
            <Search />
            <button
              type="button"
              onClick={onClose}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg p-3.5 px-3 py-3 text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:hidden lg:px-4"
            >
              <div
                className={`h-0.5 w-4.5 bg-gray-700 transition-transform duration-200 ease-in-out ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <div
                className={`h-0.5 w-4.5 bg-gray-700 transition-all duration-200 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`h-0.5 w-4.5 bg-gray-700 transition-transform duration-200 ease-in-out ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col divide-y divide-gray-100">
            {getHeaderLinks().map((link: HeaderLink) => (
              <Link
                key={link.id}
                href={link.href}
                className="py-3 text-base font-semibold text-gray-700 hover:text-gray-900"
                onClick={onClose}
              >
                {link.children}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cart />
              <Auth />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

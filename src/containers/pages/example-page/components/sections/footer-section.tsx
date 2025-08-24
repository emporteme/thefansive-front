"use client"

import React, { FC } from "react"
import { FooterLinks } from "../widgets/footer-links"
import { SocialLinks } from "../widgets/social-links"

const FooterSection: FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FooterLinks />
          <SocialLinks />
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Example Company. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection }

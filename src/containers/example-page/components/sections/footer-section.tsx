"use client"

import React, { FC } from 'react'
import { FooterLinks } from '../widgets/footer-links'
import { SocialLinks } from '../widgets/social-links'

const FooterSection: FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <FooterLinks />
          <SocialLinks />
        </div>
        <div className="mt-8 pt-8 border-gray-700 border-t text-gray-400 text-center">
          <p>&copy; 2025 Example Company. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection }

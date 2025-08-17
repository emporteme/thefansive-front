"use client"

import React, { FC } from 'react'

const NavigationWidget: FC = () => {
  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Услуги', href: '/services' },
    { label: 'Контакты', href: '/contact' }
  ]

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 text-sm transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export { NavigationWidget }

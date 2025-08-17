"use client"

import React, { FC } from "react"

const NavigationWidget: FC = () => {
  const navItems = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Контакты", href: "/contact" },
  ]

  return (
    <nav className="hidden space-x-8 md:flex">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export { NavigationWidget }

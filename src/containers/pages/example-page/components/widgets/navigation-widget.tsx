"use client"

import { FC } from "react"
import { useRoutes } from "@/shared/hooks/client/use-routes"

const NavigationWidget: FC = () => {
  const routes = useRoutes()

  const navItems = [
    { label: "Главная", href: routes.home() },
    { label: "О нас", href: routes.about() },
    { label: "Услуги", href: routes.services() },
    { label: "Контакты", href: routes.contact() },
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

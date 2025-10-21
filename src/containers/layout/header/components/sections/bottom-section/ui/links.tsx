import Link from "next/link"
import React from "react"
import { getRoutes } from "@/shared/utils/get-routes"
import EcosystemDropdown from "./ecosystem-dropdown"

export type HeaderLink = { id: string; href: string; children: string }

export const getHeaderLinks = (): HeaderLink[] => {
  const routes = getRoutes()

  return [
    { id: "home", href: routes.home(), children: "Home" },
    { id: "partners", href: routes.partners(), children: "Partners" },
    { id: "how-it-works", href: routes.howItWorks(), children: "How it works?" },
    { id: "news", href: routes.news.all(), children: "News" },
  ]
}

const LinkComponent: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer rounded-lg p-2.5 font-semibold whitespace-nowrap text-gray-700 transition-all duration-200 hover:bg-gray-100"
    >
      {children}
    </Link>
  )
}
const Links: React.FC = () => {
  const links = getHeaderLinks()
  const firstLink = links[0]

  if (!firstLink) {
    return null
  }

  return (
    <div className="hidden items-center lg:flex">
      <LinkComponent key={firstLink.id} href={firstLink.href}>
        {firstLink.children}
      </LinkComponent>
      <EcosystemDropdown />
      {links.slice(1).map((link: HeaderLink) => (
        <LinkComponent key={link.id} href={link.href}>
          {link.children}
        </LinkComponent>
      ))}
    </div>
  )
}

export default Links

import Link from "next/link"
import React from "react"

export type HeaderLink = { id: number; href: string; children: string }

export const headerLinks: HeaderLink[] = [
  { id: 1, href: "/", children: "Home" },
  { id: 2, href: "/", children: "Ecosystem" },
  { id: 3, href: "/", children: "Game" },
  { id: 4, href: "/", children: "Partners" },
  { id: 5, href: "/", children: "How it works?" },
  { id: 6, href: "/", children: "News" },
]

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
  return (
    <div className="hidden items-center lg:flex">
      {headerLinks.map((link: HeaderLink) => (
        <LinkComponent key={link.id} href={link.href}>
          {link.children}
        </LinkComponent>
      ))}
    </div>
  )
}

export default Links

import Link from "next/link"
import React from "react"

const LinkComponent: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer rounded-lg p-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100"
    >
      {children}
    </Link>
  )
}
const Links: React.FC = () => {
  const links = [
    { href: "/", children: "Home" },
    { href: "/", children: "Ecosystem" },
    { href: "/", children: "Game" },
    { href: "/", children: "Partners" },
    { href: "/", children: "How it works?" },
    { href: "/", children: "News" },
  ]
  return (
    <div className="flex items-center">
      {links.map((link) => (
        <LinkComponent key={link.href} href={link.href}>
          {link.children}
        </LinkComponent>
      ))}
    </div>
  )
}

export default Links

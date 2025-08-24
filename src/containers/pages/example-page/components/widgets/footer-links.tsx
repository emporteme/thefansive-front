import React, { FC } from "react"

const FooterLinks: FC = () => {
  const links = [
    { label: "О компании", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Блог", href: "/blog" },
    { label: "Поддержка", href: "/support" },
  ]

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Ссылки</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-gray-300 transition-colors hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FooterLinks }

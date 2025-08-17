import React, { FC } from 'react'

const SocialLinks: FC = () => {
  const socialLinks = [
    { label: 'Telegram', href: 'https://t.me/example' },
    { label: 'VK', href: 'https://vk.com/example' },
    { label: 'YouTube', href: 'https://youtube.com/example' }
  ]

  return (
    <div>
      <h3 className="mb-4 font-semibold text-lg">Социальные сети</h3>
      <ul className="space-y-2">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { SocialLinks }

import React from "react"
import { Facebook, Instagram, Telegram, TikTok, X } from "@/shared/icons"
import { SocialMedia } from "@/shared/types/app"

const SocialsList = ({ socials }: { socials: Record<SocialMedia, string> }) => {
  const getSocialIcon = (platform: SocialMedia) => {
    switch (platform) {
      case "twitter":
        return <X className="h-6 w-6" />
      case "facebook":
        return <Facebook className="h-6 w-6" />
      case "instagram":
        return <Instagram className="h-6 w-6" />
      case "telegram":
        return <Telegram className="h-6 w-6" />
      case "tiktok":
        return <TikTok className="h-6 w-6" />
      default:
        return null
    }
  }

  return (
    <ul className="flex flex-col gap-4">
      {(Object.entries(socials) as [SocialMedia, string][]).map(([platform, url]) => {
        if (!url) return null
        const icon = getSocialIcon(platform)
        if (!icon) return null

        return (
          <li key={platform}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center justify-center rounded-2xl bg-black/40 p-4"
            >
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialsList

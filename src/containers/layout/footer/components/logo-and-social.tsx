import Link from "next/link"
import Logo from "@/shared/components/elements/logo"
import { Facebook, Instagram, Telegram, X } from "@/shared/icons"
import { socialMediaLinks } from "@/shared/types/app"

const LogoAndSocial = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <Logo />
        <span className="text-sm leading-[1.2] font-medium text-black">Go Beyond Being a Spectator</span>
      </div>
      <ul className="flex gap-2.5">
        <li>
          <Link href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook className="size-6 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="size-6 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link href={socialMediaLinks.telegram} target="_blank" rel="noopener noreferrer">
            <Telegram className="size-6 text-gray-800" />
          </Link>
        </li>

        <li>
          <Link href={socialMediaLinks.x} target="_blank" rel="noopener noreferrer">
            <X className="size-6 text-gray-800" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LogoAndSocial

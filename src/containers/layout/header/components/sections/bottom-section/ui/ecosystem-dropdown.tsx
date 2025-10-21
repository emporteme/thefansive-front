import Link from "next/link"
import React, { useRef, useState } from "react"
import { getRoutes } from "@/shared/utils/get-routes"

export type EcosystemDropdownItem = {
  id: string
  href?: string
  children: string
  isComing?: boolean
  target?: string
}

export const getEcosystemDropdownItems = (): EcosystemDropdownItem[] => {
  const routes = getRoutes()

  return [
    { id: "clubs", href: routes.clubs.all(), children: "Clubs", isComing: true },
    { id: "athlets", children: "Athlets", isComing: true },
    { id: "raffle", children: "Raffle", isComing: true },
    { id: "nfts", children: "NFT's", isComing: true },
    { id: "rewards", children: "Rewards", isComing: true },
    { id: "game", children: "Game", isComing: true },
    { id: "docs", href: "https://thefansive.gitbook.io/docs/", target: "_blank", children: "Docs" },
  ]
}

const EcosystemDropdownItem: React.FC<{
  item: EcosystemDropdownItem
  onItemClick: () => void
}> = ({ item, onItemClick }) => {
  const content = (
    <div
      className={`cursor-pointer rounded-md px-3 py-2 text-base leading-[1.7] font-semibold tracking-[0] whitespace-nowrap text-slate-900 transition-all duration-200 hover:bg-slate-200`}
      onClick={item.isComing ? undefined : onItemClick}
    >
      {item.children}
      {item.isComing && <span className="ml-1 text-sm text-slate-500">(Coming)</span>}
    </div>
  )

  if (item.href && !item.isComing) {
    return (
      <Link href={item.href} target={item.target}>
        {content}
      </Link>
    )
  }

  return content
}

const EcosystemDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const items = getEcosystemDropdownItems()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150) // 150ms delay before closing
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="rounded-2lg cursor-pointer px-4 py-2 text-base leading-[1.5] font-semibold tracking-[0] whitespace-nowrap text-gray-700 transition-all duration-200 hover:bg-gray-100">
        Ecosystem
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 min-w-[240px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
          {items.map((item) => (
            <EcosystemDropdownItem key={item.id} item={item} onItemClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default EcosystemDropdown

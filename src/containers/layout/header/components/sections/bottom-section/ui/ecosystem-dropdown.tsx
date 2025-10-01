import Link from "next/link"
import React, { useRef, useState } from "react"
import { getRoutes } from "@/shared/utils/get-routes"

export type EcosystemDropdownItem = {
  id: number
  href?: string
  children: string
  isComing?: boolean
}

export const getEcosystemDropdownItems = (): EcosystemDropdownItem[] => {
  const routes = getRoutes()

  return [
    { id: 1, href: routes.clubs.all(), children: "Clubs" },
    { id: 2, children: "Athlets", isComing: true },
    { id: 3, children: "Raffle", isComing: true },
    { id: 4, children: "NFT's", isComing: true },
    { id: 5, children: "Rewards", isComing: true },
    { id: 6, href: "#", children: "Docs" }, // Add actual docs route when available
  ]
}

const EcosystemDropdownItem: React.FC<{
  item: EcosystemDropdownItem
  onItemClick: () => void
}> = ({ item, onItemClick }) => {
  const content = (
    <div
      className={`cursor-pointer rounded-md px-3 py-2.5 text-sm font-semibold whitespace-nowrap text-slate-900 transition-all duration-200 hover:bg-slate-100 ${
        item.isComing ? "opacity-60" : ""
      }`}
      onClick={item.isComing ? undefined : onItemClick}
    >
      {item.children}
      {item.isComing && <span className="ml-1 text-sm text-slate-500">(Coming)</span>}
    </div>
  )

  if (item.href && !item.isComing) {
    return <Link href={item.href}>{content}</Link>
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
      <div className="cursor-pointer rounded-lg p-2.5 font-semibold whitespace-nowrap text-gray-700 transition-all duration-200 hover:bg-gray-100">
        Ecosystem
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
          {items.map((item) => (
            <EcosystemDropdownItem key={item.id} item={item} onItemClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default EcosystemDropdown

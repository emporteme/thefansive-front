import Link from "next/link"
import React, { useState } from "react"
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
    { id: 1, href: routes.ecosystem(), children: "Clubs" },
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
      className={`cursor-pointer px-3 py-2.5 font-semibold whitespace-nowrap text-gray-700 transition-all duration-200 hover:bg-gray-100 ${
        item.isComing ? "opacity-60" : ""
      }`}
      onClick={item.isComing ? undefined : onItemClick}
    >
      {item.children}
      {item.isComing && <span className="ml-1 text-sm text-gray-500">(Coming)</span>}
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

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="cursor-pointer rounded-lg p-2.5 font-semibold whitespace-nowrap text-gray-700 transition-all duration-200 hover:bg-gray-100">
        Ecosystem
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          {items.map((item) => (
            <EcosystemDropdownItem key={item.id} item={item} onItemClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default EcosystemDropdown

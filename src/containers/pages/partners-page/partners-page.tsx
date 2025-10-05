"use client"

import Image from "next/image"
import { useState } from "react"
import { Tab, Tabs } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import PartnersList from "./components/partners-list"

export interface Partner {
  id: number
  name: string
  image: string
}

const images = [
  "/images/dev/arsenal-logo.png",
  "/images/dev/liverpool-logo.png",
  "/images/dev/manchester-logo.png",
  "/images/dev/madrid-logo.png",
  "/images/dev/wolverhampton-logo.png",
  "/images/dev/lakers-logo.png",
  "/images/dev/premier-league-logo.png",
]

const createPartner = (name: string) => ({
  id: Math.random(),
  name,
  image: images[Math.floor(Math.random() * images.length)] ?? "",
})

const partners = Array.from({ length: 1000 }).map((_, index) => createPartner(`Partner ${index + 1}`))

const tabs = [
  { label: "Football", value: "football", content: <PartnersList partners={partners} /> },
  { label: "Basketball", value: "basketball", content: <PartnersList partners={partners} /> },
  { label: "Tennis", value: "tennis", content: <PartnersList partners={partners} /> },
  { label: "Rugby", value: "rugby", content: <PartnersList partners={partners} /> },
  { label: "Cricket", value: "cricket", content: <PartnersList partners={partners} /> },
  { label: "League", value: "league", content: <PartnersList partners={partners} /> },
  { label: "Other", value: "other", content: <PartnersList partners={partners} /> },
]

const PartnersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0] as Tab)

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex flex-col pb-10">
      <div className="h-9vw mt-7.5 mb-18 w-full border-t border-b border-[#cad5e2]">
        <Image
          src="/images/fallbacks/user-empty-banner.webp"
          alt="banner"
          width={1500}
          height={160}
          className="h-full w-full object-cover"
        />
      </div>
      <ContainerLayout>
        <div className="flex w-full flex-col">
          <Tabs
            minWidth={144}
            gap={2}
            variant="secondary"
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            align="center"
          />
        </div>
      </ContainerLayout>
    </div>
  )
}

export default PartnersPage

"use client"

import { useEffect, useMemo, useState } from "react"
import { CachedImage, Tab, Tabs } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import PartnersList from "./components/partners-list"

export interface Partner {
  id: number
  name: string
  image: string
}

const images = [
  "/images/dev/clubs/arsenal.png",
  "/images/dev/clubs/liverpool.png",
  "/images/dev/clubs/manchester-city.png",
  "/images/dev/clubs/real-madrid.png",
  "/images/dev/clubs/chelsea.png",
  "/images/dev/clubs/espanyol.png",
  "/images/dev/clubs/everton.png",
  "/images/dev/clubs/wolverhampton.png",
  "/images/dev/clubs/manchester-united.png",
  "/images/dev/clubs/tottenham.png",
  "/images/dev/clubs/juventus.png",
]

const createPartner = (name: string) => ({
  id: Math.random(),
  name,
  image: images[Math.floor(Math.random() * images.length)] ?? "",
})

const tabs = (partners: Partner[]) => [
  { label: "Football", value: "football", content: <PartnersList partners={partners} /> },
  { label: "Basketball", value: "basketball", content: <PartnersList partners={partners} /> },
  { label: "Tennis", value: "tennis", content: <PartnersList partners={partners} /> },
  { label: "Rugby", value: "rugby", content: <PartnersList partners={partners} /> },
  {
    label: "Cricket",
    value: "cricket",
    content: <PartnersList partners={partners} />,
    after: <div className="mx-1 h-12 w-[1px] bg-gray-200" />,
  },
  { label: "League", value: "league", content: <PartnersList partners={partners} /> },
  { label: "Other", value: "other", content: <PartnersList partners={partners} /> },
]

const PartnersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab | undefined>()

  const partners = useMemo(() => {
    return Array.from({ length: 1000 }).map((_, index) => createPartner(`Partner ${index + 1}`))
  }, [activeTab])

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    const tab = tabs(partners)[0]
    setActiveTab(tab)
  }, [])

  return (
    <div className="flex flex-col pb-10">
      <div className="h-9vw mt-7.5 mb-18 w-full border-t border-b border-[#cad5e2]">
        <CachedImage
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
            tabs={tabs(partners)}
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

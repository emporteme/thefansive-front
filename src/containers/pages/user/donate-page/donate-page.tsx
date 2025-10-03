"use client"

import { useState } from "react"
import { Tabs } from "@/shared/components/ui/tabs"
import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { TabSection } from "./components/sections/tab-section"

export interface Donate {
  id: string
  date: string
  title: string
  image: string
  paymentStatus: PaymentStatus
  deliveryStatus: DeliveryStatus
  yourDonation: string
}

const donates = {
  all: [
    {
      id: "1234567899",
      date: "10.08.2025",
      title: "Liverpool FC",
      image: "/images/dev/liverpool-logo.png",
      paymentStatus: "paid" as PaymentStatus,
      deliveryStatus: "delivered" as DeliveryStatus,
      yourDonation: "5.000",
    },
  ],
} as const satisfies Record<string, Donate[]>

const DonatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs
        tabs={[{ label: "All", value: "all", content: <TabSection donates={donates.all} /> }]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  )
}

export default DonatePage

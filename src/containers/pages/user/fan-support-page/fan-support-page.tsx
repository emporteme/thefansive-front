"use client"

import { useState } from "react"
import { Tabs } from "@/shared/components/ui/tabs"
import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { TabSection } from "./components/sections/tab-section"

export interface FanSupportOrder {
  id: string
  date: string
  collection: string
  title: string
  paymentStatus: PaymentStatus
  deliveryStatus: DeliveryStatus
  estimatedDelivery: string
  carrier: string
  carrierImage: string
  code: string
  image: string
}

const orders = {
  all: [
    {
      id: "1234567899",
      date: "10/08/2025",
      collection: "Liverpool Fan Support",
      title: "LFC Signed 25/26 Wirtz Boxed Shirt",
      paymentStatus: "paid" as PaymentStatus,
      deliveryStatus: "delivered" as DeliveryStatus,
      estimatedDelivery: "24/06 - 26/06",
      carrier: "DHL",
      carrierImage: "/images/dev/dhl.png",
      code: "1234567890",
      image: "/images/dev/liverpool-fan-support.png",
    },
    {
      id: "1234567890",
      date: "10/08/2025",
      collection: "Liverpool Fan Support",
      title: "LFC Signed Gerrard Ball In Case",
      paymentStatus: "paid" as PaymentStatus,
      deliveryStatus: "preparing" as DeliveryStatus,
      estimatedDelivery: "24/06 - 26/06",
      carrier: "DHL",
      carrierImage: "/images/dev/dhl.png",
      code: "1234567890",
      image: "/images/dev/liverpool-fan-ball.png",
    },
    {
      id: "1234567891",
      date: "10/08/2025",
      collection: "AZ Cardinals Fan Support",
      title: "Arizona Cardinals Fan Ring",
      paymentStatus: "paid" as PaymentStatus,
      deliveryStatus: "shipped" as DeliveryStatus,
      estimatedDelivery: "24/06 - 26/06",
      carrier: "DHL",
      carrierImage: "/images/dev/dhl.png",
      code: "1234567891",
      image: "/images/dev/ring-fan.png",
    },
  ],
  ongoing: [
    {
      id: "1234567890",
      date: "10/08/2025",
      collection: "Liverpool Fan Support",
      title: "LFC Signed Gerrard Ball In Case",
      paymentStatus: "paid" as PaymentStatus,
      deliveryStatus: "preparing" as DeliveryStatus,
      estimatedDelivery: "24/06 - 26/06",
      carrier: "DHL",
      carrierImage: "/images/dev/dhl.png",
      code: "1234567890",
      image: "/images/dev/liverpool-fan-ball.png",
    },
    {
      id: "1234567891",
      date: "10/08/2025",
      collection: "AZ Cardinals Fan Support",
      title: "Arizona Cardinals Fan Ring",
      paymentStatus: "paid" as PaymentStatus,
      deliveryStatus: "shipped" as DeliveryStatus,
      estimatedDelivery: "24/06 - 26/06",
      carrier: "DHL",
      carrierImage: "/images/dev/dhl.png",
      code: "1234567891",
      image: "/images/dev/ring-fan.png",
    },
  ],
  completed: [
    {
      id: "1234567899",
      date: "10/08/2025",
      collection: "Liverpool Fan Support",
      title: "LFC Signed 25/26 Wirtz Boxed Shirt",
      paymentStatus: "paid" as PaymentStatus,
      deliveryStatus: "delivered" as DeliveryStatus,
      estimatedDelivery: "24/06 - 26/06",
      carrier: "DHL",
      carrierImage: "/images/dev/dhl.png",
      code: "1234567890",
      image: "/images/dev/liverpool-fan-support.png",
    },
  ],
} as const satisfies Record<string, FanSupportOrder[]>

const FanSupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs
        tabs={[
          { label: "All", value: "all", content: <TabSection orders={orders.all} /> },
          { label: "Ongoing", value: "ongoing", content: <TabSection orders={orders.ongoing} /> },
          { label: "Completed", value: "completed", content: <TabSection orders={orders.completed} /> },
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  )
}

export default FanSupportPage

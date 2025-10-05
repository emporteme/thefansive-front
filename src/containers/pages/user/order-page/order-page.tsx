"use client"

import { useState } from "react"
import { Tab, Tabs } from "@/shared/components/ui/tabs"
import { AllTabSection } from "./components/sections/all-tab-section"
import { CompletedTabSection } from "./components/sections/completed-tab-section"
import { OngoingTabSection } from "./components/sections/ongoing-tab-section"

const tabs = [
  { label: "All", value: "all", content: <AllTabSection /> },
  { label: "Ongoing", value: "ongoing", content: <OngoingTabSection /> },
  { label: "Completed", value: "completed", content: <CompletedTabSection /> },
]

const OrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab | undefined>(tabs[0])

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}

export default OrderPage

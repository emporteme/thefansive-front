"use client"

import { useState } from "react"
import { Tabs } from "@/shared/components/ui/tabs"
import { AllTabSection } from "./components/sections/all-tab-section"

const DonatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs
        tabs={[{ label: "All", value: "all", content: <AllTabSection /> }]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  )
}

export default DonatePage

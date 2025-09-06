"use client"

import { useState } from "react"
import { Tabs } from "@/shared/components/ui/tabs"
import { AllTabSection } from "./components/sections/all-tab-section"
import { CompletedTabSection } from "./components/sections/completed-tab-section"
import { OngoingTabSection } from "./components/sections/ongoing-tab-section"

const FanSupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs
        tabs={[
          { label: "All", value: "all", content: <AllTabSection /> },
          { label: "Ongoing", value: "ongoing", content: <OngoingTabSection /> },
          { label: "Completed", value: "completed", content: <CompletedTabSection /> },
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  )
}

export default FanSupportPage

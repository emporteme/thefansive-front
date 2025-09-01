"use client"

import { useState } from "react"
import { Tabs } from "@/shared/components/ui/tabs"
import { DailyTabSection } from "./components/sections/daily-tab-section"

const TasksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("daily")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <Tabs
      tabs={[
        { label: "Daily", value: "daily", content: <DailyTabSection /> },
        { label: "Social", value: "social", content: <DailyTabSection /> },
        { label: "Youtube", value: "youtube", content: <DailyTabSection /> },
        { label: "Partners", value: "partners", content: <DailyTabSection /> },
      ]}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  )
}

export default TasksPage

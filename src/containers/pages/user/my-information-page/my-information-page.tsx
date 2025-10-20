"use client"

import { useState } from "react"
import { Tab, Tabs } from "@/shared/components/ui"
import { AddressTabSection } from "./components/sections/address-tab-section"
import { PersonalTabSection } from "./components/sections/personal-tab-section"

enum MyInformationTab {
  PersonalInformation = "personal-information",
  Address = "address",
}

const tabs = [
  { label: "Personal Information", value: MyInformationTab.PersonalInformation, content: <PersonalTabSection /> },
  { label: "Address", value: MyInformationTab.Address, content: <AddressTabSection /> },
]

const MyInformationPage: React.FC = () => {
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

export default MyInformationPage

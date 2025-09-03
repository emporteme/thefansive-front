"use client"

import { useState } from "react"
import { Tabs } from "@/shared/components/ui"
import { MembershipTabSection } from "./components/sections/membership-tab-section"

enum MyInformationTab {
  Membership = "membership",
  Password = "password",
  Address = "address",
}

const tabs = [
  { label: "Membership", value: MyInformationTab.Membership, content: <MembershipTabSection /> },
  { label: "Password", value: MyInformationTab.Password, content: <MembershipTabSection /> },
  { label: "Address", value: MyInformationTab.Address, content: <MembershipTabSection /> },
]

const MyInformationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(MyInformationTab.Membership)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
}

export default MyInformationPage

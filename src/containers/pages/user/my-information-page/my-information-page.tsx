"use client"

import { useState } from "react"
import { Tabs } from "@/shared/components/ui"
import { MembershipTabSection } from "./components/sections/membership-tab-section"

enum PersonalInformationTab {
  Membership = "membership",
  Password = "password",
  Address = "address",
}

const tabs = [
  { label: "Membership", value: PersonalInformationTab.Membership, content: <MembershipTabSection /> },
  { label: "Password", value: PersonalInformationTab.Password, content: <MembershipTabSection /> },
  { label: "Address", value: PersonalInformationTab.Address, content: <MembershipTabSection /> },
]

const MyInformationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(PersonalInformationTab.Membership)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
}

export default MyInformationPage

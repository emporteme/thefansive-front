import React from "react"
import { CurrencySwitcher, LangSwitcher, MobileApp, Support } from "./ui"

const TopSection: React.FC = () => {
  return (
    <div className="flex items-center justify-end gap-5">
      <LangSwitcher />
      <CurrencySwitcher />
      <MobileApp />
      <Support />
    </div>
  )
}

export default TopSection

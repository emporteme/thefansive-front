import React from "react"
import { CurrencySwitcher, LangSwitcher, MobileApp, Support } from "./ui"

const TopSection: React.FC = () => {
  return (
    <div className="flex items-center justify-end gap-2 bg-black px-[5vw] py-2 text-white">
      <LangSwitcher />
      <CurrencySwitcher />
      <MobileApp />
      <Support />
    </div>
  )
}

export default TopSection

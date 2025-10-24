import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { CurrencySwitcher, LangSwitcher, Support } from "./ui"

const TopSection: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <ContainerLayout className="flex items-center justify-end gap-2 py-1">
        <LangSwitcher variant="black" />
        <CurrencySwitcher />
        <Support />
      </ContainerLayout>
    </div>
  )
}

export default TopSection

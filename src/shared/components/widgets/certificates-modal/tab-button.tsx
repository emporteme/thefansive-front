import { cn } from "@/shared/lib/utils"
import { CertificateType } from "@/shared/types/fan-support"

interface TabButtonProps {
  tab: CertificateType
  activeTab: CertificateType
  setActiveTab: (tab: CertificateType) => void
  title: string
}

const TabButton = ({ tab, activeTab, setActiveTab, title }: TabButtonProps) => {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={cn(`rounded-2lg h-12 w-50 bg-white px-4 py-3 font-semibold text-slate-600`, {
        "bg-slate-900 text-white": activeTab === tab,
        "hover:bg-slate-50": activeTab !== tab,
      })}
    >
      {title}
    </button>
  )
}

export { TabButton }

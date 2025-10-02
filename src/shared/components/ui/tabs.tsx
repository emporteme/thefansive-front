import * as ReactTabs from "@radix-ui/react-tabs"
import { cn } from "@/shared/lib/utils"

interface TabsProps {
  tabs: {
    label: string
    value: string
    content: React.ReactNode
  }[]
  activeTab: string
  onTabChange: (tab: string) => void
  className?: string
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, className }) => {
  const isActiveTab = (tab: string) => tab === activeTab

  return (
    <ReactTabs.Root defaultValue={activeTab} className={className}>
      <ReactTabs.List className="flex gap-8">
        {tabs.map((tab) => (
          <ReactTabs.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "rounded-2lg min-w-[160px] cursor-pointer border-[1.5px] border-transparent bg-slate-100 px-4 py-3 text-center text-base leading-[24px] font-semibold text-slate-600 transition-all duration-300 hover:border-slate-900",
              isActiveTab(tab.value) && "bg-slate-900",
              isActiveTab(tab.value) && "text-slate-50"
            )}
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </ReactTabs.Trigger>
        ))}
      </ReactTabs.List>
      {tabs.map((tab) => (
        <ReactTabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </ReactTabs.Content>
      ))}
    </ReactTabs.Root>
  )
}

export { Tabs }

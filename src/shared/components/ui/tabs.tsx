import * as ReactTabs from "@radix-ui/react-tabs"
import { cn } from "@/shared/lib/utils"

export interface Tab {
  label: string
  value: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  activeTab: Tab | undefined
  onTabChange: (tab: Tab) => void
  className?: string
  variant?: "primary" | "secondary"
  minWidth?: number
  gap?: number
  align?: "start" | "center" | "end"
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  variant = "primary",
  minWidth = 160,
  gap = 8,
  align = "start",
}) => {
  const isActiveTab = (tab: Tab) => tab.value === activeTab?.value

  return (
    <ReactTabs.Root value={activeTab?.value} className={className}>
      <ReactTabs.List
        className={cn("flex", {
          "gap-8": gap === 8,
          "gap-4": gap === 4,
          "gap-2": gap === 2,
          "justify-start": align === "start",
          "justify-center": align === "center",
          "justify-end": align === "end",
        })}
      >
        {tabs.map((tab) => (
          <ReactTabs.Trigger
            key={tab.value as string}
            value={tab.value}
            style={{ minWidth: `${minWidth}px` }}
            className={cn(
              "rounded-2lg h-12 cursor-pointer border-[1.5px] border-transparent px-4 py-3 text-center text-base leading-[1.4] font-semibold transition-all duration-300",
              {
                "bg-slate-100 text-slate-600 hover:border-slate-900": variant === "primary",
                "bg-slate-900 text-slate-50": isActiveTab(tab) && variant === "primary",
                "border-slate-900 bg-transparent text-slate-600 hover:bg-slate-900 hover:text-slate-50":
                  variant === "secondary",
                "border-slate-900 bg-slate-900 text-slate-50": isActiveTab(tab) && variant === "secondary",
              }
            )}
            onClick={() => onTabChange(tab)}
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

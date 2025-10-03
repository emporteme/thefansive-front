import type { Donate } from "../../donate-page"
import { DonateCard } from "../widgets/donate-card"

interface TabSectionProps {
  donates: Donate[]
}

const TabSection: React.FC<TabSectionProps> = ({ donates }) => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6 rounded-3xl bg-slate-100 p-5">
      {donates.map((donate) => (
        <DonateCard key={donate.id} donate={donate} />
      ))}
    </div>
  )
}

export { TabSection }

import { ClockFilled, Tick as TickIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import { DeliveryStatus } from "@/shared/types/order"

interface DeliveryStatusData {
  label: string
  className: string
  icon: React.ReactNode
}

interface DeliveryStatusProps {
  status: DeliveryStatus
}

const dataByStatus = {
  delivered: {
    label: "Delivered",
    className: "bg-emerald-50 text-emerald-700",
    icon: <TickIcon className="text-emerald-600" />,
  },
  preparing: {
    label: "Preparing",
    className: "bg-orange-50 text-orange-500",
    icon: <ClockFilled className="text-orange-500" />,
  },
} as Record<DeliveryStatus, DeliveryStatusData>

const DeliveryStatusTag: React.FC<DeliveryStatusProps> = ({ status }) => {
  return (
    <span
      className={cn(
        "flex items-center gap-1 self-start rounded-md px-2 py-1 text-xs leading-[16px] font-semibold",
        dataByStatus?.[status]?.className
      )}
    >
      {dataByStatus?.[status]?.label}
      {dataByStatus?.[status]?.icon}
    </span>
  )
}

export { DeliveryStatusTag }

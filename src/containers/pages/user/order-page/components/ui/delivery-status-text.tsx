import { Clock as ClockIcon, Tick as TickIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import { DeliveryStatus, DeliveryStatusData } from "../models"

interface DeliveryStatusProps {
  status: DeliveryStatus
}

const dataByStatus = {
  delivered: {
    label: "Delivered",
    labelClassName: "text-primary-600",
    icon: <TickIcon className="text-primary-600" />,
  },
  pending: {
    label: "Pending",
    labelClassName: "text-amber-600",
    icon: <ClockIcon className="text-amber-600" />,
  },
} as Record<DeliveryStatus, DeliveryStatusData>

const DeliveryStatusText: React.FC<DeliveryStatusProps> = ({ status }) => {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn(dataByStatus?.[status]?.labelClassName)}>{dataByStatus?.[status]?.label}</span>
      {dataByStatus?.[status]?.icon}
    </span>
  )
}

export { DeliveryStatusText }

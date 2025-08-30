import { Tick as TickIcon } from "@/shared/icons"
import { DeliveryStatus, DeliveryStatusData } from "../models"

interface DeliveryStatusProps {
  status: DeliveryStatus
}

const dataByStatus = {
  delivered: {
    label: "Delivered",
    icon: <TickIcon className="text-primary-600" />,
  },
  pending: {
    label: "Pending",
    icon: <TickIcon className="text-yellow-500" />,
  },
  failed: {
    label: "Failed",
    icon: <TickIcon className="text-red-500" />,
  },
} as Record<DeliveryStatus, DeliveryStatusData>

const DeliveryStatusText: React.FC<DeliveryStatusProps> = ({ status }) => {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-primary-600">{dataByStatus?.[status]?.label}</span>
      {dataByStatus?.[status]?.icon}
    </span>
  )
}

export { DeliveryStatusText }

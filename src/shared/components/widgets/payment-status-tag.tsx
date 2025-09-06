import { Tick as TickIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import { PaymentStatus } from "@/shared/types/order"

interface PaymentStatusData {
  label: string
  className: string
  icon: React.ReactNode
}

interface PaymentStatusProps {
  status: PaymentStatus
}

const dataByStatus = {
  paid: {
    label: "Paid",
    className: "bg-emerald-50 text-emerald-700",
    icon: <TickIcon className="text-emerald-600" />,
  },
  pending: {
    label: "Pending",
    className: "bg-yellow-500",
    icon: <TickIcon className="text-yellow-500" />,
  },
  failed: {
    label: "Failed",
    className: "bg-red-500",
    icon: <TickIcon className="text-red-500" />,
  },
} as Record<PaymentStatus, PaymentStatusData>

const PaymentStatusTag: React.FC<PaymentStatusProps> = ({ status }) => {
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

export { PaymentStatusTag }

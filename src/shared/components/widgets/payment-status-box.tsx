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
    className: "bg-primary-100 text-primary-800",
    icon: <TickIcon className="text-primary-600" />,
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

const PaymentStatusBox: React.FC<PaymentStatusProps> = ({ status }) => {
  return (
    <p
      className={cn(
        "font-base flex items-center gap-1.5 self-start rounded-full px-2.5 py-1.5 font-semibold",
        dataByStatus?.[status]?.className
      )}
    >
      {dataByStatus?.[status]?.label}
      {dataByStatus?.[status]?.icon}
    </p>
  )
}

export { PaymentStatusBox }

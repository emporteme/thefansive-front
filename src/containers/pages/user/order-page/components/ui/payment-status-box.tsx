import { cn } from "@/shared/lib/utils"
import { PaymentStatus, PaymentStatusData } from "../models"

interface PaymentStatusProps {
  status: PaymentStatus
}

const dataByStatus = {
  paid: {
    label: "Paid",
    className: "bg-primary-100 text-primary-800",
  },
  pending: {
    label: "Pending",
    className: "bg-yellow-500",
  },
  failed: {
    label: "Failed",
    className: "bg-red-500",
  },
} as Record<PaymentStatus, PaymentStatusData>

const PaymentStatusBox: React.FC<PaymentStatusProps> = ({ status }) => {
  return (
    <p className={cn("flex gap-2.5 self-start rounded-full p-2.5", dataByStatus?.[status]?.className)}>
      {dataByStatus?.[status]?.label}
    </p>
  )
}

export { PaymentStatusBox }

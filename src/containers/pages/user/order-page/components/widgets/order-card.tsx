import Image from "next/image"
import { PaymentStatus } from "../models"
import { InvoiceInfoButton } from "../ui/invoice-info-button"
import { PaymentStatusBox } from "../ui/payment-status-box"

interface OrderCardProps {
  order: {
    id: string
    type: string
    title: string
    date: string
    paymentStatus: PaymentStatus
  }
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="flex h-full w-full shrink rounded-xl bg-slate-100">
      <div className="flex flex-1/2 gap-5 p-6">
        <Image
          src="/images/fallbacks/empty-card-image.png"
          alt="order image"
          width={220}
          height={220}
          className="h-[220px] w-[220px] rounded-md border-2 border-[#cad5e2] object-cover"
        />
        <div className="flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl font-semibold text-black">{order.type}</h4>
            <h3 className="max-w-[250px] text-base font-semibold text-black">{order.title}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-black">
              <span className="font-normal text-slate-600">Date:</span> {order.date}
            </p>
            <p className="text-base font-semibold text-black">
              <span className="font-normal text-slate-600">Order №:</span> {order.id}
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1/2 flex-col justify-between gap-3 p-6">
        <div className="absolute top-0 left-0 block h-full w-1 bg-slate-200" />

        <div className="flex justify-between gap-10">
          <div className="flex shrink-0 grow-0 flex-col gap-3">
            <h4 className="text-2xl font-semibold text-black">Payment Status</h4>
            <PaymentStatusBox status={order.paymentStatus} />
          </div>
          <InvoiceInfoButton />
        </div>

        <div>
          <h4>Cargo Tracking</h4>
          <p>Estimated Delivery: Tue, 24, Jun - Thu, 26, Jun</p>
          <p>
            Code: 1234567890
            <p>Status: Pending</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export { OrderCard }

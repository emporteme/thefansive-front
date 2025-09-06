import Image from "next/image"
import { DeliveryStatusText, InvoiceInfoButton, PaymentStatusBox } from "@/shared/components/widgets"
import { CopyFilled, CopyOutlined, DeliveryTruck as DeliveryTruckIcon } from "@/shared/icons"
import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { copyText } from "@/shared/utils"
import { Tag } from "../ui/tag"
interface OrderCardProps {
  order: {
    id: string
    collection: string
    title: string
    date: string
    paymentStatus: PaymentStatus
    deliveryStatus: DeliveryStatus
    image: string
  }
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="flex h-full w-full shrink rounded-3xl bg-white p-3 pr-5">
      <div className="flex flex-1/2 gap-3">
        <Image
          src={order.image}
          alt="order image"
          width={220}
          height={220}
          className="h-[220px] w-[220px] rounded-md object-cover"
        />
        <div className="flex flex-1 flex-col justify-between gap-3 pr-5">
          <div className="flex max-w-[300px] flex-col gap-2">
            <h4 className="text-xl leading-[1.2] font-semibold text-slate-900">{order.collection}</h4>
            <h3 className="text-sm leading-[1.2] font-semibold text-slate-900">{order.title}</h3>
            <Tag label="Special Collections" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Created Date:</span>
              <Tag label={order.date} />
            </p>
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Order №:</span>
              <Tag
                label={order.id}
                className="text-sm"
                icon={<CopyFilled className="size-3.5" onClick={() => copyText(order.id)} />}
              />
            </p>
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Payment Status:</span>
              <PaymentStatusBox status={order.paymentStatus} />
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1/2 flex-col justify-between gap-3 pl-5">
        <div className="absolute top-0 left-0 block h-full w-[1px] bg-gray-300" />

        <div className="flex justify-between gap-10">
          <div className="flex shrink-0 grow-0 flex-col gap-3">
            <h4 className="text-2xl font-semibold text-black">Payment Status</h4>
            <PaymentStatusBox status={order.paymentStatus} />
          </div>
          <InvoiceInfoButton />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <h4 className="text-2xl font-semibold text-black">Cargo Tracking</h4>
            <DeliveryTruckIcon className="text-dark" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1 text-base font-semibold">
              <span className="text-slate-600">Estimated Delivery:</span>
              <span className="text-slate-900">Tue, 24, Jun - Thu, 26, Jun</span>
            </p>
            <p className="flex items-center gap-1 text-base font-semibold">
              <span className="text-slate-600">Code:</span>
              <span className="text-slate-900">1234567890</span>
              <CopyOutlined className="size-3.5" onClick={() => copyText("1234567890")} />
            </p>
            <p className="flex items-center gap-1 text-base font-semibold">
              <span className="text-slate-600">Status:</span>
              <DeliveryStatusText status={order.deliveryStatus} />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { OrderCard }

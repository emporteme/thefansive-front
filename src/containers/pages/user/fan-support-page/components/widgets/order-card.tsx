import Image from "next/image"
import { Tag } from "@/shared/components/ui"
import { CertificateButton, InvoiceInfoButton, PaymentStatusTag } from "@/shared/components/widgets"
import { DeliveryStatusTag } from "@/shared/components/widgets/delivery-status-tag"
import { Calendar, ContainerTruckFilled, CopyFilled } from "@/shared/icons"
import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { copyText } from "@/shared/utils"
interface OrderCardProps {
  order: {
    id: string
    collection: string
    title: string
    date: string
    paymentStatus: PaymentStatus
    deliveryStatus: DeliveryStatus
    estimatedDelivery: string
    carrier: string
    carrierImage: string
    code: string
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
            <Tag label="Fan Support" />
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
              <PaymentStatusTag status={order.paymentStatus} />
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1/3 flex-col justify-between gap-3 pl-5">
        <div className="absolute top-0 left-0 block h-full w-[1px] bg-gray-300" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <h4 className="text-xl font-semibold text-slate-900">Cargo Tracking</h4>
            <ContainerTruckFilled className="text-slate-600" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Estimated Delivery:</span>
              <Tag label={order.estimatedDelivery} position="left" icon={<Calendar className="size-3.5" />} />
            </p>
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Carrier:</span>
              <Tag
                label={order.carrier}
                position="left"
                image={<Image src={order.carrierImage} alt="image" width={16} height={16} quality={100} />}
              />
            </p>
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Code:</span>
              <Tag label={order.code} icon={<CopyFilled className="size-3.5" onClick={() => copyText(order.code)} />} />
            </p>
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Status:</span>
              <DeliveryStatusTag status={order.deliveryStatus} />
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <CertificateButton type="fan" />
          <InvoiceInfoButton />
        </div>
      </div>
    </div>
  )
}

export { OrderCard }

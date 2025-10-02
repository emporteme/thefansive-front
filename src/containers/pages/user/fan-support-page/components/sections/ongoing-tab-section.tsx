import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { OrderCard } from "../widgets/order-card"

const orders = [
  {
    id: "1234567890",
    date: "10/08/2025",
    collection: "Liverpool Fan Support",
    title: "LFC Signed Gerrard Ball In Case",
    paymentStatus: "paid" as PaymentStatus,
    deliveryStatus: "preparing" as DeliveryStatus,
    estimatedDelivery: "24/06 - 26/06",
    carrier: "DHL",
    carrierImage: "/images/dev/dhl.png",
    code: "1234567890",
    image: "/images/dev/liverpool-fan-ball.png",
  },
  {
    id: "1234567891",
    date: "10/08/2025",
    collection: "AZ Cardinals Fan Support",
    title: "Arizona Cardinals Fan Ring",
    paymentStatus: "paid" as PaymentStatus,
    deliveryStatus: "shipped" as DeliveryStatus,
    estimatedDelivery: "24/06 - 26/06",
    carrier: "DHL",
    carrierImage: "/images/dev/dhl.png",
    code: "1234567891",
    image: "/images/dev/ring-fan.png",
  },
]

const OngoingTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6 rounded-3xl bg-slate-100 px-5 py-7.5">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export { OngoingTabSection }

import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { OrderCard } from "../widgets/order-card"

const orders = [
  {
    id: "1234567899",
    date: "10/08/2025",
    collection: "Inter Miami CF Collection",
    title: "Lionel Messi Pro T-Shirt",
    paymentStatus: "paid" as PaymentStatus,
    deliveryStatus: "delivered" as DeliveryStatus,
    estimatedDelivery: "24/06 - 26/06",
    carrier: "DHL",
    carrierImage: "/images/dev/dhl.png",
    code: "1234567890",
    image: "/images/dev/lionel-messi-pro-t-shirt.png",
  },
  {
    id: "1234567890",
    date: "10/08/2025",
    collection: "F1 Premium Collection",
    title: "Lewis Hamilton Red Cap",
    paymentStatus: "paid" as PaymentStatus,
    deliveryStatus: "preparing" as DeliveryStatus,
    estimatedDelivery: "24/06 - 26/06",
    carrier: "DHL",
    carrierImage: "/images/dev/dhl.png",
    code: "1234567890",
    image: "/images/dev/lewis-hamilton-cap.png",
  },
]

const AllTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6 rounded-3xl bg-slate-100 p-5">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export { AllTabSection }

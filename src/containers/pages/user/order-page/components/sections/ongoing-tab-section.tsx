import { DeliveryStatus, PaymentStatus } from "../models"
import { OrderCard } from "../widgets/order-card"

const orders = [
  {
    id: "1234567890",
    date: "10.08.2025",
    type: "Special collection",
    title: "Michael Schumacher Signed T-Shirt",
    paymentStatus: "paid" as PaymentStatus,
    deliveryStatus: "pending" as DeliveryStatus,
  },
]

const OngoingTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export { OngoingTabSection }

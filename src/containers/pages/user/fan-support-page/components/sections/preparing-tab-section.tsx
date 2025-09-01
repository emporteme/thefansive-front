import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { OrderCard } from "../widgets/order-card"

const orders = [
  {
    id: "1234567890",
    date: "10.08.2025",
    type: "Barcelona Fan SP",
    title: "Special souvenir T-shirt. The maximum number of lines allowed is no more than three.",
    paymentStatus: "paid" as PaymentStatus,
    deliveryStatus: "pending" as DeliveryStatus,
  },
]

const PreparingTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export { PreparingTabSection }

import { OrderCard } from "../widgets/order-card"

const orders = [
  {
    id: "123456789",
    status: "pending",
    date: "10.08.2025",
    type: "Special collection",
    title: "Lionel Messi Signed T-Shirt",
  },
]

const AllTabSection: React.FC = () => {
  return (
    <div className="mt-6 w-full">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export { AllTabSection }

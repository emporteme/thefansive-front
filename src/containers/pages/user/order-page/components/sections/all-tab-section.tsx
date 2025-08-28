import { OrderCard } from "../widgets/order-card"

const orders = [
  {
    id: 1,
    status: "pending",
    date: "2021-01-01",
    total: 100,
  },
]

const AllTabSection: React.FC = () => {
  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export { AllTabSection }

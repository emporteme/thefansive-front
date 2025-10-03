import { FanSupportOrder } from "../../fan-support-page"
import { OrderCard } from "../widgets/order-card"

interface TabSectionProps {
  orders: FanSupportOrder[]
}

const TabSection: React.FC<TabSectionProps> = ({ orders }) => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6 rounded-3xl bg-slate-100 p-5">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export { TabSection }

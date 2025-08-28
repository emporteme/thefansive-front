interface OrderCardProps {
  order: {
    id: number
    status: string
    date: string
    total: number
  }
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{order.status}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">{order.date}</p>
        <p className="text-sm text-gray-500">{order.total}</p>
      </div>
    </div>
  )
}

export { OrderCard }

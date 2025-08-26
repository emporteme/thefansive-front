import React, { FC } from "react"

const StatsWidget: FC = () => {
  const stats = [
    { label: "Пользователи", value: "1,234", change: "+12%" },
    { label: "Доход", value: "$45,678", change: "+8%" },
    { label: "Заказы", value: "567", change: "+15%" },
  ]

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Статистика</h3>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-600">{stat.label}</span>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
              <div className="text-sm text-green-600">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { StatsWidget }

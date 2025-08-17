import React, { FC } from 'react'

const StatsWidget: FC = () => {
  const stats = [
    { label: 'Пользователи', value: '1,234', change: '+12%' },
    { label: 'Доход', value: '$45,678', change: '+8%' },
    { label: 'Заказы', value: '567', change: '+15%' }
  ]

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 text-lg">Статистика</h3>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{stat.label}</span>
            <div className="text-right">
              <div className="font-semibold text-gray-900 text-lg">{stat.value}</div>
              <div className="text-green-600 text-sm">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { StatsWidget }

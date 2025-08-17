import { useEffect, useState } from 'react'
import { StatItem } from '../models'

export const useExampleData = () => {
  const [stats, setStats] = useState<StatItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки данных
    const fetchData = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStats([
        { label: 'Пользователи', value: '1,234', change: '+12%' },
        { label: 'Доход', value: '$45,678', change: '+8%' },
        { label: 'Заказы', value: '567', change: '+15%' }
      ])
      
      setLoading(false)
    }

    fetchData()
  }, [])

  return { stats, loading }
}

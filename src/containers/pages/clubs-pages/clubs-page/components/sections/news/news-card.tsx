import Image from "next/image"
import React from "react"

interface INewsCardProps {
  newsItem: {
    id: number
    status: {
      icon?: React.ReactNode
      label: string
    }
    date: string
    image: string
    name: string
    description: string
  }
}

const NewsCard: React.FC<INewsCardProps> = ({ newsItem }) => {
  return (
    <div
      data-news-id={newsItem.id}
      className="flex cursor-pointer flex-col items-stretch gap-6 rounded-xl bg-white p-3 transition-transform hover:scale-[1.01] md:flex-row"
    >
      <div className="relative aspect-square h-full w-2/5">
        <div className="absolute top-5 left-5 z-100 flex items-center gap-1 rounded-md bg-white px-1.5 py-1 text-xs leading-[16px] font-semibold text-slate-900">
          {newsItem.status.icon && newsItem.status.icon}
          {newsItem.status.label}
        </div>
        <Image
          src={newsItem.image}
          alt={newsItem.name}
          width={220}
          height={220}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="flex w-3/5 flex-col gap-3">
        <p className="text-gray-400">{newsItem.date}</p>
        <h2 className="text-xl font-semibold text-slate-900">{newsItem.name}</h2>
        <p className="text-base leading-[1.1] font-medium text-gray-600">{newsItem.description}</p>
      </div>
    </div>
  )
}

export default NewsCard

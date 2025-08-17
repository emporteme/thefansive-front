import React, { FC, ReactNode } from 'react'

interface ContentCardProps {
  title: string
  children: ReactNode
  className?: string
}

const ContentCard: FC<ContentCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h2 className="mb-4 font-semibold text-gray-900 text-xl">{title}</h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  )
}

export { ContentCard }

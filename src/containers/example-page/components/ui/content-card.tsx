import React, { FC, ReactNode } from "react"

interface ContentCardProps {
  title: string
  children: ReactNode
  className?: string
}

const ContentCard: FC<ContentCardProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`rounded-lg bg-white p-6 shadow-md ${className}`}>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

export { ContentCard }

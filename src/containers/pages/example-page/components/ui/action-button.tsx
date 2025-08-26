"use client"

import React, { FC, ReactNode } from "react"

interface ActionButtonProps {
  children: ReactNode
  onClick: () => void
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
}

const ActionButton: FC<ActionButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center px-4 py-2 border rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantClasses = {
    primary: "border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500",
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </button>
  )
}

export { ActionButton }

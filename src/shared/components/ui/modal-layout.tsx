"use client"

import React, { useEffect } from "react"

interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  disableOverlayClick?: boolean
}

const ModalLayout: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
  closeOnOverlayClick = true,
  disableOverlayClick = false,
}) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      const originalPaddingRight = window.getComputedStyle(document.body).paddingRight
      const originalOverflow = document.body.style.overflow

      document.body.style.paddingRight = `${parseFloat(originalPaddingRight) + scrollbarWidth}px`
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.paddingRight = originalPaddingRight
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget && !disableOverlayClick) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/35 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className={`relative max-h-[90vh] w-auto overflow-y-auto rounded-3xl bg-white shadow-xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export { ModalLayout }

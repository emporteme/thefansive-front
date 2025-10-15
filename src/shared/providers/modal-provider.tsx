"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from "react"

interface ModalContextType {
  openModals: Set<string>
  openModal: (id: string) => void
  closeModal: (id: string) => void
  closeAllModals: () => void
  isModalOpen: (id: string) => boolean
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openModals, setOpenModals] = useState<Set<string>>(new Set())

  const openModal = useCallback((id: string) => {
    setOpenModals((prev) => new Set([...prev, id]))
  }, [])

  const closeModal = useCallback((id: string) => {
    setOpenModals((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }, [])

  const closeAllModals = useCallback(() => {
    setOpenModals(new Set())
  }, [])

  const isModalOpen = useCallback(
    (id: string) => {
      return openModals.has(id)
    },
    [openModals]
  )

  // Блокируем скролл body когда есть открытые модальные окна
  useEffect(() => {
    if (openModals.size > 0) {
      const previousHtmlOverflow = document.documentElement.style.overflow
      const previousBodyOverflow = document.body.style.overflow

      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"

      return () => {
        document.documentElement.style.overflow = previousHtmlOverflow
        document.body.style.overflow = previousBodyOverflow
      }
    }
  }, [openModals.size])

  // Закрываем модальные окна при нажатии Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && openModals.size > 0) {
        closeAllModals()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [openModals.size])

  const value: ModalContextType = {
    openModals,
    openModal,
    closeModal,
    closeAllModals,
    isModalOpen,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

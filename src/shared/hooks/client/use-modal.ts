import { useCallback, useState } from "react"
import { useModal as useModalContext } from "@/shared/providers/modal-provider"

export const useModal = (modalId: string) => {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal, closeModal } = useModalContext()

  const open = useCallback(() => {
    setIsOpen(true)
    openModal(modalId)
  }, [modalId, openModal])

  const close = useCallback(() => {
    setIsOpen(false)
    closeModal(modalId)
  }, [modalId, closeModal])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()
    } else {
      open()
    }
  }, [isOpen, open, close])

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}

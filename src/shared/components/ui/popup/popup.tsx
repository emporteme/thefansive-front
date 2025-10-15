import React, { useEffect } from "react"
import { useModal } from "@/shared/providers/modal-provider"

type PopupProps = {
  children: React.ReactNode
  open: boolean
  modalId: string
  onClose?: () => void
}

const Popup: React.FC<PopupProps> = ({ children, open, modalId, onClose }) => {
  const { openModal, closeModal } = useModal()

  useEffect(() => {
    if (open) {
      openModal(modalId)
    } else {
      closeModal(modalId)
    }

    return () => {
      closeModal(modalId)
    }
  }, [open, modalId, openModal, closeModal])

  // Закрытие при клике на backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose()
    }
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="address-modal-title"
          onClick={handleBackdropClick}
        >
          <div className="flex w-full max-w-[800px] flex-col gap-6">{children}</div>
        </div>
      )}
    </>
  )
}

export { Popup, type PopupProps }

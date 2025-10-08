"use client"

import React from "react"
import Logo from "@/shared/components/elements/logo"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { getRoutes } from "@/shared/utils/get-routes"
import { CloseButton } from "./ui/close-button"
import { ModalLayout } from "../../ui/modal-layout"

interface AuthModalProps {
  children: React.ReactNode
  onClose?: () => void
  isOpen: boolean
}

const AuthModal: React.FC<AuthModalProps> = ({ children, onClose, isOpen }) => {
  const navigate = useNavigate()
  const routes = getRoutes()

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      navigate(routes.home())
    }
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={handleClose}
      className="relative !w-[680px] !max-w-[680px] flex-col rounded-3xl !bg-white px-6 pt-8"
    >
      <div className="absolute top-[14px] right-[24px]">
        <CloseButton onClick={handleClose} />
      </div>
      <Logo className="w-[145px]" />
      {children}
    </ModalLayout>
  )
}

export default AuthModal

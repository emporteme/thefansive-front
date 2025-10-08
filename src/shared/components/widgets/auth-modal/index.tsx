"use client"

import React, { useState } from "react"
import Logo from "@/shared/components/elements/logo"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { getRoutes } from "@/shared/utils/get-routes"
import LoginSection from "./sections/login-section"
import SignUpSection from "./sections/signup-section"
import type { AuthModalMode } from "./types"
import { CloseButton } from "./ui/close-button"
import { ModalLayout } from "../../ui/modal-layout"

interface AuthModalProps {
  onClose?: () => void
  isOpen: boolean
  initialMode?: AuthModalMode
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, isOpen, initialMode = "login" }) => {
  const navigate = useNavigate()
  const routes = getRoutes()
  const [mode, setMode] = useState<AuthModalMode>(initialMode)

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      navigate(routes.home())
    }
  }

  const renderSection = () => {
    switch (mode) {
      case "login":
        return <LoginSection onModeChange={setMode} />
      case "signup":
        return <SignUpSection onModeChange={setMode} />
      default:
        return <LoginSection onModeChange={setMode} />
    }
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={handleClose}
      className="relative !w-[680px] !max-w-[680px] flex-col rounded-3xl !bg-white px-6 pt-8 pb-8"
    >
      <div className="absolute top-[14px] right-[24px]">
        <CloseButton onClick={handleClose} />
      </div>
      <Logo className="w-[145px]" />
      {renderSection()}
    </ModalLayout>
  )
}

export default AuthModal

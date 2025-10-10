"use client"

import React, { useState } from "react"
import Logo from "@/shared/components/elements/logo"
import ForgotPasswordSection from "./sections/forgot-password-section"
import LoginSection from "./sections/login-section"
import ResetPasswordSection from "./sections/reset-password-section"
import SignUpSection from "./sections/signup-section"
import SignUpSuccessSection from "./sections/signup-success-section"
import type { AuthModalMode } from "./types"
import { CloseButton } from "./ui/close-button"
import { ModalLayout } from "../../ui/modal-layout"

interface AuthModalProps {
  onClose?: () => void
  isOpen: boolean
  initialMode?: AuthModalMode
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, isOpen, initialMode = "login" }) => {
  const [mode, setMode] = useState<AuthModalMode>(initialMode)

  const handleClose = () => {
    onClose?.()
    setMode(initialMode)
  }

  const renderSection = () => {
    switch (mode) {
      case "login":
        return <LoginSection onModeChange={setMode} closeModal={handleClose} />
      case "signup":
        return <SignUpSection onModeChange={setMode} />
      case "signup-success":
        return <SignUpSuccessSection onModeChange={setMode} />
      case "forgot-password":
        return <ForgotPasswordSection onModeChange={setMode} />
      case "reset-password":
        return <ResetPasswordSection onModeChange={setMode} />
      default:
        return <LoginSection onModeChange={setMode} closeModal={handleClose} />
    }
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={handleClose}
      disableOverlayClick
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

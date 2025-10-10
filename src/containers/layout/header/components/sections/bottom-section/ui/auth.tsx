import React, { useState } from "react"
import AuthModal from "@/shared/components/widgets/auth-modal"
import { Auth as AuthIcon } from "@/shared/icons"

const Auth: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleAuth = () => {
    setIsOpenModal(true)
  }

  const handleClose = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <AuthModal isOpen={isOpenModal} onClose={handleClose} initialMode="forgot-password-code" />
      <div
        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 lg:px-4"
        onClick={handleAuth}
      >
        <p className="hidden font-semibold lg:block">Login</p>
        <AuthIcon className="h-5 w-5" />
      </div>
    </>
  )
}

export default Auth

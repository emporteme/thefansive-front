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
      <AuthModal isOpen={isOpenModal} onClose={handleClose} initialMode="login" />
      <div
        className="rounded-2lg flex h-12 cursor-pointer items-center gap-2.5 px-4 py-3 leading-[1.5] tracking-[0] text-gray-700 transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 lg:px-4"
        onClick={handleAuth}
      >
        <p className="hidden font-semibold lg:block">Login</p>
        <AuthIcon className="h-5 w-5 text-gray-800" />
      </div>
    </>
  )
}

export default Auth

import React, { useState } from "react"
import { Button } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import AuthModal from "@/shared/components/widgets/auth-modal"
import { ArrowRightSmallRound } from "@/shared/icons"

const BecomeMember: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleSignUp = () => {
    setIsOpenModal(true)
  }

  const handleClose = () => {
    setIsOpenModal(false)
  }

  return (
    <div className="bg-[#007BC6] text-white">
      <AuthModal isOpen={isOpenModal} onClose={handleClose} initialMode="signup" />
      <ContainerLayout className="flex items-center justify-center gap-7.5 py-10">
        <h3 className="tracing-[-1px] text-2xl font-bold">Become a Member & Unlock Exclusives</h3>
        <Button
          size="md"
          className="h-11 gap-0 bg-[#FF0000] !px-10 !pr-9 text-base font-extrabold uppercase active:bg-[#FF0000]/80"
          onClick={handleSignUp}
        >
          Sign Up
          <ArrowRightSmallRound className="size-5" />
        </Button>
      </ContainerLayout>
    </div>
  )
}

export default BecomeMember

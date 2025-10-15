import React from "react"
import { Cancel } from "@/shared/icons"
import { Button } from "../button"

type PopupHeaderProps = {
  children: string | React.ReactNode
  onClose: () => void
}

const PopupHeader: React.FC<PopupHeaderProps> = ({ children, onClose }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 id="address-modal-title" className="text-[28px] leading-6 font-semibold">
        {children}
      </h2>
      <Button size="icon" variant="ghost" onClick={onClose} className="flex items-center justify-center">
        <Cancel className="text-slate-700" />
      </Button>
    </div>
  )
}

export { PopupHeader, type PopupHeaderProps }

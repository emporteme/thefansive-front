import React from "react"
import Check from "@/shared/icons/check"

type CheckboxProps = {
  id: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isChecked?: boolean
  children: React.ReactNode
}

const Checkbox: React.FC<CheckboxProps> = ({ id, children, onChange, isChecked, className }) => {
  return (
    <label htmlFor={id} className={`relative flex w-fit cursor-pointer ${className}`}>
      <input id={id} type="checkbox" className="sr-only" checked={isChecked} onChange={onChange} />
      <div
        className={`flex h-[18px] w-[18px] flex-none items-center justify-center rounded-sm border-2 border-slate-900 ${
          isChecked ? "bg-slate-900" : "bg-white"
        } transition-all duration-200`}
      >
        <Check
          className={`h-2 w-3 text-white ${isChecked ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
        />
      </div>
      {children}
    </label>
  )
}

export default Checkbox

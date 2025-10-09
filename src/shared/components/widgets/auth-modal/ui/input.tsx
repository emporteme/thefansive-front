import React, { SVGProps, useState } from "react"
import { cn } from "@/shared/lib"

interface InputProps {
  label: string
  LeftIcon?: React.FC<SVGProps<SVGSVGElement>>
  RightIcon?: React.FC<SVGProps<SVGSVGElement>>
  placeholder: string
  type: string
  onRightIconClick?: () => void
}

export const Input = ({ label, LeftIcon, RightIcon, placeholder, type, onRightIconClick }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="pl-1 text-base font-semibold text-slate-900">{label}</label>
      <div className="relative text-slate-400">
        {LeftIcon && (
          <div
            className={cn("pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4", {
              "text-slate-900": isFocused,
            })}
          >
            <LeftIcon
              className={cn("h-5 w-5 text-slate-400", {
                "text-slate-900": isFocused,
              })}
            />
          </div>
        )}
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type}
          placeholder={placeholder}
          className={cn(
            "rounded-2lg block w-full border border-slate-300 bg-white py-3 text-lg font-medium text-slate-900 transition-all duration-200 placeholder:text-slate-400",
            {
              "border-slate-900 outline-none": isFocused,
              "pl-12": LeftIcon,
              "pr-12": RightIcon,
            }
          )}
        />
        {RightIcon && (
          <div
            className={cn("pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-4", {
              "cursor-pointer": onRightIconClick,
            })}
            onClick={onRightIconClick}
          >
            <RightIcon
              className={cn("h-5 w-5 text-slate-400", {
                "text-slate-900": isFocused,
              })}
            />
          </div>
        )}
      </div>
    </div>
  )
}

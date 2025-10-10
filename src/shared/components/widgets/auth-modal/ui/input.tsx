import React, { SVGProps, useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import { cn } from "@/shared/lib"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  LeftIcon?: React.FC<SVGProps<SVGSVGElement>>
  RightIcon?: React.FC<SVGProps<SVGSVGElement>>
  placeholder: string
  type: string
  onRightIconClick?: () => void
  error?: string
  register?: UseFormRegisterReturn
}

export const Input = ({
  label,
  LeftIcon,
  RightIcon,
  placeholder,
  type,
  onRightIconClick,
  error,
  register,
  ...props
}: InputProps) => {
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
            className={cn("pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-4", {
              "text-slate-900": isFocused || error,
            })}
          >
            <LeftIcon
              className={cn("h-5 w-5 text-slate-400", {
                "text-slate-900": isFocused || error,
              })}
            />
          </div>
        )}
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...register}
          {...props}
          type={type}
          placeholder={placeholder}
          className={cn(
            "rounded-2lg block h-12 w-full border bg-white py-3 text-lg font-medium text-slate-900 transition-all duration-200 placeholder:text-slate-400",
            {
              "border-slate-300": !error && !isFocused,
              "border-slate-900 outline-none": isFocused && !error,
              "border-red-600 shadow-[0_0_0_4px_rgba(255,224,224,1),0_2px_4px_0_rgba(17,12,34,0.12)] outline-none":
                error,
              "pl-12": LeftIcon,
              "pl-4": !LeftIcon,
              "pr-12": RightIcon,
              "pr-4": !RightIcon,
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
                "text-slate-900": isFocused && !error,
              })}
            />
          </div>
        )}
      </div>
      {error && <p className="pt-0.5 pl-1 text-sm leading-[24px] font-semibold text-red-600">{error}</p>}
    </div>
  )
}

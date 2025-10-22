import React, { HTMLInputTypeAttribute } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type InputProps = {
  id?: string
  label?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  className?: string
  required?: boolean
  error?: boolean
  errorMessage?: string
  registerProps?: UseFormRegisterReturn
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  className = "",
  required,
  error = false,
  errorMessage,
  registerProps,
  value,
  onChange,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const inputClasses = `
    focus:shadow-outline text-md w-full appearance-none rounded-[12px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
    border ${error ? "border-red-500" : "border-slate-100"}
    bg-white py-3 text-base font-medium
    placeholder-slate-400 focus:outline-none focus:border-blue-500 ${className}
  `

  const getPaddingClasses = () => {
    if (leftIcon && rightIcon) {
      return "px-10"
    } else if (leftIcon) {
      return "pl-10 pr-4"
    } else if (rightIcon) {
      return "pl-4 pr-10"
    } else {
      return "px-4"
    }
  }

  return (
    <div>
      {label && (
        <label htmlFor={id ?? undefined} className="mb-2 block ps-1 text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute top-1/2 left-3 z-1 -translate-y-1/2 transform text-gray-400">{leftIcon}</div>
        )}
        <input
          type={type}
          id={id ?? undefined}
          placeholder={placeholder}
          className={`${inputClasses} ${getPaddingClasses()}`}
          required={required}
          {...registerProps}
          value={value}
          onChange={onChange}
          {...props}
        />
        {rightIcon && (
          <div className="absolute top-1/2 right-3 z-1 -translate-y-1/2 transform text-gray-400">{rightIcon}</div>
        )}
      </div>
      {error && errorMessage && <p className="mt-1 ps-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default Input

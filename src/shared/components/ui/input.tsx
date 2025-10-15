import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type InputProps = {
  id: string
  label?: string
  type?: string
  placeholder?: string
  className?: string
  required?: boolean
  error?: boolean
  errorMessage?: string
  registerProps?: UseFormRegisterReturn
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
  ...props
}) => {
  const inputClasses = `
    focus:shadow-outline text-md w-full appearance-none rounded-[12px]
    border ${error ? "border-red-500" : "border-slate-100"}
    bg-white px-4 py-3 text-base font-medium
    placeholder-slate-400 focus:outline-none focus:border-blue-500 ${className}
  `

  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-2 block ps-1 text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
        {...registerProps}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && errorMessage && <p className="mt-1 ps-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default Input

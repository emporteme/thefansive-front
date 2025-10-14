import * as Select from "@radix-ui/react-select"
import classNames from "classnames"
import React from "react"
import ArrowDown from "@/shared/icons/arrow-down"
import ChevronUp from "@/shared/icons/chevron-up"

export type OptionType = {
  key?: string | number
  value: string
  label: string
  flag?: string
}

interface RadixSelectProps extends Omit<Select.SelectProps, "onValueChange"> {
  label?: string
  id?: string
  required?: boolean
  error?: boolean
  errorMessage?: string
  options: OptionType[]
  placeholder?: string
  className?: string
  variant?: "default" | "left" | "right"
  onValueChange?: (value: string) => void
  onChange?: (event: { target: { value: string } }) => void
}

const RadixSelect: React.FC<RadixSelectProps> = ({
  label,
  id,
  required,
  error,
  errorMessage,
  options,
  placeholder,
  className = "",
  value,
  onValueChange,
  onChange,
  variant = "default",
  ...props
}) => {
  const triggerClasses = classNames(
    `focus:shadow-outline flex h-[48px] w-full items-center justify-between bg-white px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 focus:outline-none`,
    {
      "rounded-[12px] border": variant === "default",
      "border-red-500": error,
      "border-slate-100 focus:border-blue-500": !error && variant === "default",

      "rounded-l-[12px] after:h-[50%] after:my-auto after:w-[1px] after:bg-slate-100 relative after:absolute after:right-0":
        variant === "left",
      "rounded-r-[12px] after:h-[50%] after:w-[1px] after:my-auto after:bg-slate-100 after:absolute after:left-0":
        variant === "right",
    }
  )

  const selectedOption = options.find((opt) => opt.value === value)

  const handleValueChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue)
    }
    if (onChange) {
      onChange({ target: { value: newValue } })
    }
  }

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-2 block ps-1 text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <Select.Root value={value} onValueChange={handleValueChange} {...props}>
        <Select.Trigger id={id} className={triggerClasses} aria-label={label || placeholder}>
          <Select.Value placeholder={<span className="text-slate-400">{placeholder}</span>}>
            {selectedOption?.flag && <span className="mr-2 text-xl">{selectedOption.flag}</span>}
            <span className="font-semibold">{selectedOption?.label || placeholder}</span>
          </Select.Value>
          <Select.Icon className="ml-2">
            <ArrowDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="z-[9999] overflow-hidden rounded-[12px] bg-white shadow-lg"
            position="popper"
            sideOffset={5}
          >
            <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white">
              <ChevronUp />
            </Select.ScrollUpButton>

            <Select.Viewport className="max-h-[50vh] p-1">
              {options.map((option, index) => {
                return (
                  <Select.Item
                    key={`${option.key ?? option.value}-${index}`}
                    value={option.value}
                    className="relative flex h-[35px] cursor-pointer items-center rounded-md pr-[35px] pl-[25px] text-base font-medium text-gray-800 select-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-100 data-[highlighted]:text-blue-700 data-[highlighted]:outline-none data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-700"
                  >
                    <Select.ItemText>
                      <div className="flex items-center gap-2">
                        {option.flag && <span className="text-xl">{option.flag}</span>}
                        <span>{option.label}</span>
                      </div>
                    </Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center"></Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Viewport>

            <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white">
              <ArrowDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {error && errorMessage && <p className="mt-1 ps-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default RadixSelect

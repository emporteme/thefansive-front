"use client"

import * as SwitchRadix from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/shared/lib/utils"

const switchRootVariants = cva(
  "relative flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:ring-4 focus:ring-gray-200",
      },
      size: {
        lg: "h-7 w-11",
        md: "h-6 w-10",
        sm: "h-5 w-9",
        xs: "h-4 w-7",
      },
      checked: {
        true: "bg-slate-900",
        false: "bg-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
      checked: false,
    },
  }
)

const switchThumbVariants = cva("block rounded-full bg-white transition-transform duration-200 will-change-transform", {
  variants: {
    size: {
      lg: "h-6 w-6",
      md: "h-5 w-5",
      sm: "h-4 w-4",
      xs: "h-3 w-3",
    },
    checked: {
      true: "",
      false: "translate-x-0.5",
    },
  },
  compoundVariants: [
    { size: "lg", checked: true, class: "translate-x-4.5" },
    { size: "md", checked: true, class: "translate-x-4" },
    { size: "sm", checked: true, class: "translate-x-4" },
    { size: "xs", checked: true, class: "translate-x-3" },
  ],
  defaultVariants: {
    size: "lg",
    checked: false,
  },
})

const switchLabelVariants = cva("leading-6 font-bold text-slate-900", {
  variants: {
    size: {
      lg: "text-lg",
      md: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

const switchCaptionVariants = cva("leading-4 text-slate-600", {
  variants: {
    size: {
      lg: "text-sm",
      md: "text-xs",
      sm: "text-xs",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

interface SwitchProps extends VariantProps<typeof switchRootVariants> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  caption?: string
  className?: string
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked = false, onCheckedChange, disabled = false, label, caption, className, variant, size }, ref) => {
    return (
      <div className={cn("flex items-start gap-3", className)}>
        <SwitchRadix.Root
          ref={ref}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={switchRootVariants({ variant, size, checked })}
        >
          <SwitchRadix.Thumb className={switchThumbVariants({ size, checked })} />
        </SwitchRadix.Root>

        {(label || caption) && (
          <div className="flex flex-col gap-0.5">
            {label && <span className={switchLabelVariants({ size })}>{label}</span>}
            {caption && <span className={switchCaptionVariants({ size })}>{caption}</span>}
          </div>
        )}
      </div>
    )
  }
)

Switch.displayName = "Switch"

export { Switch, switchRootVariants, switchThumbVariants, switchLabelVariants, switchCaptionVariants }

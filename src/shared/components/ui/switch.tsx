"use client"

import * as SwitchRadix from "@radix-ui/react-switch"
import React from "react"
import { cn } from "@/shared/lib/utils"

interface SwitchProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  caption?: string
  className?: string
  variant?: "default"
  size?: "lg" | "md" | "sm" | "xs"
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onCheckedChange,
  disabled = false,
  label,
  caption,
  className,
  variant = "default",
  size = "lg",
}) => {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <SwitchRadix.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={cn(
          "relative h-7 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:ring-gray-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          {
            "bg-slate-900 focus:ring-4": variant === "default" && checked,
            "bg-gray-200": variant === "default" && !checked,
          }
        )}
      >
        <SwitchRadix.Thumb
          className={cn("block h-6 w-6 rounded-full bg-white transition-transform duration-200 will-change-transform", {
            "translate-x-4.5": checked,
            "translate-x-0.5": !checked,
          })}
        />
      </SwitchRadix.Root>

      {(label || caption) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <span
              className={cn("leading-6 font-bold text-slate-900", {
                "text-xs": size === "xs",
                "text-sm": size === "sm",
                "text-base": size === "md",
                "text-lg": size === "lg",
              })}
            >
              {label}
            </span>
          )}
          {caption && (
            <span
              className={cn("leading-4 text-slate-600", {
                "text-xs": size === "xs" || size === "sm" || size === "md",
                "text-sm": size === "lg",
              })}
            >
              {caption}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export { Switch }

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/shared/lib/utils"

const buttonVariants = cva(
  "inline-flex justify-center self-center cursor-pointer items-center gap-2 disabled:opacity-50 aria-invalid:border-destructive focus-visible:border-ring rounded-md outline-none aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 font-semibold text-sm whitespace-nowrap transition-all [&_svg]:pointer-events-none disabled:pointer-events-none shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-primary-foreground hover:bg-slate-700 disabled:bg-slate-100 disabled:text-slate-400",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background  hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-white text-slate-700 hover:bg-slate-50",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-6 hover:underline",
        light:
          "text-slate-700 bg-white hover:text-white hover:bg-slate-900 active:text-white active:bg-slate-900 focus:text-white focus:bg-slate-900",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 rounded-sm gap-1.5 px-2 text-xs has-[>svg]:px-2",
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-3",
        md: "h-10 rounded-md gap-2 px-6 text-sm has-[>svg]:px-3",
        lg: "h-12 rounded-2lg gap-2.5 px-6 text-base has-[>svg]:px-4",
        xl: "h-13.5 rounded-2lg gap-3 px-4 text-lg has-[>svg]:px-4.5",
        icon: "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }

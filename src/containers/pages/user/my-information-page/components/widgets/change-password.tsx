"use client"

import React from "react"
import { cn } from "@/shared/lib/utils"
import { TextField } from "../ui/text-field"

interface ChangePasswordProps {
  className?: string
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-between gap-6 rounded-3xl bg-slate-100 p-7.5", className)}>
      <TextField label="Name" placeholder="This name is required to confirm orders." value="" />
      <TextField label="Username" placeholder="This name will be visible to other members" value="" />
    </div>
  )
}

export { ChangePassword }

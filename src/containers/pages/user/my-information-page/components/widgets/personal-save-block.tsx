"use client"

import React from "react"
import { Button } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

interface PersonalSaveBlockProps {
  className?: string
  onSave?: () => void
}

const PersonalSaveBlock: React.FC<PersonalSaveBlockProps> = ({ className, onSave }) => {
  return (
    <div className={cn("flex items-center justify-between gap-2.5 rounded-3xl bg-slate-100 p-7.5", className)}>
      <p className="flex-1 text-base leading-[1.5] font-medium text-slate-600">
        Please check the data and if everything is correct, save the changes.
      </p>

      <Button onClick={onSave} size="lg" className="w-45">
        Save
      </Button>
    </div>
  )
}

export { PersonalSaveBlock }

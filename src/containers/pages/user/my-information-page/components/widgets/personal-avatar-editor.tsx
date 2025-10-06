"use client"

import Image from "next/image"
import React, { useState } from "react"
import { Button, Switch } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

interface PersonalAvatarEditorProps {
  className?: string
}

const PersonalAvatarEditor: React.FC<PersonalAvatarEditorProps> = ({ className }) => {
  const [isPublicProfile, setIsPublicProfile] = useState(false)

  const handleUploadPhoto = () => {
    // TODO: Implement photo upload functionality
    console.log("Upload photo clicked")
  }

  const handleRemovePhoto = () => {
    // TODO: Implement photo deletion functionality
    console.log("Delete photo clicked")
  }

  return (
    <div className={cn("flex items-center gap-6 rounded-3xl bg-slate-100 p-7.5", className)}>
      <div className="flex flex-1 items-center gap-5">
        <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src="/images/dev/user-image.png"
            alt="User avatar"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Button
            onClick={handleUploadPhoto}
            className="h-10 gap-2 rounded-lg bg-slate-900 px-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Upload
          </Button>

          <Button
            onClick={handleRemovePhoto}
            variant="outline"
            className="h-10 gap-2 rounded-lg border-0 bg-slate-200 px-3 text-sm font-medium text-slate-700 hover:bg-slate-300"
          >
            Remove
          </Button>
        </div>
      </div>

      <Switch
        className="max-w-[370px]"
        checked={isPublicProfile}
        onCheckedChange={setIsPublicProfile}
        label="Show profile pictures"
        caption="Your photo will be visible to everyone if you enable this option."
      />
    </div>
  )
}

export { PersonalAvatarEditor }

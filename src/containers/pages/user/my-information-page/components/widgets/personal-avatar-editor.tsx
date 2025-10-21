"use client"

import React, { useState } from "react"
import { Button, CachedImage, Switch } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

interface PersonalAvatarEditorProps {
  className?: string
}

const PersonalAvatarEditor: React.FC<PersonalAvatarEditorProps> = ({ className }) => {
  const [isPublicProfile, setIsPublicProfile] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState<string>("/images/dev/user-image.png")
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleUploadPhoto = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (!file.type.startsWith("image/")) {
        console.error("Please select an image file")
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        if (result) {
          setAvatarUrl(result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setAvatarUrl("/images/dev/user-image.png")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={cn("flex items-center justify-between gap-6 rounded-3xl bg-slate-100 p-7.5", className)}>
      <div className="flex flex-1 items-center gap-5">
        <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-full">
          <CachedImage
            src={avatarUrl}
            alt="User avatar"
            width={100}
            height={100}
            className="h-full w-full object-contain"
            quality={100}
          />
        </div>

        <div className="flex flex-col gap-5">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            aria-label="Upload profile picture"
          />

          <Button onClick={handleUploadPhoto} size="md">
            Upload
          </Button>

          <Button onClick={handleRemovePhoto} size="md" variant="secondary">
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

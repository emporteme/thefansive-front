"use client"

import Image from "next/image"
import { FC } from "react"

const Loading: FC = () => {
  return (
    <div className="bg-background fixed inset-0 z-50 flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="from-primary/5 to-primary/10 absolute inset-0 bg-gradient-to-br via-transparent" />

      {/* Main loading container */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Logo with animation */}
        <div className="relative">
          {/* Pulse ring animation */}
          <div className="bg-primary/20 absolute inset-0 animate-ping rounded-full" />
          <div className="bg-primary/10 absolute inset-0 animate-pulse rounded-full" />

          {/* Logo container */}
          <div className="bg-background/80 border-border/50 relative z-10 flex h-40 w-40 items-center justify-center rounded-full border p-4 shadow-2xl backdrop-blur-sm sm:p-6">
            <Image
              src="/logo.svg"
              alt="TheFansive Logo"
              width={140}
              height={30}
              className="h-auto object-contain sm:w-35"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading

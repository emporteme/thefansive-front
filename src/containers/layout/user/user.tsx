"use client"

import Image from "next/image"
import React from "react"
import { SidebarSection } from "./components/sections"

interface UserLayoutProps {
  children: React.ReactNode
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="h-9vw mt-7.5 mb-18 w-full border-t border-b border-[#cad5e2]">
        <Image
          src="/images/fallbacks/user-empty-banner.webp"
          alt="user banner"
          width={1500}
          height={160}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mr-[100px] mb-[100px] ml-[100px] flex gap-8">
        <SidebarSection />
        {children}
      </div>
    </div>
  )
}

export default UserLayout

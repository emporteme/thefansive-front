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
      <div className="h-9vw mt-7.5 mb-18 max-w-[1240px] border-t border-b border-[#cad5e2]">
        <Image
          src="/images/fallbacks/user-empty-banner.webp"
          alt="user banner"
          width={1500}
          height={160}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto flex max-w-[1440px] gap-8 pr-[100px] pb-[100px] pl-[100px]">
        <SidebarSection />
        {children}
      </div>
    </div>
  )
}

export default UserLayout

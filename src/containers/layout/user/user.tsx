"use client"

import Image from "next/image"
import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"
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
      <ContainerLayout>
        <div className="flex gap-8 pb-25">
          <SidebarSection />
          {children}
        </div>
      </ContainerLayout>
    </div>
  )
}

export default UserLayout

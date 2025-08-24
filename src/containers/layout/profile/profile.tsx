import React from "react"
import { SidebarSection } from "./components/sections"

interface ProfileLayoutProps {
  children: React.ReactNode
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-7 mb-16 flex h-[160px] w-full items-center justify-center bg-gray-200">Image</div>
      <div className="mr-15 ml-9 flex gap-6">
        <SidebarSection />
        {children}
      </div>
    </div>
  )
}

export default ProfileLayout

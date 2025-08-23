
import React from "react"
import { SidebarSection } from "./components/sections"

interface ProfileLayoutProps {
  children: React.ReactNode
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mb-16 mt-7 w-full bg-gray-200 h-[160px]">
        Image
      </div>
      <div className="flex gap-6 ml-9 mr-15">
        <SidebarSection />
        <div className="flex flex-col w-full bg-gray-200">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout

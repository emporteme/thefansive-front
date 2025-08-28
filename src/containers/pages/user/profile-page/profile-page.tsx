"use client"

import { DashboardSection } from "./components/sections/dashboard-section"
import { FavoriteSection } from "./components/sections/favorite-section"

const ProfilePage: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <DashboardSection />
      <FavoriteSection />
    </div>
  )
}

export default ProfilePage

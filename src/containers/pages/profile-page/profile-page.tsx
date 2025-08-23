"use client"

import ProfileLayout from "@/containers/layout/profile/profile"

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileLayout>
        <div>Profile</div>
      </ProfileLayout>
    </div>
  )
}

export default ProfilePage

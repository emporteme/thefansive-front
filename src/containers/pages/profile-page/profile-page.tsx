"use client"

import ProfileLayout from "@/containers/layout/profile/profile"

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileLayout>
        <div className="flex flex-col w-full bg-gray-200 rounded-xl p-4">
          <div className="flex flex-col">
            Profile page
          </div>
        </div>
      </ProfileLayout>
    </div>
  )
}

export default ProfilePage

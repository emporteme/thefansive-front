"use client"

import ProfileLayout from "@/containers/layout/profile/profile"

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileLayout>
        <div className="flex w-full flex-col rounded-xl bg-gray-200 p-4">
          <div className="flex flex-col">Profile page</div>
        </div>
      </ProfileLayout>
    </div>
  )
}

export default ProfilePage

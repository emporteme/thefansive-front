"use client"

import React, { FC } from "react"
import { LogoWidget } from "../widgets/logo-widget"
import { NavigationWidget } from "../widgets/navigation-widget"
import { UserProfileWidget } from "../widgets/user-profile-widget"

const HeaderSection: FC = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <LogoWidget />
          <NavigationWidget />
          <UserProfileWidget />
        </div>
      </div>
    </header>
  )
}

export { HeaderSection }

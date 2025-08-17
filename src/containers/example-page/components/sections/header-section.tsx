"use client"

import React, { FC } from 'react'
import { LogoWidget } from '../widgets/logo-widget'
import { NavigationWidget } from '../widgets/navigation-widget'
import { UserProfileWidget } from '../widgets/user-profile-widget'

const HeaderSection: FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <LogoWidget />
          <NavigationWidget />
          <UserProfileWidget />
        </div>
      </div>
    </header>
  )
}

export { HeaderSection }

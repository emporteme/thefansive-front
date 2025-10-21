"use client"

import { FC, ReactElement } from "react"
import UserLayout from "@/containers/layout/user/user"

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return <UserLayout>{children}</UserLayout>
}

export default Layout

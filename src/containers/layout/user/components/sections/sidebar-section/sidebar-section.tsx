"use client"

import { Links, User } from "./ui"

const SidebarSection: React.FC = () => {
  return (
    <div className="flex min-w-[310px] flex-col rounded-xl bg-slate-100 p-4">
      <User />
      <Links />
    </div>
  )
}

export default SidebarSection

"use client"

import { Links, User } from "./ui"

const SidebarSection: React.FC = () => {
  return (
    <div className="flex min-w-[310px] flex-col self-start rounded-3xl bg-slate-100 p-5">
      <User />
      <Links />
    </div>
  )
}

export default SidebarSection

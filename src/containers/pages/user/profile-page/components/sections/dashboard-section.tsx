"use client"

import React, { FC } from "react"
import { ConnectWallet } from "../widgets/connect-wallet"
import { MyCertificates } from "../widgets/my-certificates"

type UserInfo = {
  points: number
  fanSupport: number
  donation: number
  completedTasks: number
}

const dashboardItems = (user: UserInfo) => [
  {
    id: "my-points",
    title: "My Points",
    value: user.points,
  },
  {
    id: "fan-support",
    title: "Fan Support",
    value: user.fanSupport,
  },
  {
    id: "donation",
    title: "Donation",
    value: user.donation,
  },
  {
    id: "completed-tasks",
    title: "Completed\nTasks",
    value: user.completedTasks,
  },
]

const DashboardSection: FC = () => {
  const user = {
    points: 250,
    fanSupport: 3,
    donation: 2,
    completedTasks: 4,
  }

  return (
    <div className="flex w-full items-start justify-between gap-8">
      <div className="flex flex-1 flex-wrap gap-x-3.5 gap-y-3 rounded-xl bg-slate-100 p-5">
        {dashboardItems(user).map((item) => (
          <div
            key={item.title}
            className="flex min-h-[120px] min-w-[155px] flex-1 flex-col justify-between gap-5 rounded-xl bg-white p-5"
          >
            <span className="text-sm leading-[1.2] font-medium whitespace-pre-line text-slate-600">{item.title}</span>
            <span className="flex justify-start text-2xl font-semibold text-slate-900">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <ConnectWallet />
        <MyCertificates />
      </div>
    </div>
  )
}

export { DashboardSection }

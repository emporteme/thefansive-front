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
    title: "Completed Tasks",
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
    <div className="flex w-full justify-between rounded-xl bg-slate-100 p-6">
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {dashboardItems(user).map((item) => (
          <div
            key={item.title}
            className="flex min-w-[230px] flex-col justify-between gap-6 rounded-xl border-b border-slate-200 bg-white p-5"
          >
            <span className="text-base font-medium text-slate-600">{item.title}</span>
            <span className="flex justify-end text-3xl font-semibold text-slate-900">{item.value}</span>
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

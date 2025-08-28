"use client"

import React, { FC } from "react"
import { cn } from "@/shared/lib/utils"
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
    fanSupport: 100,
    donation: 50,
    completedTasks: 10,
  }

  return (
    <div className="flex w-full justify-between rounded-xl bg-slate-100 p-6 pb-15.5">
      <div className="mx-4 mt-2.5 flex flex-col gap-3">
        {dashboardItems(user).map((item) => (
          <div
            key={item.title}
            className={cn("flex min-w-[490px] justify-between border-b border-slate-200 pb-3", {
              "border-b-transparent": item.id === "completed-tasks",
            })}
          >
            <span className="text-xl text-slate-500">{item.title}:</span>
            <span className="text-xl font-semibold">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5.5">
        <ConnectWallet />
        <MyCertificates />
      </div>
    </div>
  )
}

export { DashboardSection }

"use client"

import { useState } from "react"
import { Tab, Tabs } from "@/shared/components/ui/tabs"
import { TabSection } from "./components/sections/tab-section"

export interface Task {
  id: string
  title: string
  description: string
  points: number
  image: string
  action: {
    title: string
  }
}

const tasks = {
  daily: [
    {
      id: "1",
      title: "Daily Rewards",
      description: "The reward is given out every day.",
      points: 100,
      image: "/images/tasks/daily-reward.png",
      action: {
        title: "Get",
      },
    },
    {
      id: "2",
      title: "Daily Watch",
      description: "Watch videos to earn points.",
      points: 150,
      image: "/images/tasks/youtube-reward.png",
      action: {
        title: "Watch",
      },
    },
    {
      id: "3",
      title: "Make a transaction with Base",
      description: "Earn points by trading on the base platform.",
      points: 300,
      image: "/images/tasks/base-reward.png",
      action: {
        title: "Get",
      },
    },
  ],
  social: [
    {
      id: "1",
      title: "Follow our Instagram",
      description: "Follow us on Instagram to stay up to date with the latest information.",
      points: 100,
      image: "/images/tasks/instagram-reward.png",
      action: {
        title: "Go",
      },
    },
    {
      id: "2",
      title: "Follow our Facebook",
      description: "Follow us on Facebook to stay up to date with the latest information.",
      points: 100,
      image: "/images/tasks/facebook-reward.png",
      action: {
        title: "Go",
      },
    },
    {
      id: "3",
      title: "Follow our Telegram",
      description: "Follow us on Telegram to stay up to date with the latest information.",
      points: 100,
      image: "/images/tasks/telegram-reward.png",
      action: {
        title: "Go",
      },
    },
    {
      id: "4",
      title: "Follow our X (Twitter)",
      description: "Follow us on X (Twitter) to stay up to date with the latest information.",
      points: 100,
      image: "/images/tasks/x-reward.png",
      action: {
        title: "Go",
      },
    },
  ],
  youtube: [
    {
      id: "1",
      title: "Liverpool Transfers",
      description: "Liverpool spent a record £446m in the summer transfer window, including a British record £125m",
      points: 100,
      image: "/images/tasks/youtube-reward.png",
      action: {
        title: "Go to video",
      },
    },
  ],
  partners: [
    {
      id: "1",
      title: "Vote on the UEFA website",
      description: "Vote for the best forward of the year and earn points.",
      points: 100,
      image: "/images/tasks/daily-reward.png",
      action: {
        title: "Go",
      },
    },
    {
      id: "2",
      title: "Join the Solana testnet",
      description: "Join the Solana testnet and benefit from airdrop rewards.",
      points: 100,
      image: "/images/tasks/daily-reward.png",
      action: {
        title: "Go",
      },
    },
  ],
} as const satisfies Record<string, Task[]>

const tabs = [
  { label: "Daily", value: "daily", content: <TabSection title="Daily Tasks" tasks={tasks.daily} /> },
  { label: "Social", value: "social", content: <TabSection title="Social Tasks" tasks={tasks.social} /> },
  { label: "Youtube", value: "youtube", content: <TabSection title="Youtube Tasks" tasks={tasks.youtube} /> },
  { label: "Partners", value: "partners", content: <TabSection title="Partners Tasks" tasks={tasks.partners} /> },
]

const TasksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab | undefined>(tabs[0])

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}

export default TasksPage

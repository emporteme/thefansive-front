"use client"

import React from "react"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Soccer } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import NewsCard from "./news-card"

const news = [
  {
    id: 1,
    status: { icon: <Soccer />, label: "Football News" },
    image: "/images/dev/new-1.png",
    name: "Thefansive & Liverpool Collaboration",
    date: "07/10/2025",
    description:
      "We are proud to announce our official partnership with Liverpool Football Club. This collaboration brings fans closer to the game like never before.",
  },
  {
    id: 2,
    status: { label: "Company News" },
    image: "/images/dev/new-2.png",
    name: "$THEFANS Token Pre-Sale",
    date: "07/10/2025",
    description:
      "Be part of the future of fan engagement. Join the Thefans Token presale and secure your spot in the next generation of sports experiences.",
  },
]

const News: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate()
  const routes = useRoutes()

  const handleClickNews = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest("[data-news-id]")

    if (target) {
      const newsId = target.getAttribute("data-news-id")
      if (newsId) {
        navigate(routes.news.single(Number(newsId)))
      }
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 rounded-xl bg-slate-100 px-6 py-10", className)}>
      <h1 className="text-center text-3xl leading-[48px] font-semibold text-slate-900">
        News that will be interesting to you
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2" onClick={handleClickNews}>
        {news.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
    </div>
  )
}

export default News

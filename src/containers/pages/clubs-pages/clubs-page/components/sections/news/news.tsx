"use client"

import React from "react"
import { useIsAuthenticated } from "@/shared/api/hooks/use-auth"
import { useNews, usePersonalizedNews } from "@/shared/api/hooks/use-news"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { cn } from "@/shared/lib/utils"
import NewsCard from "./news-card"

const News: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate()
  const routes = useRoutes()
  const { data: isAuthenticated } = useIsAuthenticated()
  const { data: personalizedNews, isLoading: isLoadingPersonalized } = usePersonalizedNews({ limit: 2 })
  const { data: allNews, isLoading: isLoadingAll } = useNews({ limit: 2 })

  const newsData = isAuthenticated && personalizedNews && personalizedNews.length > 0 ? personalizedNews : allNews
  const isLoading = isAuthenticated ? isLoadingPersonalized : isLoadingAll

  const adaptedNewsData = newsData?.map((newsItem) => ({
    id: newsItem.id,
    status: {
      label: newsItem.category.replace("_", " "),
    },
    date: new Date(newsItem.publishedAt).toLocaleDateString("en-GB"),
    image: typeof newsItem.imageUrl === "string" ? newsItem.imageUrl : "/images/dev/news-placeholder.png",
    name: newsItem.title.en || newsItem.title.ru || "News Title",
    description: newsItem.content.en || newsItem.content.ru || "News content",
  }))

  const handleClickNews = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest("[data-news-id]")

    if (target) {
      const newsId = target.getAttribute("data-news-id")
      if (newsId) {
        navigate(routes.news.single(Number(newsId)))
      }
    }
  }

  if (isLoading) {
    return (
      <div className={cn("flex flex-col gap-6 rounded-xl bg-slate-100 px-6 py-10", className)}>
        <h1 className="text-center text-3xl leading-[48px] font-semibold text-slate-900">
          News that will be interesting to you
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-6 rounded-xl bg-slate-100 px-6 py-10", className)}>
      <h1 className="text-center text-3xl leading-[48px] font-semibold text-slate-900">
        News that will be interesting to you
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2" onClick={handleClickNews}>
        {adaptedNewsData?.map((newsItem) => <NewsCard key={newsItem.id} newsItem={newsItem} />)}
      </div>
    </div>
  )
}

export default News

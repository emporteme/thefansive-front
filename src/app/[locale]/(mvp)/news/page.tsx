"use client"
import { FC, useEffect, useState } from "react"
import { Card, type CardProps } from "@/shared/components/ui/card"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"

const newsDummy: CardProps[] = Array(8)
  .fill(0)
  .map(() => ({
    id: Math.random() * 100,
    title: "News title, no more than two lines",
    description:
      "Sample text specially stretched over 4 lines to show how the real news will look. blah blah blah. Another very long text. Blah blah blah. I can't fit it into 4 lines at all, damn.",
    date: "07/10/2025",
    image: "/images/dev/news-placeholder.png",
    handleClick: () => null,
  }))

const Page: FC = () => {
  const [news, setNews] = useState<CardProps[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const routes = useRoutes()

  const openArticle = (id: number) => {
    navigate(routes.newsArticle(id))
  }

  useEffect(() => {
    setTimeout(() => {
      setNews(newsDummy)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="width-full my-[40px]">
      <div></div>
      <div className="align-center mx-[60px] my-[40px] flex flex-wrap justify-center gap-[24px]">
        {loading &&
          Array.from(Array(10).keys()).map((el) => (
            <div
              key={el}
              className="align-center flex animate-pulse flex-col justify-center gap-[24px] rounded-[16px] bg-white p-[24px]"
            >
              <div className="h-[220px] w-[264px] rounded-[8px] bg-gray-200"></div>
              <div className="flex h-[152px] w-[264px] flex-col gap-[12px]">
                <div className="h-[16px] w-[264px] rounded-[8px] bg-gray-200"></div>
                <div className="h-[48px] w-[264px] rounded-[8px] bg-gray-200"></div>
                <div className="h-[64px] w-[264px] rounded-[8px] bg-gray-200"></div>
              </div>
            </div>
          ))}
        {!loading &&
          news.map((el, i) => (
            <Card
              id={el.id}
              title={el.title}
              description={el.description}
              date={el.date}
              image={el.image}
              key={i}
              handleClick={() => openArticle(el.id)}
            />
          ))}
      </div>
    </div>
  )
}

export default Page

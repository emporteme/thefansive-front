"use client"

import React, { useCallback, useMemo } from "react"
import { useFavoriteTeams, usePopularProducts, useTeams } from "@/shared/api/hooks"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { CardsSlider, ChooseTeam, FanSupportCard, GoBeyond, MainSlider, News, TeamCard } from "./components/sections"
import BecomeMember from "./components/sections/become-member"

const banners = [
  {
    src: "/images/dev/banner-team.jpg",
    alt: "Banner Team",
  },
  {
    src: "/images/dev/real-madrid-banner.jpg",
    alt: "Real Madrid Banner",
  },
  {
    src: "/images/dev/banner-team.jpg",
    alt: "Banner Team",
  },
  {
    src: "/images/dev/real-madrid-banner-2.png",
    alt: "Real Madrid Banner 2",
  },
]

const MainPage = () => {
  // Отладка перерисовок в development
  if (process.env.NODE_ENV === "development") {
    console.log("MainPage rendered")
  }

  const navigate = useNavigate()
  const routes = useRoutes()
  const { data: favoriteTeams, isLoading: isFavoriteTeamsLoading } = useFavoriteTeams()
  const { data: teams, isLoading: isTeamsLoading } = useTeams()

  const productsLimit = useMemo(() => {
    return favoriteTeams?.length || 32
  }, [favoriteTeams?.length])

  const { data: products, isLoading: isPopularProductsLoading } = usePopularProducts({
    limit: productsLimit,
  })

  const handleClickTeam = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const target = (event.target as HTMLElement).closest("[data-team-id]")

      if (target) {
        const teamId = target.getAttribute("data-team-id")
        if (teamId) {
          navigate(routes.clubs.single(teamId))
        }
      }
    },
    [navigate, routes.clubs]
  )

  const handleClickProduct = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const target = (event.target as HTMLElement).closest("[data-product-id]")

      if (target) {
        const productId = target.getAttribute("data-product-id")
        if (productId) {
          navigate(routes.products.single(productId))
        }
      }
    },
    [navigate, routes.products]
  )

  const teamElements = useMemo(() => {
    return teams?.map((team) => <TeamCard key={team.id} team={team} />) || []
  }, [teams])

  const productElements = useMemo(() => {
    return products?.map((product) => <FanSupportCard key={product.id} product={product} showCountdown />) || []
  }, [products])

  return (
    <div className="flex flex-col">
      <MainSlider images={banners} autoDelay={4500} loop className="mb-20" />

      <ContainerLayout className="flex flex-col">
        <ChooseTeam className="mb-15" isLoading={isFavoriteTeamsLoading} favoriteTeams={favoriteTeams || []} />

        <CardsSlider
          onClick={handleClickTeam}
          title="Popular Clubs"
          navCount={5}
          rowCount={1}
          elements={teamElements}
          className="mb-10"
          isLoading={isTeamsLoading}
          type="teams"
        />

        <CardsSlider
          onClick={handleClickProduct}
          title="Popular Fan Support"
          subtitle="Empower your club's future"
          navCount={2}
          rowCount={products && products?.length > 2 ? 2 : 1}
          elements={productElements}
          className="mb-20"
          isLoading={isPopularProductsLoading}
          type="fan-support"
        />

        <News className="mb-10" />
      </ContainerLayout>
      <GoBeyond />
      <BecomeMember />
    </div>
  )
}

export default MainPage

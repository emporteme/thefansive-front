"use client"

import React from "react"
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

const ClubsPage = () => {
  const navigate = useNavigate()
  const routes = useRoutes()
  const { data: favoriteTeams, isLoading: isFavoriteTeamsLoading } = useFavoriteTeams()
  const { data: teams, isLoading: isTeamsLoading } = useTeams()
  const { data: products, isLoading: isPopularProductsLoading } = usePopularProducts({
    limit: favoriteTeams?.length ?? 32,
  })

  const handleClickTeam = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest("[data-team-id]")

    if (target) {
      const teamId = target.getAttribute("data-team-id")
      if (teamId) {
        navigate(routes.clubs.single(teamId))
      }
    }
  }

  const handleClickProduct = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest("[data-product-id]")

    if (target) {
      const productId = target.getAttribute("data-product-id")
      if (productId) {
        navigate(routes.products.single(productId))
      }
    }
  }

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
          elements={teams?.map((team) => <TeamCard key={team.id} team={team} />) || []}
          className="mb-10"
          isLoading={isTeamsLoading}
          type="teams"
        />

        <CardsSlider
          onClick={handleClickProduct}
          title="Popular Fan Support"
          subtitle="Empower your club’s future"
          navCount={2}
          rowCount={2}
          elements={products?.map((product) => <FanSupportCard key={product.id} product={product} />) || []}
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

export default ClubsPage

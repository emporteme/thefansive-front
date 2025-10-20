"use client"

import React from "react"
import { usePopularProducts, useTeams } from "@/shared/api/hooks"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import type { Product } from "@/shared/types/product"
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

const fakeFanSupportProduct = {
  id: 1,
  productName: {
    en: "Lionel Messi Pro T-Shirt",
    ru: "Пакет поддержки фанов",
  },
  productDescription: {
    en: "Purchase the specially designed Milan jersey, available only once and both support your team and add an unforgettable memory to your collection.",
  },
  productCategory: "FAN_SUPPORT",
  productImageUrl: "/images/dev/lionel-messi-pro-t-shirt.png",
  priceCents: 10000,
  currencyCode: "USD",
  isActive: true,
  teamId: 1,
  team: {
    id: 1,
    name: {
      en: "FC Barcelona",
      ru: "ФК Барселона",
      tr: "FC Barcelona",
    },
    shortName: {
      en: "Barca",
      ru: "Барса",
      tr: "Barça",
    },
    description: {},
    sportType: "FOOTBALL",
    logoUrl: "https://example.com/barcelona-logo.png",
    coverImageUrl: "https://example.com/barcelona-cover.jpg",
    websiteUrl: "https://www.fcbarcelona.com",
    socialLinks: {
      twitter: "https://twitter.com/FCBarcelona",
      facebook: "https://www.facebook.com/fcbarcelona",
    },
    country: "Spain",
    city: "Barcelona",
    foundedYear: 1899,
    isActive: true,
    isVerified: false,
    displayOrder: 0,
    createdAt: "2025-10-18T13:09:26.269Z",
    updatedAt: "2025-10-18T13:09:26.269Z",
    _count: {
      products: 10,
      tasks: 5,
      favoriteByUsers: 1250,
    },
  },
  createdAt: "2025-10-18T13:09:26.269Z",
  updatedAt: "2025-10-18T13:09:26.269Z",
}

const fanSupport = [
  ...Array.from({ length: 8 }, (_, index) => ({
    ...fakeFanSupportProduct,
    id: fakeFanSupportProduct.id + index + 1,
  })),
] as unknown as Product[]

const ClubsPage = () => {
  const navigate = useNavigate()
  const routes = useRoutes()
  const { data: teams, isLoading: isTeamsLoading } = useTeams()
  const { data: products, isLoading: isPopularProductsLoading } = usePopularProducts({ limit: 16 })

  console.log("products", products)

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
        <ChooseTeam className="mb-15" />

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

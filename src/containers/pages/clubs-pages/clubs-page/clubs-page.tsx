"use client"

import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"
import type { Product } from "@/shared/types/fan-support"
import { CardsSlider, ChooseTeam, ClubsCard, FanSupportCard, GoBeyond, MainSlider, News } from "./components/sections"

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
  return (
    <div className="flex flex-col gap-15">
      <MainSlider images={banners} autoDelay={4500} loop />

      <ContainerLayout className="flex flex-col gap-15">
        <ChooseTeam />

        <CardsSlider
          title="Popular Clubs"
          navCount={5}
          rowCount={1}
          elements={[
            <ClubsCard key="1" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="2" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="3" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="4" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="5" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="6" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="7" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="8" title="Juventus" image="/images/dev/club-card-1.svg" />,
            <ClubsCard key="9" title="Juventus" image="/images/dev/club-card-1.svg" />,
          ]}
        />

        <CardsSlider
          title="Popular Fan Support"
          subtitle="Empower your club’s future"
          navCount={2}
          rowCount={2}
          elements={fanSupport.map((product) => (
            <FanSupportCard key={product.id} product={product} />
          ))}
        />

        <News />
      </ContainerLayout>
      <GoBeyond />
    </div>
  )
}

export default ClubsPage

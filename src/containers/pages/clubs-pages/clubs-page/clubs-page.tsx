import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { CardsSlider, ChooseTeam, ClubsCard, FanSupportCard, GoBeyond, MainSlider, News } from "./components/sections"

const ClubsPage = () => {
  const images = [
    {
      src: "/images/dev/liverpool-logo.png",
      alt: "Liverpool FC Logo",
    },
    {
      src: "/images/dev/wolverhampton-logo.png",
      alt: "Wolverhampton FC Logo",
    },
    {
      src: "/images/dev/dhl.png",
      alt: "DHL Logo",
    },
    {
      src: "/images/dev/premier-league-logo.png",
      alt: "Premier League Logo",
    },
    {
      src: "/images/dev/messi.png",
      alt: "Lionel Messi",
    },
  ]

  return (
    <div className="flex flex-col gap-15">
      <MainSlider images={images} autoDelay={4500} loop />

      {/* Choose Team Section */}
      <ContainerLayout className="flex flex-col gap-15">
        <ChooseTeam />

        {/* Populer clubs  */}
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

        {/* Popular Fan support  */}
        <CardsSlider
          title="Popular Clubs"
          navCount={2}
          rowCount={2}
          elements={[
            <FanSupportCard key="1" />,
            <FanSupportCard key="2" />,
            <FanSupportCard key="3" />,
            <FanSupportCard key="4" />,
            <FanSupportCard key="5" />,
            <FanSupportCard key="6" />,
            <FanSupportCard key="7" />,
            <FanSupportCard key="8" />,
          ]}
        />

        <News />
      </ContainerLayout>
      <GoBeyond />
    </div>
  )
}

export default ClubsPage

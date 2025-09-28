import React from "react"
import { CardsSlider, ClubsCard, MainSlider } from "./components/sections"

const ClubsPage = () => {
  const images = [
    {
      src: "/images/dev/fc-liverpool-logo.png",
      alt: "Liverpool FC Logo",
    },
    {
      src: "/images/dev/fc-wolverhampton-logo.png",
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

      {/* Populer clubs  */}
      <CardsSlider
        title="Popular Clubs"
        navCount={5}
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
    </div>
  )
}

export default ClubsPage

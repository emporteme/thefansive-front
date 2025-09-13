import React from "react"
import { MainSlider } from "./components/sections"

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
    <div className="flex flex-col">
      <MainSlider images={images} autoDelay={4500} loop />
    </div>
  )
}

export default ClubsPage

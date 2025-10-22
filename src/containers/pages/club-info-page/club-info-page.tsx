"use client"
import { useTeams } from "@/shared/api/hooks"
import { Team } from "@/shared/types/team"
import Banner from "./components/banner"
import Donate from "./components/donate"
import Hero from "./components/hero"
import Product from "./components/product"

const ClubInfoPage = () => {
  const { data: teams } = useTeams()

  return (
    <>
      <Hero team={teams as Partial<Team>} />
      <Donate
        team={teams as Partial<Team>}
        onSubmit={(data) => {
          console.log(data)
        }}
      />
      <div className="py-6">
        <Banner />
        <Product />
      </div>
    </>
  )
}

export default ClubInfoPage

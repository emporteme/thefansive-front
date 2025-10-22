"use client"
import { useParams } from "next/navigation"
import { useTeam } from "@/shared/api/hooks"
import Banner from "./components/banner"
import Donate from "./components/donate"
import Hero from "./components/hero"
import Product from "./components/product"

const ClubInfoPage = () => {
  const params = useParams<{ id: string }>()
  const { data: team } = useTeam(Number(params?.id))

  return (
    <>
      <Hero team={team} />
      <Donate
        team={team}
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

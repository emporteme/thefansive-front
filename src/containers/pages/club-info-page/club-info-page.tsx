"use client"
import { useParams } from "next/navigation"
import { useProducts, useTeam } from "@/shared/api/hooks"
import { Product as ProductType } from "@/shared/types/product"
import { Team } from "@/shared/types/team"
import Banner from "./components/banner"
import Donate from "./components/donate"
import Hero from "./components/hero"
import Product from "./components/product"

interface ClubInfoPageProps {
  serverTeam?: Team
  serverProducts?: ProductType[]
}

const ClubInfoPage = ({ serverTeam, serverProducts }: ClubInfoPageProps) => {
  const params = useParams<{ id: string }>()

  const { data: team, isLoading: isTeamLoading } = useTeam(Number(params?.id), {
    initialData: serverTeam,
  })

  const { data: products } = useProducts(
    { teamId: Number(params?.id) },
    {
      initialData: serverProducts,
    }
  )

  const product = products?.[0]

  if (isTeamLoading || !team) {
    return null
  }

  return (
    <div className="pt-6 pb-15">
      <Hero team={team} />
      <Donate
        team={team}
        onSubmit={(data) => {
          console.log(data)
        }}
      />
      <div className="py-6">
        <Banner />
        {product && <Product product={product} />}
      </div>
    </div>
  )
}

export default ClubInfoPage

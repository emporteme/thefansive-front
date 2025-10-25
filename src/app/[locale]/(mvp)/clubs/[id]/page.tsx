import { notFound } from "next/navigation"
import ClubInfoPage from "@/containers/pages/club-info-page/club-info-page"
import { Product } from "@/shared/types/product"
import { Team } from "@/shared/types/team"
import { getProducts, getTeam } from "./api"

interface ClubsSinglePageProps {
  params: Promise<{ id: string }>
}

const ClubsSinglePage = async (context: ClubsSinglePageProps) => {
  const { id } = await context.params
  const teamId = Number(id)

  if (isNaN(teamId)) {
    notFound()
  }

  const [teamResponse, productsResponse] = await Promise.all([getTeam(teamId), getProducts(teamId)])

  const team = teamResponse.data as Team
  const products = productsResponse.data as Product[]

  if (!team) {
    notFound()
  }

  return <ClubInfoPage serverTeam={team as Team} serverProducts={products as Product[]} />
}

export default ClubsSinglePage

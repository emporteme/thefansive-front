import { cache } from "react"
import { serverApiClient } from "@/shared/api/server-client"

const getTeam = cache(async (id: number) => {
  const team = await serverApiClient
    .GET("/teams/{id}", {
      params: { path: { id } },
    })
    .catch(() => {
      return {
        data: null,
      }
    })
  return team
})

const getProducts = cache(async (teamId: number) => {
  const products = await serverApiClient
    .GET("/products", {
      params: { query: { teamId } },
    })
    .catch(() => {
      return {
        data: null,
      }
    })
  return products
})

export { getTeam, getProducts }

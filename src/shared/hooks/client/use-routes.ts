import { useParams } from "next/navigation"
import { getRoutes } from "@/shared/utils/get-routes"

export const useRoutes = () => {
  const params = useParams()
  return getRoutes(params.locale as string)
}

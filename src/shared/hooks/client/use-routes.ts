import { getRoutes } from "@/shared/utils/get-routes"
import { useParams } from "next/navigation"

export const useRoutes = () => {
  const params = useParams()
  return getRoutes(params.locale as string)
}

import { getRoutes } from "@/shared/utils/getRoutes"
import { useParams } from "next/navigation"

export const useRoutes = () => {
  const params = useParams()
  return getRoutes(params.locale as string)
}
import { useParams } from "next/navigation"
import { getRoutes } from "@/shared/utils/get-routes"

export const useRoutes = () => {
  const params = useParams()
  const locale = params.locale as string

  return getRoutes(locale === "en" ? undefined : locale)
}

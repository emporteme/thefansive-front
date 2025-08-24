import Link from "next/link"
import { FC } from "react"
import { useRoutes } from "@/shared/hooks/client/use-routes"

const UserProfileWidget: FC = () => {
  const routes = useRoutes()

  return (
    <Link href={routes.user.profile()} className="flex items-center space-x-2">
      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
      <span className="text-sm font-medium text-gray-700">Пользователь</span>
    </Link>
  )
}

export { UserProfileWidget }

import React from "react"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Auth as AuthIcon } from "@/shared/icons"

const Auth: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()

  const handleAuth = () => {
    navigate(routes.auth.login())
  }

  return (
    <div
      className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 lg:px-4"
      onClick={handleAuth}
    >
      <p className="hidden font-semibold lg:block">Login</p>
      <AuthIcon className="h-5 w-5" />
    </div>
  )
}

export default Auth

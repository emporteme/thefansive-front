import React from "react"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Support as SupportIcon } from "@/shared/icons"

const Support: React.FC = () => {
  const navigate = useNavigate()
  const routes = useRoutes()

  const handleSupport = () => {
    navigate(routes.user.support())
  }

  return (
    <div
      className="flex cursor-pointer items-center gap-2 rounded-lg p-3.5 transition-all duration-200 active:bg-gray-900"
      onClick={handleSupport}
    >
      <span className="hidden text-sm font-semibold md:block">Support</span>
      <SupportIcon fill />
    </div>
  )
}

export default Support

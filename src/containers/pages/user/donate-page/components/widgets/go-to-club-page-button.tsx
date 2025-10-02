import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { ArrowRightRound as ArrowRightRoundIcon } from "@/shared/icons"

const GoToClubPageButton: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()

  const handleGoToClubPage = () => {
    navigate(routes.clubs.single("1"))
  }

  return (
    <button
      className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-transparent p-3 hover:bg-slate-100"
      onClick={handleGoToClubPage}
    >
      <p className="text-sm font-semibold text-gray-700">Go Liverpool Page</p>
      <ArrowRightRoundIcon className="size-4.5 text-gray-700" />
    </button>
  )
}

export { GoToClubPageButton }

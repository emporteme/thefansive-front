import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { User as UserIcon } from "@/shared/icons"

const User: React.FC = () => {
  const navigate = useNavigate()
  const routes = useRoutes()

  const handleClick = () => {
    navigate(routes.user.profile())
  }

  return (
    <button className="rounded-2lg size-12 cursor-pointer bg-slate-900 p-3.5 active:bg-slate-800" onClick={handleClick}>
      <UserIcon className="size-5 text-white" fill />
    </button>
  )
}

export default User

import Link from "next/link"
import { getRoutes } from "@/shared/utils/get-routes"

const LinkList = () => {
  const routes = getRoutes()

  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-2xl font-semibold text-slate-900">Explore</span>
      <ul className="flex flex-col gap-1.5">
        <li className="text-sm font-medium text-black">
          <Link href={routes.home()}>Home</Link>
        </li>
        <li className="text-sm font-medium text-black">
          <Link href={routes.ecosystem()}>Ecosystem</Link>
        </li>
        <li className="text-sm font-medium text-black">
          <Link href={routes.game()}>Game</Link>
        </li>
        <li className="text-sm font-medium text-black">
          <Link href={routes.partners()}>Partners</Link>
        </li>
      </ul>
    </div>
  )
}

export default LinkList

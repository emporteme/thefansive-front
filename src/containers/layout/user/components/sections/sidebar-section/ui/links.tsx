import clsx from "clsx"
import { usePathname } from "next/navigation"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Routes } from "@/shared/types/routes"

const sidebarItems = (routes: Routes) => [
  {
    id: 1,
    title: "Profile",
    link: routes.user.profile(),
  },
  {
    id: 2,
    title: "Order",
    link: routes.user.order(),
  },
  {
    id: 3,
    title: "Fan Support",
    link: routes.user.fanSupport(),
  },
  {
    id: 4,
    title: "Donate",
    link: routes.user.donate(),
  },
  {
    id: 5,
    title: "Tasks",
    link: routes.user.tasks(),
  },
  {
    id: 6,
    title: "My Information",
    link: routes.user.myInformation(),
  },
  {
    id: 7,
    title: "Support",
    link: routes.user.support(),
  },
]

const Links: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const pathname = usePathname()

  const isActiveLink = (link: string) => pathname === link

  return (
    <div className="flex flex-col">
      {sidebarItems(routes).map((item) => (
        <div
          key={item.id}
          className={clsx(
            "flex cursor-pointer rounded-xl p-4 text-xl leading-none font-bold transition-all duration-200 hover:text-black",
            {
              "text-black": isActiveLink(item.link),
              "text-gray-400": !isActiveLink(item.link),
            }
          )}
          onClick={() => navigate(item.link)}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Links

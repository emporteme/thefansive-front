import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLogout } from "@/shared/api/hooks/use-auth"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Flag, Logout, Support, Task, User, UserEdit } from "@/shared/icons"
import Gift from "@/shared/icons/gift"
import { cn } from "@/shared/lib/utils"
import { Routes } from "@/shared/types/routes"

const sidebarItems = ({
  routes,
  navigate,
  logout,
}: {
  routes: Routes
  navigate: (path: string) => void
  logout: () => void
}) => [
  {
    id: "profile",
    title: "Profile",
    link: routes.user.profile(),
  },
  // {
  //   id: "order",
  //   title: "Order",
  //   link: routes.user.order(),
  // },
  {
    id: "fan-support",
    title: "Fan Support",
    link: routes.user.fanSupport(),
  },
  {
    id: "donate",
    title: "Donate",
    link: routes.user.donate(),
  },
  {
    id: "tasks",
    title: "Tasks",
    link: routes.user.tasks(),
  },
  {
    id: "my-information",
    title: "My Information",
    link: routes.user.myInformation(),
  },
  {
    id: "support",
    title: "Support",
    link: routes.user.support(),
  },
  {
    id: "logout",
    title: "Logout",
    action: () => {
      logout?.()
      navigate(routes.home())
    },
  },
]

const iconById = (id: string, link: string, isActiveLink: (link: string) => boolean) => {
  switch (id) {
    case "profile":
      return <User className="h-5 w-5" fill={isActiveLink(link)} />
    case "fan-support":
      return <Flag className="h-5 w-5" fill={isActiveLink(link)} />
    case "donate":
      return <Gift className="h-5 w-5" fill={isActiveLink(link)} />
    case "tasks":
      return <Task className="h-5 w-5" fill={isActiveLink(link)} />
    case "my-information":
      return <UserEdit className="h-5 w-5" fill={isActiveLink(link)} />
    case "support":
      return <Support className="h-5 w-5" fill={isActiveLink(link)} />
    case "logout":
      return <Logout className="h-5 w-5" />
    default:
      return null
  }
}

const Links: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const pathname = usePathname()
  const { logout } = useLogout()
  const isActiveLink = (link: string) => pathname === link

  const className =
    "flex gap-2.5 items-center cursor-pointer text-slate-500 font-normal rounded-xl px-4 py-3 text-base leading-[1.5] transition-all duration-200 hover:font-extrabold hover:text-slate-900"

  return (
    <div className="flex flex-col gap-1.5">
      {sidebarItems({ routes, navigate, logout })?.map((item) => {
        return item.link ? (
          <Link
            prefetch
            key={item.id}
            href={item.link}
            className={cn(className, {
              "text-slate-900": isActiveLink(item.link),
              "font-extrabold": isActiveLink(item.link),
              "text-slate-500": !isActiveLink(item.link),
              "font-normal": !isActiveLink(item.link),
            })}
          >
            {iconById(item.id, item.link, isActiveLink)}
            {item.title}
          </Link>
        ) : (
          <span key={item.id} onClick={item.action ? item.action : undefined} className={cn(className, "mt-4.5")}>
            <Logout className="h-5 w-5" />
            {item.title}
          </span>
        )
      })}
    </div>
  )
}

export default Links

import Link from "next/link"
import { usePathname } from "next/navigation"
import { logout } from "@/shared/api"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { User } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"
import { Routes } from "@/shared/types/routes"

const sidebarItems = ({ routes, navigate }: { routes: Routes; navigate: (path: string) => void }) => [
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
      logout()
      navigate(routes.home())
    },
  },
]

const Links: React.FC = () => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const pathname = usePathname()

  const isActiveLink = (link: string) => pathname === link

  const className =
    "flex gap-2.5 items-center cursor-pointer text-slate-500 font-normal rounded-xl px-4 py-3 text-base leading-[1.5] transition-all duration-200 hover:font-extrabold hover:text-slate-900"

  return (
    <div className="flex flex-col gap-1.5">
      {sidebarItems({ routes, navigate }).map((item) =>
        item.link ? (
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
            <User
              className={cn("h-5 w-5 text-slate-500", {
                "text-slate-900": isActiveLink(item.link),
              })}
              fill={isActiveLink(item.link)}
            />
            {item.title}
          </Link>
        ) : (
          <span key={item.id} onClick={item.action ? item.action : undefined} className={cn(className, "mt-4.5")}>
            <User className="h-5 w-5" />
            {item.title}
          </span>
        )
      )}
    </div>
  )
}

export default Links

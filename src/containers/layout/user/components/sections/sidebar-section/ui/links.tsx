import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Routes } from "@/shared/types/routes"

const sidebarItems = (routes: Routes) => [
  {
    id: "profile",
    title: "Profile",
    link: routes.user.profile(),
  },
  {
    id: "order",
    title: "Order",
    link: routes.user.order(),
  },
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
]

const Links: React.FC = () => {
  const routes = useRoutes()
  const pathname = usePathname()

  const isActiveLink = (link: string) => pathname === link

  return (
    <div className="flex flex-col gap-1">
      {sidebarItems(routes).map((item) => (
        <Link
          prefetch
          key={item.id}
          href={item.link}
          className={clsx(
            "flex cursor-pointer rounded-xl p-4 text-xl font-bold transition-all duration-200 hover:text-black",
            {
              "text-black": isActiveLink(item.link),
              "font-bold": isActiveLink(item.link),
              "text-gray-400": !isActiveLink(item.link),
              "font-semibold": !isActiveLink(item.link),
            }
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default Links

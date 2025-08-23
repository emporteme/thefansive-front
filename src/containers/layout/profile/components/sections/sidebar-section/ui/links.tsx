import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Routes } from "@/shared/types/routes"
import clsx from "clsx"
import { usePathname, useRouter } from "next/navigation"

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
  const router = useRouter()
  const routes = useRoutes()
  const pathname = usePathname()

  const isActiveLink = (link: string) => pathname === link

  return <div className="flex flex-col">
    {sidebarItems(routes).map((item) => (
      <div key={item.id} className={clsx('flex cursor-pointer p-4 rounded-lg p-2.5 font-bold transition-all duration-200 hover:bg-gray-100', {
        'bg-gray-100': isActiveLink(item.link),
        'text-black': isActiveLink(item.link),
        'text-gray-400': !isActiveLink(item.link),
      })} onClick={() => router.push(item.link)}>
        {item.title}
      </div>
    ))}
  </div>
}

export default Links
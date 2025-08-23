import { useRoutes } from "@/shared/hooks/client/use-routes"
import { Routes } from "@/shared/types/routes"
import Link from "next/link"

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

const SidebarSection: React.FC = () => {
  const routes = useRoutes()

  return (
    <div className="flex flex-col bg-gray-200 w-[310px] rounded-xl p-4" >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex">Name</div>
          <div className="flex">ID</div>
        </div>
      </div>

      <div className="flex flex-col">
        {sidebarItems(routes).map((item) => (
          <div key={item.id} className="flex cursor-pointer p-4 text-sidebar-foreground hover:bg-#000000">
            <Link href={item.link}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarSection
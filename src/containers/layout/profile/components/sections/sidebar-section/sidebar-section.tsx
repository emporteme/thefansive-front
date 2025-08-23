import { Links, User } from "./ui"

const SidebarSection: React.FC = () => {

  return (
    <div className="flex flex-col bg-gray-200 w-[310px] rounded-xl p-4" >
      <User />
      <Links />
    </div>
  )
}

export default SidebarSection
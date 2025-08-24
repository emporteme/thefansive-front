import { Links, User } from "./ui"

const SidebarSection: React.FC = () => {
  return (
    <div className="flex w-[310px] flex-col rounded-xl bg-gray-200 p-4">
      <User />
      <Links />
    </div>
  )
}

export default SidebarSection

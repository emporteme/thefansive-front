import { AddCircleFilled } from "@/shared/icons"

interface AddFavoriteClubsProps {
  onAdd: () => void
}

const AddFavoriteClubs: React.FC<AddFavoriteClubsProps> = ({ onAdd }) => {
  return (
    <button
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-transparent px-3 py-2 transition-colors active:bg-slate-50"
      onClick={onAdd}
    >
      <span className="text-sm font-semibold text-gray-700">Add Clubs</span>
      <div className="flex h-[18px] w-[18px] items-center justify-center">
        <AddCircleFilled className="h-4.5 w-4.5 text-gray-700" />
      </div>
    </button>
  )
}

export { AddFavoriteClubs }

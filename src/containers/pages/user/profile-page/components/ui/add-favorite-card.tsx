import { AddCircleFilled } from "@/shared/icons"

interface AddFavoriteCardProps {
  title: string
  onAdd: () => void
}

const AddFavoriteCard: React.FC<AddFavoriteCardProps> = ({ title, onAdd }) => {
  return (
    <button className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white p-4" onClick={onAdd}>
      <span className="text-base font-medium text-slate-900">{title}</span>
      <AddCircleFilled className="h-4 w-4 text-slate-500" />
    </button>
  )
}

export { AddFavoriteCard }

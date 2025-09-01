import { Add as AddIcon } from "@/shared/icons"

interface AddFavoriteCardProps {
  title: string
  onAdd: () => void
}

const AddFavoriteCard: React.FC<AddFavoriteCardProps> = ({ title, onAdd }) => {
  return (
    <button className="flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-white p-3" onClick={onAdd}>
      <span className="text-base font-medium text-slate-900">{title}</span>
      <AddIcon className="text-slate-900" />
    </button>
  )
}

export { AddFavoriteCard }

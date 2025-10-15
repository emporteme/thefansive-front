import { Button } from "@/shared/components/ui"
import PencilEdit from "@/shared/icons/pencil-edit"

interface AddressItemProps {
  title: string
  items: string[]
  onClick: () => void
}

const AddressItem = ({ title, items, onClick }: AddressItemProps) => {
  return (
    <div className="flex max-w-[320px] flex-col gap-2 rounded-2xl border-2 border-slate-700 bg-white p-5">
      <h3 className="mb-1 font-semibold">{title}</h3>
      {items.map((item, index) => {
        return (
          <p key={index} className="leading-[1.5] text-slate-600">
            {item}
          </p>
        )
      })}
      <Button size="lg" variant="secondary" className="flex w-full justify-center" onClick={onClick}>
        Edit
        <PencilEdit className="text-slate-700" />
      </Button>
    </div>
  )
}

export default AddressItem

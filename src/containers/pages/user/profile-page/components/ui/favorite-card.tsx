import Image from "next/image"
import { Cancel as CancelIcon } from "@/shared/icons"

interface FavoriteCardProps {
  name: string
  logo: string
  onCancel: () => void
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ name, logo, onCancel }) => {
  return (
    <div className="relative flex h-48 w-[140px] flex-shrink-0 flex-col rounded-2xl bg-white">
      <button
        onClick={onCancel}
        className="absolute top-0 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white"
      >
        <CancelIcon className="h-3.5 w-3.5 text-slate-600" />
      </button>
      <div className="mx-auto mt-2.5 h-[130px] w-[130px] overflow-hidden rounded-lg">
        <Image src={logo} alt={name} width={130} height={130} className="h-full w-full object-cover" quality={90} />
      </div>
      <div className="mt-2.5 px-2.5 pb-2.5">
        <p className="text-center text-sm leading-4 font-medium text-slate-900">{name}</p>
      </div>
    </div>
  )
}

export { FavoriteCard }

import Image from "next/image"
import { Cancel as CancelIcon } from "@/shared/icons"

interface FavoriteCardProps {
  name: string
  logo: string
  onCancel: () => void
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ name, logo, onCancel }) => {
  return (
    <div className="flex min-w-[280px] items-center justify-between gap-3 rounded-xl bg-white px-4 py-2">
      <div className="flex items-center gap-3">
        <Image src={logo} alt={name} width={32} height={32} quality={90} />
        <span className="text-base font-medium text-slate-900">{name}</span>
      </div>
      <CancelIcon onClick={onCancel} className="cursor-pointer" />
    </div>
  )
}

export { FavoriteCard }

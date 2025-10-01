import Image from "next/image"
import { Cancel as CancelIcon } from "@/shared/icons"

interface FavoriteClubCardProps {
  name: string
  logo: string
  onCancel: () => void
  onClick: () => void
}

const FavoriteClubCard: React.FC<FavoriteClubCardProps> = ({ name, logo, onCancel, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClick()
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onCancel()
  }

  return (
    <div
      className="relative flex flex-shrink-0 cursor-pointer flex-col rounded-2xl bg-white px-[5px] py-2.5"
      onClick={handleClick}
    >
      <button
        onClick={handleCancel}
        className="absolute top-0 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white"
      >
        <CancelIcon className="h-3.5 w-3.5 text-slate-600" />
      </button>
      <div className="mx-auto h-[130px] w-[130px] overflow-hidden rounded-lg">
        <Image src={logo} alt={name} width={130} height={130} className="h-full w-full object-cover" quality={90} />
      </div>
      <div className="mt-2.5 h-[32px] w-full pl-1.5">
        <p className="text-xs font-semibold text-slate-900">{name}</p>
      </div>
    </div>
  )
}

export { FavoriteClubCard }

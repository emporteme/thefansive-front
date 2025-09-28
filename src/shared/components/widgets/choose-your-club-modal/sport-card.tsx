import Image from "next/image"

interface SportCardProps {
  name: string
  image: string
  isSelected: boolean
  onClick: () => void
}

const SportCard: React.FC<SportCardProps> = ({ name, image, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex h-32 w-24 flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-3 transition-all ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <div className="mb-2 h-12 w-12 overflow-hidden rounded-lg">
        <Image src={image} alt={name} width={48} height={48} className="h-full w-full object-cover" quality={90} />
      </div>
      <span className="text-center text-xs leading-tight font-medium text-slate-900">{name}</span>
    </div>
  )
}

export { SportCard }

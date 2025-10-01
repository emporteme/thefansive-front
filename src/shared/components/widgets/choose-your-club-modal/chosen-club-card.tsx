import Image from "next/image"

interface ClubAvatarProps {
  logo: string
  name: string
  onClick: () => void
}

const ChosenClubCard: React.FC<ClubAvatarProps> = ({ logo, name, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClick()
  }

  return (
    <div
      className={`flex h-20 w-20 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#CAD5E2] bg-white`}
      onClick={handleClick}
    >
      <div className={`h-13.5 w-11.5 overflow-hidden rounded-lg`}>
        <Image src={logo} alt={name} width={45} height={54} className="h-full w-full object-contain" quality={90} />
      </div>
    </div>
  )
}

export { ChosenClubCard }

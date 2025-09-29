import Image from "next/image"

interface ClubAvatarProps {
  logo: string
  name: string
}

const ChosenClubCard: React.FC<ClubAvatarProps> = ({ logo, name }) => {
  return (
    <div
      className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border border-[#CAD5E2] bg-white`}
    >
      <div className={`h-13.5 w-11.5 overflow-hidden rounded-lg`}>
        <Image src={logo} alt={name} width={45} height={54} className="h-full w-full object-contain" quality={90} />
      </div>
    </div>
  )
}

export { ChosenClubCard }

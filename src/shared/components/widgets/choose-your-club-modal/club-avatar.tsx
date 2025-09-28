import Image from "next/image"

interface ClubAvatarProps {
  logo: string
  name: string
  size?: "sm" | "md" | "lg"
}

const ClubAvatar: React.FC<ClubAvatarProps> = ({ logo, name, size = "md" }) => {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-20 w-20", // 80px как в Figma
    lg: "h-24 w-24",
  }

  const imageSizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12", // Примерно 45x54 из Figma, адаптировано для квадратного формата
    lg: "h-16 w-16",
  }

  const imageSizes = {
    sm: 40,
    md: 48,
    lg: 64,
  }

  return (
    <div
      className={`flex ${sizeClasses[size]} flex-shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white`}
    >
      <div className={`${imageSizeClasses[size]} overflow-hidden rounded-lg`}>
        <Image
          src={logo}
          alt={name}
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="h-full w-full object-contain"
          quality={90}
        />
      </div>
    </div>
  )
}

export { ClubAvatar }

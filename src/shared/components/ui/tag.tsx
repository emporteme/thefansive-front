import { cn } from "@/shared/lib/utils"

interface TagProps {
  label: string
  className?: string
  icon?: React.ReactNode
  image?: React.ReactNode
  position?: "left" | "right"
}

const Tag: React.FC<TagProps> = ({ label, className, icon, position = "right", image }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 self-start rounded-md border-1 border-gray-100 bg-gray-50 px-2 py-1 text-xs leading-[16px] font-semibold text-gray-700 shadow-[0px_1px_2px_-1px_#110C2214]",
        className
      )}
    >
      {position === "left" && icon}
      {position === "left" && image}
      {label}
      {position === "right" && icon}
      {position === "right" && image}
    </span>
  )
}

export { Tag }

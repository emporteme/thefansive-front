import { cn } from "@/shared/lib/utils"

interface TagProps {
  label: string
  className?: string
  icon?: React.ReactNode
}

const Tag: React.FC<TagProps> = ({ label, className, icon }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 self-start rounded-md border-1 border-gray-100 bg-gray-50 px-2 py-1 text-xs leading-[16px] font-semibold text-gray-700 shadow-[0px_1px_2px_-1px_#110C2214]",
        className
      )}
    >
      {label}
      {icon}
    </div>
  )
}

export { Tag }

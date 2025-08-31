import { Invoice as InvoiceIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface InvoiceInfoButtonProps {
  className?: string
  onClick?: () => void
}

const InvoiceInfoButton: React.FC<InvoiceInfoButtonProps> = ({ className, onClick, ...props }) => {
  return (
    <button
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-1 self-start rounded-xl bg-slate-200 p-3 text-sm text-black",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <InvoiceIcon />
      <span>Invoice Info</span>
    </button>
  )
}

export { InvoiceInfoButton }

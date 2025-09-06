import { InvoiceFilled } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface InvoiceInfoButtonProps {
  className?: string
  onClick?: () => void
}

const InvoiceInfoButton: React.FC<InvoiceInfoButtonProps> = ({ className, onClick, ...props }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 self-start rounded-md bg-slate-100 px-3 py-2 text-sm",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <InvoiceFilled className="h-4.5 w-4.5 text-slate-700" />
      <span className="text-sm leading-[1.7] font-semibold text-slate-700">Invoice Info</span>
    </button>
  )
}

export { InvoiceInfoButton }

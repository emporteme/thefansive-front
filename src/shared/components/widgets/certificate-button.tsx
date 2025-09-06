import { CertificateFilled, CertificateOutlined } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

type CertificateType = "fan" | "donation"

interface CertificateData {
  label: string
}

interface CertificateButtonProps {
  type: CertificateType
  className?: string
  onClick?: () => void
}

const dataByType = {
  fan: {
    label: "Fan Certificate",
  },
  donation: {
    label: "Donation Certificate",
  },
} as Record<CertificateType, CertificateData>

const CertificateButton: React.FC<CertificateButtonProps> = ({ type, className, onClick, ...props }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 self-start rounded-md bg-slate-100 px-3 py-2 text-sm",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <CertificateOutlined className="h-4.5 w-4.5 text-slate-700" />
      <span className="text-sm leading-[1.7] font-semibold text-slate-700">{dataByType?.[type]?.label}</span>
    </button>
  )
}

export { CertificateButton }

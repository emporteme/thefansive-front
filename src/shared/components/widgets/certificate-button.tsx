import { Certificate as CertificateIcon } from "@/shared/icons"
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
        "flex w-full flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl bg-slate-200 p-2 text-sm font-normal text-black",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <CertificateIcon />
      <span>{dataByType?.[type]?.label}</span>
    </button>
  )
}

export { CertificateButton }

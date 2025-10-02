import Image from "next/image"
import { Certificate } from "."

interface CertificateCardProps {
  certificate: Certificate
  onDownload: (certificate: Certificate) => void
}

const CertificateCard = ({ certificate, onDownload }: CertificateCardProps) => {
  return (
    <div key={certificate.id} className="relative flex flex-col rounded-xl bg-white p-2.5">
      <button
        onClick={() => onDownload(certificate)}
        className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-lg bg-white"
      >
        <Image src="/images/icons/download.png" alt="download" width={14} height={14} />
      </button>

      <div className="mb-2.5 aspect-square overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={certificate.clubLogo}
          alt={certificate.name}
          width={110}
          height={110}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="text-xs leading-tight font-semibold text-slate-900">{certificate.name}</h3>
    </div>
  )
}

export { CertificateCard }

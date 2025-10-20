"use client"

import React, { useState } from "react"
import { ModalLayout } from "@/shared/components/ui"
import { Cancel } from "@/shared/icons"
import { alert } from "@/shared/lib/alert"
import { CertificateType } from "@/shared/types/product"
import { CertificateCard } from "./certificate-card"
import { TabButton } from "./tab-button"

export interface Certificate {
  id: number
  name: string
  clubLogo: string
  type: CertificateType
}

interface CertificatesModalProps {
  isOpen: boolean
  onClose: () => void
  certificates?: Certificate[]
}

const mockCertificates: Certificate[] = [
  {
    id: 1,
    name: "Bayern Munich Fan Certificate",
    clubLogo: "/images/dev/madrid-logo.png",
    type: "fan",
  },
  {
    id: 2,
    name: "Fenerbahçe Fan Certificate",
    clubLogo: "/images/dev/arsenal-logo.png",
    type: "fan",
  },
  {
    id: 3,
    name: "Barcelona Fan Certificate",
    clubLogo: "/images/dev/manchester-logo.png",
    type: "fan",
  },
  {
    id: 4,
    name: "Wolverhampton Fan Certificate",
    clubLogo: "/images/dev/wolverhampton-logo.png",
    type: "fan",
  },
  {
    id: 5,
    name: "Chelsea Fan Certificate",
    clubLogo: "/images/dev/liverpool-logo.png",
    type: "fan",
  },
  {
    id: 6,
    name: "Chelsea Fan Certificate",
    clubLogo: "/images/dev/liverpool-logo.png",
    type: "fan",
  },
  {
    id: 7,
    name: "Dortmund Fan Certificate",
    clubLogo: "/images/dev/liverpool-logo.png",
    type: "donation",
  },
]

const CertificatesModal: React.FC<CertificatesModalProps> = ({ isOpen, onClose, certificates = mockCertificates }) => {
  const [activeTab, setActiveTab] = useState<CertificateType>("fan")

  const filteredCertificates = certificates.filter((cert) => cert.type === activeTab)

  const handleDownload = (certificate: Certificate) => {
    alert.success(`Downloading certificate: ${certificate.name}`)
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      className="relative !w-[800px] !max-w-[800px] !bg-slate-100 p-7.5"
      closeOnOverlayClick={true}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 transition-colors hover:bg-slate-200"
      >
        <Cancel className="h-6 w-6 text-slate-900" />
      </button>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">My Certificates</h2>
      </div>

      <div className="p-5">
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-slate-100 p-1">
          <TabButton tab="fan" activeTab={activeTab} setActiveTab={setActiveTab} title="Fan Certificates" />
          <TabButton tab="donation" activeTab={activeTab} setActiveTab={setActiveTab} title="Donation Certificate" />
        </div>

        <div className="grid grid-cols-5 gap-2.5">
          {filteredCertificates.map((certificate) => (
            <CertificateCard certificate={certificate} onDownload={handleDownload} />
          ))}
        </div>
      </div>
    </ModalLayout>
  )
}

export { CertificatesModal }

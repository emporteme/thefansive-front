import { Certificate as CertificateIcon } from "@/shared/icons"

const MyCertificates = () => {
  return (
    // TODO: refactor to reusable button component
    <div className="flex cursor-pointer items-center gap-2.5 rounded-lg bg-slate-200 px-5 py-2">
      <CertificateIcon />
      <span className="font-regular text-base leading-none text-black">My Certificates</span>
    </div>
  )
}

export { MyCertificates }

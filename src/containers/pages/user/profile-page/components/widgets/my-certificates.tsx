import { Button } from "@/shared/components/ui"
import { CertificateFilled } from "@/shared/icons"

const MyCertificates = () => {
  return (
    // TODO: refactor to reusable button component
    <Button className="px-3 py-2">
      <span className="text-sm leading-[1.7] font-semibold">My Certificates</span>
      <CertificateFilled />
    </Button>
  )
}

export { MyCertificates }

import { Button } from "@/shared/components/ui"
import { ArrowRightRound, CertificateFilled } from "@/shared/icons"

const MyCertificates = () => {
  return (
    <Button className="flex flex-col gap-3 py-4 !pr-2 !pl-5">
      <div className="flex items-center gap-1.5">
        <CertificateFilled className="!h-6 !w-6" />
        <span className="text-base font-medium text-slate-200">My Certificates</span>
      </div>
      <div className="flex w-full items-center justify-between">
        <span className="text-3xl font-semibold text-slate-50">2</span>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-50">All view</span>
          <ArrowRightRound />
        </div>
      </div>
    </Button>
  )
}

export { MyCertificates }

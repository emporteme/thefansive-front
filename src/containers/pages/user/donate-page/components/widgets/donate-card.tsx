import Image from "next/image"
import { CertificateButton, InvoiceInfoButton, PaymentStatusBox } from "@/shared/components/widgets"
import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { GoToClubPageButton } from "./go-to-club-page-button"

interface DonateCardProps {
  donate: {
    id: string
    type: string
    title: string
    date: string
    paymentStatus: PaymentStatus
    deliveryStatus: DeliveryStatus
    yourDonation: string
  }
}

const DonateCard: React.FC<DonateCardProps> = ({ donate }) => {
  return (
    <div className="flex h-full w-full shrink rounded-xl bg-slate-100">
      <div className="flex flex-1/2 gap-5 p-6">
        <Image
          src="/images/fallbacks/empty-card-image.png"
          alt="order image"
          width={220}
          height={220}
          className="h-[220px] w-[220px] rounded-md border-2 border-[#cad5e2] object-cover"
        />
        <div className="flex flex-1 flex-col justify-between gap-3">
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl font-semibold text-black">{donate.type}</h4>
            <h3 className="max-w-[250px] text-base font-normal text-black">{donate.title}</h3>
          </div>
          <div className="flex flex-col gap-6">
            <CertificateButton type="donation" />
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-black">
                <span className="font-normal text-slate-600">Date:</span> {donate.date}
              </p>
              <p className="text-base font-semibold text-black">
                <span className="font-normal text-slate-600">Donate №</span> {donate.id}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1/2 flex-col justify-between gap-3 p-6">
        <div className="absolute top-0 left-0 block h-full w-1 bg-slate-200" />

        <div className="flex justify-between gap-10">
          <div className="flex shrink-0 grow-0 flex-col gap-3">
            <h4 className="text-2xl font-semibold text-black">Payment Status</h4>
            <PaymentStatusBox status={donate.paymentStatus} />
          </div>
          <InvoiceInfoButton />
        </div>

        <div className="flex flex-col gap-10">
          <p className="flex items-center gap-1 text-base font-semibold">
            <span className="text-slate-600">Rank:</span>
            <span className="text-slate-900">1</span>
          </p>

          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2.5">
              <p className="text-base font-semibold text-slate-600">Your Donation</p>
              <p className="text-xl font-semibold text-slate-900">$ {donate.yourDonation}</p>
            </div>

            <GoToClubPageButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export { DonateCard }

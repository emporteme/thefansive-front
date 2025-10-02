import Image from "next/image"
import { Tag } from "@/shared/components/ui"
import { CertificateButton, InvoiceInfoButton, PaymentStatusTag } from "@/shared/components/widgets"
import { CopyFilled } from "@/shared/icons"
import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { copyText } from "@/shared/utils"
import { GoToClubPageButton } from "./go-to-club-page-button"

interface DonateCardProps {
  donate: {
    id: string
    title: string
    date: string
    image: string
    paymentStatus: PaymentStatus
    deliveryStatus: DeliveryStatus
    yourDonation: string
  }
}

const DonateCard: React.FC<DonateCardProps> = ({ donate }) => {
  return (
    <div className="flex h-full w-full shrink rounded-sm bg-white p-3">
      <div className="flex flex-1/2 gap-3">
        <Image
          src={donate.image}
          alt="order image"
          width={220}
          height={220}
          className="h-[220px] w-[220px] rounded-md object-cover"
        />
        <div className="flex flex-1 flex-col justify-between gap-3 pr-5">
          <div className="flex max-w-[300px] flex-col gap-2">
            <h3 className="text-xl leading-[1.2] font-semibold text-slate-900">{donate.title}</h3>
            <Tag label="Special Donation" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Created Date:</span>
              <Tag label={donate.date} />
            </p>
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Order №:</span>
              <Tag
                label={donate.id}
                className="text-sm"
                icon={<CopyFilled className="size-3.5" onClick={() => copyText(donate.id)} />}
              />
            </p>
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Payment Status:</span>
              <PaymentStatusTag status={donate.paymentStatus} />
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1/3 flex-col justify-between gap-3 pl-5">
        <div className="absolute top-0 left-0 block h-full w-[1px] bg-gray-300" />

        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold text-slate-900">Info</h4>

          <div className="flex flex-col gap-3">
            <p className="flex items-center justify-between gap-1">
              <span className="text-sm font-normal text-slate-600">Your Donation:</span>
              <Tag label={`$ ${donate.yourDonation}`} className="text-base font-semibold" />
            </p>

            <div className="flex flex-col gap-3">
              <CertificateButton type="donation" />
              <InvoiceInfoButton />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-5">
          <GoToClubPageButton />
        </div>
      </div>
    </div>
  )
}

export { DonateCard }

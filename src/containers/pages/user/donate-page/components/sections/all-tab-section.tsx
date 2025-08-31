import { DeliveryStatus, PaymentStatus } from "@/shared/types/order"
import { DonateCard } from "../widgets/donate-card"

const donates = [
  {
    id: "1234567899",
    date: "10.08.2025",
    type: "Liverpool FC",
    title: "Special Donation",
    paymentStatus: "paid" as PaymentStatus,
    deliveryStatus: "delivered" as DeliveryStatus,
    yourDonation: "5.000",
  },
]

const AllTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      {donates.map((donate) => (
        <DonateCard key={donate.id} donate={donate} />
      ))}
    </div>
  )
}

export { AllTabSection }

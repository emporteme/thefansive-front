import Image from "next/image"
import React from "react"
import { NFT, Quality, Signature, Soccer, Timer } from "@/shared/icons"

interface ITag {
  id: string | number
  label: string
  icon?: React.ReactNode
}
interface IFanSupportCardProps {
  id?: string | number
  status?: string
  date?: string
  image?: string
  images?: string[]
  name?: string
  orderType?: string
  description?: string
  tags?: ITag[]
  price?: number
  currency?: string
  deliveryTime?: string
}

const NewCard: React.FC<IFanSupportCardProps> = ({
  id,
  status,
  date,
  image,
  images,
  name,
  orderType,
  description,
  tags,
  price,
  currency,
  deliveryTime,
}) => {
  return (
    <div className="flex flex-col items-stretch gap-6 rounded-xl bg-white p-3 md:flex-row">
      <div className="relative aspect-square h-full w-2/5">
        <div className="absolute top-5 left-5 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-sm font-semibold text-slate-900">
          <Soccer />
          {status || "Soccer"}
        </div>
        <Image
          src={image || "/images/dev/new-1.png"}
          alt={name || "Lionel Messi Pro T-Shirt"}
          width={300}
          height={300}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex w-3/5 flex-col gap-3">
        <p className="text-slate-400">{date || "07/10/2025"}</p>
        <h2 className="text-xl font-semibold text-slate-900">{name || "Thefansive & Liverpool Collaboration"}</h2>
        <p className="text-sm font-medium text-slate-600">
          {description ||
            "We are proud to announce our official partnership with Liverpool Football Club. This collaboration brings fans closer to the game like never before."}
        </p>
      </div>
    </div>
  )
}

export default NewCard

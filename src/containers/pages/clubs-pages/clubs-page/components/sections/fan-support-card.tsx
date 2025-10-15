import Image from "next/image"
import React from "react"
import { NFT, Quality, Signature, Timer } from "@/shared/icons"

interface ITag {
  id: string | number
  label: string
  icon?: React.ReactNode
}
interface IFanSupportCardProps {
  id?: string | number
  status?: string
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

const FanSupportCard: React.FC<IFanSupportCardProps> = ({
  id: _id,
  status,
  image,
  images: _images,
  name,
  orderType,
  description,
  tags: _tags,
  price: _price,
  currency: _currency,
  deliveryTime: _deliveryTime,
}) => {
  return (
    <div className="flex flex-col items-stretch gap-3 p-3 md:flex-row">
      <div className="relative aspect-square h-full w-full">
        <div className="absolute top-0 left-0 rounded-md bg-orange-50 px-2 py-1 text-sm font-semibold text-orange-500">
          {status || "Limited Quantity"}
        </div>
        <Image
          src={image || "/images/dev/lionel-messi-pro-t-shirt.png"}
          alt={name || "Lionel Messi Pro T-Shirt"}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">{name || "Lionel Messi Pro T-Shirt"}</h2>
        <span className="mb-3 w-fit rounded-md border border-slate-100 bg-slate-50 px-2 py-1 text-sm font-semibold text-slate-700">
          {orderType || "Pre-order"}
        </span>
        <p className="mb-6.5 text-sm font-medium text-slate-600">
          {description ||
            "Purchase the specially designed Milan jersey, available only once and both support your team and add an unforgettable memory to your collection."}
        </p>
        <div className="mb-2.5 flex flex-col gap-2">
          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-900">
            <Signature />
            Athlete's signature
          </span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-900">
            <NFT />
            Premium Quality
          </span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-900">
            <Quality />
            Verification with NFT
          </span>
        </div>
        <div className="mb-1 flex items-center justify-between gap-10">
          <h3 className="text-xl font-extrabold text-slate-900">$ 100</h3>
          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-900">
            <Timer />
            <p>10d : 3h : 7m : 21s</p>
          </span>
        </div>
        <button className="mt-auto rounded-lg bg-slate-900 p-3 text-center text-base font-semibold text-white">
          Support Your Team
        </button>
      </div>
    </div>
  )
}

export default FanSupportCard

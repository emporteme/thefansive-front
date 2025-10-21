import React from "react"
import { formatCurrency } from "@/containers/pages/example-page/utils/format-utils"
import { useCurrentLocale } from "@/locale/client"
import { Button, CachedImage } from "@/shared/components/ui"
import { NFT, Quality, Signature, Timer } from "@/shared/icons"
import type { Product } from "@/shared/types/product"

interface IFanSupportCardProps {
  product: Product
}

const FanSupportCard: React.FC<IFanSupportCardProps> = ({ product }) => {
  const locale = useCurrentLocale()

  return (
    <div className="flex flex-col items-stretch gap-3 p-3 md:flex-row">
      <div className="relative aspect-square h-[275px] w-[275px]">
        <div className="absolute top-0 left-0 rounded-md bg-orange-50 px-2 py-1 text-sm font-semibold text-orange-500">
          Limited Quantity
        </div>
        <CachedImage
          src={"/images/dev/lionel-messi-pro-t-shirt.png"}
          alt={product.productName[locale] ?? ""}
          width={275}
          height={275}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-1">
        <div className="flex flex-col">
          <h2 className="mb-2 text-xl font-bold text-slate-900">{product.productName[locale]}</h2>
          <span className="mb-3 w-fit rounded-md border border-slate-100 bg-slate-50 px-2 py-1 text-xs font-semibold tracking-[0] text-gray-700">
            {"Pre-order"}
          </span>
          {product.productDescription?.[locale] && (
            <p className="text-xs leading-[1.2] font-medium tracking-[0] text-slate-600">
              {product.productDescription?.[locale]}
            </p>
          )}
        </div>
        <div>
          <div className="mb-2.5 flex flex-col gap-2">
            <span className="flex items-center gap-1.5 text-xs font-medium tracking-[-0.24px] text-slate-900">
              <Signature className="size-3 text-slate-600" />
              Athlete's signature
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium tracking-[-0.24px] text-slate-900">
              <Quality className="size-3 text-slate-600" />
              Premium Quality
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium tracking-[-0.24px] text-slate-900">
              <NFT className="size-3 text-slate-600" />
              Verification with NFT
            </span>
          </div>
          <div className="mb-1 flex items-center justify-between gap-1">
            <h3 className="text-xl leading-[1.5] font-extrabold tracking-[0] text-slate-900">
              {formatCurrency(product.priceCents)}
            </h3>
            <span className="flex items-center gap-1 text-sm tracking-[0] text-gray-600">
              <Timer />
              <p>10d : 3h : 7m : 21s</p>
            </span>
          </div>
          <Button size="lg" className="w-full" data-product-id={product.id}>
            Support Your Team
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FanSupportCard

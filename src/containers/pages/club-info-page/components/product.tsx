import Image from "next/image"
import { useCurrentLocale } from "@/locale/client"
import { Button } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { useCountdown } from "@/shared/hooks/client"
import { ArrowRightSmallRound, Comfortable, Fans, License } from "@/shared/icons"
import { Product as ProductType } from "@/shared/types/product"
interface ProductProps {
  product: ProductType
}

const getNumber = () => {
  return Math.floor(Math.random() * 5) + 1 // 1-5
}

const Product = ({ product }: ProductProps) => {
  const locale = useCurrentLocale()

  const saleEndDate = new Date()
  saleEndDate.setDate(saleEndDate.getDate() + 5)
  saleEndDate.setHours(23, 59, 59, 999)

  const { days, hours, minutes, seconds, isExpired } = useCountdown(saleEndDate, {
    onComplete: () => {
      console.log("Sale has ended!")
    },
  })

  return (
    <ContainerLayout className="mt-6">
      <div className="flex gap-10">
        <div className="rounded-2lg flex w-[500px] flex-none items-center justify-center bg-[#F4F4F4] p-6">
          <Image
            src={`/images/dev/products/${getNumber()}.png`}
            alt={product.productName[locale] || "Product image"}
            width={500}
            height={500}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="mb-6 flex items-baseline gap-4">
            <span className="shadow-e1 inline-block flex-none rounded-md bg-slate-500 p-2 font-semibold text-white">
              Sale Now
            </span>
            <h2 className="grow text-2xl font-bold">{product.productName[locale]}</h2>
          </div>
          <p className="mb-9 text-xl leading-[1.4] tracking-normal text-slate-900">
            Bring the passion of Liverpool onto the field with this exclusive green jersey, now available in limited
            quantities!
          </p>
          {!isExpired ? (
            <div className="mb-9 flex w-fit items-center gap-2.5 rounded-lg bg-slate-100 px-5 py-2.5">
              <div className="flex flex-col gap-1 p-1 text-center">
                <p className="text-2xl font-medium">{days.toString().padStart(2, "0")}</p>
                <p className="text-xs text-gray-500">Days</p>
              </div>
              <span className="block h-5 w-[1px] bg-slate-400"></span>
              <div className="flex flex-col gap-1 p-1 text-center">
                <p className="text-2xl font-medium">{hours.toString().padStart(2, "0")}</p>
                <p className="text-xs text-gray-500">Hours</p>
              </div>
              <span className="block h-5 w-[1px] bg-slate-400"></span>
              <div className="flex flex-col gap-1 p-1 text-center">
                <p className="text-2xl font-medium">{minutes.toString().padStart(2, "0")}</p>
                <p className="text-xs text-gray-500">Minutes</p>
              </div>
              <span className="block h-5 w-[1px] bg-slate-400"></span>
              <div className="flex flex-col gap-1 p-1 text-center">
                <p className="text-2xl font-medium">{seconds.toString().padStart(2, "0")}</p>
                <p className="text-xs text-gray-500">Seconds</p>
              </div>
            </div>
          ) : (
            <div className="mb-8 flex w-fit items-center gap-[10px] rounded-lg bg-red-100 px-5 py-[10px]">
              <p className="text-lg font-semibold text-red-600">Sale Ended</p>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex size-12 flex-none items-center justify-center rounded-lg bg-slate-200">
                  <License className="size-8" />
                </div>
                <p className="font-medium">Officially licensed product</p>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex size-12 flex-none items-center justify-center rounded-lg bg-slate-200">
                  <Comfortable className="size-8" />
                </div>
                <p className="font-medium">Comfortable and stylish for everyday wear</p>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex size-12 flex-none items-center justify-center rounded-lg bg-slate-200">
                  <Fans className="size-8" />
                </div>
                <p className="font-medium">A unique piece for any fan collection</p>
              </div>
            </div>
            <div className="flex-none self-end">
              <Button size="lg">
                Support Your Team <ArrowRightSmallRound />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  )
}

export default Product

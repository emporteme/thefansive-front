"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import { Button } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import Check from "@/shared/icons/check"
import CreditCard from "@/shared/icons/credit-card"
import { Currency, getCurrencySymbol } from "@/shared/store/currency-store"
import { getRoutes } from "@/shared/utils/get-routes"

const fakeDeliveryData = [
  {
    id: 1,
    image: "/images/dev/lionel-messi-pro-t-shirt.png",
    title: "UPS Access Points",
    deliveryTerm: 10,
    price: 100,
    currency: "USD" as Currency,
  },
  {
    id: 2,
    image: "/images/dev/lionel-messi-pro-t-shirt.png",
    title: "DHL - Express",
    deliveryTerm: 10,
    price: 300,
    currency: "USD" as Currency,
  },
  {
    id: 3,
    image: "/images/dev/lionel-messi-pro-t-shirt.png",
    title: "FedEx",
    deliveryTerm: 10,
    price: 1000,
    currency: "USD" as Currency,
  },
]

const fakeOrderSummary = {
  total: 1400,
  currency: "USD" as Currency,
  prices: [
    {
      text: "Product:",
      sum: 500,
      currency: "USD" as Currency,
    },
    {
      text: "Tax:",
      sum: 20,
      currency: "USD" as Currency,
    },
  ],
}

const Page: FC = () => {
  const router = useRouter()
  const routes = getRoutes()
  const path = routes.cart.payment()
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const getConicGradient = (colors: string[], startDeg = 45) => {
    const step = 100 / colors.length
    return `conic-gradient(from ${startDeg}deg, ${colors
      .map((c, i) => `${c} ${i * step}% ${(i + 1) * step}%`)
      .join(", ")})`
  }

  const handleCheckout = () => {
    router.push(path)
  }

  return (
    <div className="py-14">
      <ContainerLayout>
        {fakeOrderSummary && fakeDeliveryData ? (
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="rounded-[20px] bg-slate-100 px-5 py-6 lg:grow">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-end">
                  <h2 className="text-4xl font-bold text-gray-800">Shipping Address</h2>
                </div>
                <div>
                  <Button size="lg" className="flex bg-white text-slate-700">
                    Add New Address
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="mb-8 text-4xl font-bold text-gray-800">Delivery Method</h2>
                <div className="mb-2 flex max-w-[85%] border-b border-gray-600 pb-3">
                  <div className="basis-1/2">
                    <span className="font-medium text-gray-800">Delivery Company</span>
                  </div>
                  <div className="basis-[25%] justify-center text-center">
                    <span className="font-medium text-gray-800">Estimated Delivery</span>
                  </div>
                  <div className="flex basis-[25%] justify-end">
                    <span className="text-end font-medium text-gray-800">Price</span>
                  </div>
                </div>
              </div>
              {fakeDeliveryData?.map((item, index) => {
                const isLast = index === fakeDeliveryData.length - 1
                const activeItem = selectedId === item.id

                return (
                  <div
                    className={`flex max-w-[85%] cursor-pointer items-center py-5 ${
                      !isLast ? "border-b border-gray-200" : ""
                    } `}
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                  >
                    <div className="flex basis-1/2 items-center gap-4">
                      <div className="flex items-center gap-3 select-none">
                        <span
                          className={`relative inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 ${
                            activeItem ? "border-slate-900 bg-slate-900" : "border-slate-600"
                          } transition-colors duration-150`}
                        >
                          <Check
                            className={`pointer-events-none absolute h-2 w-[10px] text-white ${
                              activeItem ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-150`}
                          />
                        </span>
                      </div>
                      <div className="h-8 w-8 flex-none overflow-hidden rounded-sm">
                        <Image
                          src={item.image}
                          width={32}
                          height={32}
                          alt={item?.title}
                          className="object-fit-cover h-auto w-full"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-slate-900">{item?.title}</h3>
                    </div>
                    <div className="basis-[25%] text-center">
                      <p className="text-sm font-medium text-black">{item.deliveryTerm} days</p>
                    </div>
                    <div className="flex basis-[25%] justify-end">
                      <p className="text-end text-sm font-medium text-black">
                        {getCurrencySymbol(item.currency)}
                        {item?.price}
                      </p>
                    </div>
                  </div>
                )
              })}
              <div className="">
                <h2 className="mb-8 text-4xl font-bold text-gray-800">Payment Method</h2>
                <div className="flex gap-5">
                  <Button size="lg">
                    <CreditCard className="text-white" /> Credit/Bank Card
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[500px] flex-none lg:w-[392px]">
              <div className="mb-6 rounded-[20px] bg-slate-100 p-5">
                <h4 className="mb-4 text-2xl font-bold">Order summary</h4>
                <div className="mb-4 flex flex-col gap-2">
                  {fakeOrderSummary?.prices?.map((item, index) => (
                    <div className="flex justify-between" key={index}>
                      <span className="text-gray-500">{item.text}</span>
                      <span className="font-medium">
                        {getCurrencySymbol(item.currency)}
                        {item.sum}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total:</span>
                  <span className="text-xl font-bold">
                    {getCurrencySymbol(fakeOrderSummary.currency)}
                    {fakeOrderSummary.total}
                  </span>
                </div>
              </div>
              <Button size="xl" className="w-full justify-center" onClick={() => handleCheckout()}>
                Go to Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <div className="mb-14 flex max-w-[320px] justify-center">
              <Image
                src="/images/fallbacks/empty-cart-image.webp"
                alt="cart banner"
                width={320}
                height={320}
                className="h-auto w-full"
              />
            </div>
            <h2 className="mb-6 text-2xl font-bold sm:text-4xl">There are no items in your cart</h2>
            <p className="text-md mb-12 font-semibold sm:text-xl">
              Be more than a fan, visit your club’s page and show your true support
            </p>
            <Button size="xl" className="justify-center sm:min-w-[374px]">
              Choose your team
            </Button>
          </div>
        )}
      </ContainerLayout>
    </div>
  )
}

export default Page

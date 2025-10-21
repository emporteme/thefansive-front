"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"
import { Button, CachedImage } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import CancelCircle from "@/shared/icons/cancel-circle"
import MinusSign from "@/shared/icons/minus-sign"
import PlusSign from "@/shared/icons/plus-sign"
import { Currency, getCurrencySymbol } from "@/shared/store/currency-store"
import { getConicGradient } from "@/shared/utils"
import { getRoutes } from "@/shared/utils/get-routes"
import EmptyCart from "./components/empty-cart"

const fakeProductsData = [
  {
    id: 1,
    image: "/images/dev/lionel-messi-pro-t-shirt.png",
    title: "Muhammed Salah T-Shirt",
    size: "L",
    colors: ["#B72F3D"],
    label: "Fan Support",
    price: 100,
    currency: "USD" as Currency,
  },
  {
    id: 2,
    image: "/images/dev/lionel-messi-pro-t-shirt.png",
    title: "Liverpool Away Shirt ST",
    size: "XL",
    colors: ["#55C1BA", "#262626"],
    label: "Fan Support",
    price: 300,
    currency: "USD" as Currency,
  },
  {
    id: 3,
    image: "/images/dev/lionel-messi-pro-t-shirt.png",
    title: "Liverpool Donate",
    description: "For your payment, you will receive a certificate recognizing your contribution to Liverpool FC.",
    label: "Fan Support",
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

const CartPage: FC = () => {
  const router = useRouter()
  const routes = getRoutes()
  const path = routes.cart.payment()

  const handleCheckout = () => {
    router.push(path)
  }

  return (
    <div className="py-14">
      <ContainerLayout>
        {fakeOrderSummary && fakeProductsData ? (
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="rounded-[20px] bg-slate-100 px-5 pt-6 lg:grow">
              <div className="mb-14 flex items-center justify-between">
                <div className="flex items-end">
                  <h2 className="text-4xl font-bold text-gray-800">Cart&nbsp;</h2>
                  <p className="leading-6 text-slate-700">(2 products)</p>
                </div>
                <div>
                  <Button
                    size="lg"
                    className="flex border-0 bg-[transparent] text-red-700 shadow-none hover:bg-[transparent] hover:shadow-xs"
                  >
                    <CancelCircle className="text-red-700" />
                    Clear cart
                  </Button>
                </div>
              </div>
              <div className="mb-2 flex border-b border-gray-600 pb-3">
                <div className="basis-1/2">
                  <span className="text-xl font-semibold text-gray-800">Product</span>
                </div>
                <div className="basis-[20%]">
                  <span className="text-xl font-semibold text-gray-800">Count</span>
                </div>
                <div className="flex basis-[20%] justify-end">
                  <span className="text-end text-xl font-semibold text-gray-800">Price</span>
                </div>
                <div className="basis-[10%]"></div>
              </div>
              {fakeProductsData?.map((item, index) => {
                return (
                  <div
                    className={`flex items-center py-5 ${
                      index !== fakeProductsData.length - 1 ? "border-b border-gray-200" : null
                    }`}
                    key={item.id}
                  >
                    <div className="flex basis-1/2 items-start gap-4 pe-4">
                      <CachedImage
                        src={item.image}
                        width={100}
                        height={100}
                        alt={item?.title}
                        className="object-fit-cover h-auto w-[100px] flex-none"
                      />
                      <div className="flex grow flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold text-slate-900">{item?.title}</h3>
                          {item?.size && (
                            <p className="text-slate-700">
                              <span>Size:</span>
                              <span className="font-semibold">{item?.size}</span>
                            </p>
                          )}
                          {item?.colors && (
                            <div className="">
                              <span
                                className="inline-block size-4 rounded-full"
                                style={{ background: getConicGradient(item?.colors) }}
                              />
                            </div>
                          )}
                          {item?.description && <p className="text-[13px] text-slate-700">{item?.description}</p>}
                        </div>
                        <div className="mt-auto">
                          <span className="text-xs font-medium text-slate-600">{item?.label}</span>
                        </div>
                      </div>
                    </div>
                    <div className="basis-[20%]">
                      <div className="flex items-center gap-[10px]">
                        <Button size="sm" className="flex h-10 w-10 items-center justify-center rounded-md">
                          <MinusSign className="fill-white" />
                        </Button>
                        <input
                          type="number"
                          className="h-8 max-w-14 [appearance:textfield] appearance-none rounded-md border border-slate-100 bg-slate-100 px-2 py-[10px] text-center text-xs leading-4 font-semibold outline-none focus:bg-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />
                        <Button size="sm" className="flex h-10 w-10 items-center justify-center rounded-md">
                          <PlusSign className="fill-white" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex basis-[20%] justify-end">
                      <p className="text-end text-xl font-bold">
                        {getCurrencySymbol(item.currency)}
                        {item?.price}
                      </p>
                    </div>
                    <div className="flex basis-[10%] justify-end">
                      <Button
                        size="lg"
                        className="flex border-0 bg-[transparent] text-red-700 shadow-none hover:bg-[transparent] hover:shadow-xs"
                      >
                        <CancelCircle className="text-red-700" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="w-full max-w-[500px] flex-none lg:w-[286px]">
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
          <EmptyCart />
        )}
      </ContainerLayout>
    </div>
  )
}

export default CartPage

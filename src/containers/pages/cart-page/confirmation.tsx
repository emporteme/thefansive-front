import ContainerLayout from "@/shared/components/ui/container-layout"
import { getCurrencySymbol } from "@/shared/constants/currencies"
import { Currency } from "@/shared/store/currency-store"
import { getConicGradient } from "@/shared/utils/getConicGradient"
import Image from "next/image"
import { FC } from "react"

const fakeData = [
  {
    text: "Product:",
    sum: 100,
    currency: "USD" as Currency,
  },
  {
    text: "Tax:",
    sum: 20,
    currency: "USD" as Currency,
  },
]

const CartPage: FC = () => {
  return (
    <div className="py-14">
      <ContainerLayout>
        <div className="mx-auto max-w-[820px]">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-4xl font-bold">Thank you</h2>
            <p className="text-xl font-medium text-slate-600">Your order has been placed successfully</p>
          </div>
          <div
            className="my-12 h-[2px] w-full"
            style={{
              backgroundImage: "url(/images/dev/pattern-line.png)",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
          ></div>
          <div className="flex flex-col gap-8">
            <div className="w-full rounded-[20px] bg-slate-100 p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[6px]">
                  <p className="font-medium text-slate-600">Order No:</p>
                  <p className="text-2xl font-bold">212459637998223</p>
                </div>
                <div className="flex flex-col gap-[6px] text-end">
                  <p className="font-medium text-slate-600">Order date:</p>
                  <p className="text-2xl font-bold">11.09.2025</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-[20px] bg-slate-100 p-6">
              <h3 className="mb-8 text-2xl font-bold">Items Orders</h3>
              <div className="flex flex-col gap-8">
                <div className="flex items-start justify-between">
                  <div className="flex grow items-stretch gap-[10px]">
                    <Image
                      src="/images/dev/lionel-messi-pro-t-shirt.png"
                      alt="item"
                      width={60}
                      height={60}
                      className="h-[60px] w-auto rounded-md object-cover"
                    />
                    <div className="flex flex-col justify-between py-1">
                      <p className="text-sm font-medium text-slate-900">Muhammed Salah T-Shirt</p>
                      <div className="gap flex items-center gap-[10px]">
                        <div className="flex items-end gap-1">
                          <p className="text-xs text-slate-600">Size:</p>
                          <span className="flex aspect-square w-fit min-w-4 items-center justify-center rounded-[4px] bg-slate-900 px-[2px] text-[8px] font-semibold text-white">
                            XL
                          </span>
                        </div>
                        <div className="flex items-end gap-1">
                          <p className="text-xs text-slate-600">Size:</p>
                          <span
                            className="flex aspect-square w-fit min-w-4 items-center justify-center rounded-[4px] bg-slate-900 px-[2px] text-[8px] font-semibold text-white"
                            style={{ background: getConicGradient(["#262626", "#55C1BA"]) }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-[20%]">
                    <p className="text-sm font-medium">1</p>
                  </div>
                  <div className="basis-[20%]">
                    <p className="text-end text-sm font-medium">
                      {getCurrencySymbol("USD" as Currency)}
                      {100}
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex grow items-stretch gap-[10px]">
                    <Image
                      src="/images/dev/lionel-messi-pro-t-shirt.png"
                      alt="item"
                      width={60}
                      height={60}
                      className="h-[60px] w-auto rounded-md object-cover"
                    />
                    <div className="flex flex-col justify-between py-1">
                      <p className="text-sm font-medium text-slate-900">Muhammed Salah T-Shirt</p>
                      <div className="gap flex items-center gap-[10px]">
                        <div className="flex items-end gap-1">
                          <p className="text-xs text-slate-600">Size:</p>
                          <span className="flex aspect-square w-fit min-w-4 items-center justify-center rounded-[4px] bg-slate-900 px-[2px] text-[8px] font-semibold text-white">
                            XL
                          </span>
                        </div>
                        <div className="flex items-end gap-1">
                          <p className="text-xs text-slate-600">Size:</p>
                          <span
                            className="flex aspect-square w-fit min-w-4 items-center justify-center rounded-[4px] bg-slate-900 px-[2px] text-[8px] font-semibold text-white"
                            style={{ background: getConicGradient(["#262626", "#55C1BA"]) }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-[20%]">
                    <p className="text-sm font-medium">1</p>
                  </div>
                  <div className="basis-[20%]">
                    <p className="text-end text-sm font-medium">
                      {getCurrencySymbol("USD" as Currency)}
                      {100}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full rounded-[20px] bg-slate-100 p-6">
              <h3 className="mb-8 text-2xl font-bold">Order details</h3>
              <div className="flex items-start justify-between">
                <p className="font-normal text-gray-500">Full Name:</p>
                <p className="text-end font-medium text-gray-800">Angelo Curtis</p>
              </div>
            </div>
            <div className="w-full rounded-[20px] bg-slate-100 p-6">
              <h3 className="mb-8 text-2xl font-bold">Total Price</h3>
              <div className="mb-4 flex flex-col gap-4">
                {fakeData.map((item, index) => (
                  <div
                    className={`flex items-center justify-between border-b pb-4 ${
                      index === fakeData.length - 1 ? "border-gray-400" : "border-gray-200"
                    }`}
                    key={index}
                  >
                    <p className="font-normal text-gray-500">{item.text}</p>
                    <p className="text-end font-semibold text-gray-800">
                      {getCurrencySymbol(item.currency)} {item.sum}
                    </p>
                  </div>
                ))}
              </div>
              {fakeData.length > 0 && (
                <div className="flex items-center justify-end gap-2">
                  <p className="text-2xl font-semibold text-slate-600">Total:</p>
                  <p className="text-end text-2xl font-semibold text-gray-900">
                    {getCurrencySymbol(fakeData[0]?.currency as Currency)}{" "}
                    {fakeData.reduce((acc, item) => acc + item.sum, 0)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default CartPage

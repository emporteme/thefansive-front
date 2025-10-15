"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import AddNewAddressPopup from "@/shared/components/elements/add-new-address/add-new-address"
import EditAddressPopup from "@/shared/components/elements/edit-address/edit-address"
import { Button } from "@/shared/components/ui"
import Checkbox from "@/shared/components/ui/checkbox"
import ContainerLayout from "@/shared/components/ui/container-layout"
import Input from "@/shared/components/ui/input"
import { useModal } from "@/shared/hooks/client/use-modal"
import Check from "@/shared/icons/check"
import CreditCard from "@/shared/icons/credit-card"
import NowPayments from "@/shared/icons/now-payments"
import { Currency, getCurrencySymbol } from "@/shared/store/currency-store"
import { getRoutes } from "@/shared/utils/get-routes"
import AddressItem from "./components/address-item"

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

const fakeAddresses = {
  title: "Home",
  items: [
    "Magomed Tailov - +90 94 664 66 61",
    "Turkey, Istanbul, Sultanahmet Sokak, No. 15, Fatih, 34122 ",
    "TR227305258 - QNB Finansbank",
  ],
}

const PaymentPage: FC = () => {
  const router = useRouter()
  const routes = getRoutes()
  const path = routes.cart.confirmation()
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"card" | "crypto">("card")
  const [isCheckedSameAddress, setIsCheckedSameAddress] = useState<boolean>(false)
  const [isCheckedAgreePayment, setIsCheckedAgreePayment] = useState<boolean>(false)

  const addNewAddressPopup = useModal("add-new-address-modal")
  const editAddressPopup = useModal("edit-address-modal")

  const handleCheckboxSameAddressChange = () => {
    setIsCheckedSameAddress(!isCheckedSameAddress)
  }

  const handleCheckboxAgreePaymentChange = () => {
    setIsCheckedAgreePayment(!isCheckedAgreePayment)
  }

  const handleCheckout = () => {
    router.push(path)
  }

  return (
    <div className="py-14">
      <ContainerLayout>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="w-full rounded-[20px] bg-slate-100 px-5 py-6 lg:grow">
            <div className="mb-10">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-end">
                  <h2 className="text-4xl font-bold text-gray-800">Shipping Address</h2>
                </div>
                <div>
                  <Button size="lg" variant="light" className="flex" onClick={addNewAddressPopup.open}>
                    Add New Address
                  </Button>
                </div>
              </div>
              <div className="">
                <div className="mb-6 flex gap-8">
                  <AddressItem
                    title={fakeAddresses.title}
                    items={fakeAddresses.items}
                    onClick={editAddressPopup.open}
                  />
                </div>
                <div>
                  <Checkbox
                    id="same-address"
                    isChecked={isCheckedSameAddress}
                    onChange={handleCheckboxSameAddressChange}
                  >
                    <span className="ml-3 text-lg font-medium text-gray-800">Send an invoice to the same address</span>
                  </Checkbox>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h2 className="mb-8 text-4xl font-bold text-gray-800">Delivery Method</h2>
              <div className="mb-2 flex border-b border-gray-600 pb-3 md:max-w-[85%]">
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
              {fakeDeliveryData?.map((item, index) => {
                const isLast = index === fakeDeliveryData.length - 1
                const activeItem = selectedId === item.id

                return (
                  <div
                    className={`flex cursor-pointer items-center py-5 md:max-w-[85%] ${
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
            </div>
            <div>
              <h2 className="mb-8 text-4xl font-bold text-gray-800">Payment Method</h2>
              <div className="mb-8 flex gap-5">
                <Button
                  size="lg"
                  variant={activeTab === "card" ? "default" : "light"}
                  className="group"
                  onClick={() => setActiveTab("card")}
                >
                  <CreditCard /> Credit/Bank Card
                </Button>
                <button
                  className={`group flex h-10 flex-col items-start justify-center gap-[1px] rounded-md px-6 text-left ${
                    activeTab === "crypto"
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-900 hover:text-white focus:bg-slate-900 focus:text-white active:bg-slate-900 active:text-white"
                  }`}
                  onClick={() => setActiveTab("crypto")}
                >
                  <NowPayments className="w-[118px]" />
                  <span className="text-[10px] font-semibold">Cryptocurrency</span>
                </button>
              </div>
              {activeTab === "card" && (
                <div className="max-w-[274px]">
                  <Input
                    label="Card Number"
                    id="card-number"
                    type="number"
                    value=""
                    placeholder="1111 2222 3333 4444"
                    onChange={() => {}}
                    className="mb-3"
                  />
                  <div className="flex gap-4">
                    <Input
                      label="Card Date"
                      id="card-date"
                      type="text"
                      value=""
                      placeholder="MM/YY"
                      onChange={() => {}}
                    />
                    <Input label="CVC" id="card-cvc" type="number" value="" placeholder="123" onChange={() => {}} />
                  </div>
                </div>
              )}
              {activeTab === "crypto" && (
                <div className="flex flex-col gap-6 text-slate-900">
                  <p>
                    You can securely complete your payment using cryptocurrency via NOWPayments. To avoid high
                    transaction fees (gas fees), we recommend using TRC-20, BEP-20.
                  </p>
                  <p>
                    Please make sure to enter your wallet address and other required details correctly during the
                    payment process. Since cryptocurrency transactions are irreversible, any losses caused by incorrect
                    information or mistakes are the sole responsibility of the user.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="w-full max-w-[500px] flex-none lg:w-[392px]">
              <div className="mb-4 rounded-[20px] bg-slate-100 p-5">
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
              <div className="mb-6">
                <Checkbox
                  id="agree-payment"
                  isChecked={isCheckedAgreePayment}
                  onChange={handleCheckboxAgreePaymentChange}
                  className="gap-[10px]"
                >
                  <span className="-mt-[3px] text-sm leading-6">
                    I acknowledge that the products I purchase are pre-order, custom-produced and cannot be returned or
                    exchanged. <span className="text-red-500">*</span>
                  </span>
                </Checkbox>
              </div>
              <Button size="xl" className="w-full justify-center" onClick={() => handleCheckout()}>
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </ContainerLayout>
      <AddNewAddressPopup
        open={addNewAddressPopup.isOpen}
        onClose={addNewAddressPopup.close}
        onSaveAddress={(data) => {
          console.log("Address saved:", data)
          addNewAddressPopup.close()
        }}
      />
      <EditAddressPopup
        open={editAddressPopup.isOpen}
        onClose={editAddressPopup.close}
        onSaveAddress={(data) => {
          console.log("Address edited:", data)
          editAddressPopup.close()
        }}
      />
    </div>
  )
}

export default PaymentPage

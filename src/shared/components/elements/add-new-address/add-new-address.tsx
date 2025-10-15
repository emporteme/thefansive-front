"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { OfficeWhiteBlack, Personal } from "@/shared/icons"
import countries from "@/shared/utils/countries.json"

import { Button } from "../../ui"
import Input from "../../ui/input"
import { Popup } from "../../ui/popup/popup"
import { PopupHeader } from "../../ui/popup/popup-header"
import RadixSelect, { OptionType } from "../../ui/radix-select"

export enum BillingType {
  Personal = "personal",
  Business = "business",
}

const addressSchema = z.object({
  addressTitle: z.string().optional(),
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  phoneCountryCode: z.string().min(1, { message: "Country code is required" }),
  phoneNumber: z.string().min(5, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  addressLine: z.string().min(1, { message: "Address Line is required" }),
  zipCode: z.string().min(1, { message: "ZIP Code is required" }),
  billingType: z.enum([BillingType.Personal, BillingType.Business]).optional(),
})
const countryOptions: OptionType[] = Array.from(
  new Map(countries.map((country) => [country.code, country])).values()
).map((country) => ({
  key: country.code,
  value: country.name,
  label: country.name,
  flag: country.emoji,
}))

const phoneCodeOptions: OptionType[] = Array.from(
  new Map(countries.map((country) => [country.dial_code, country])).values()
).map((country) => ({
  key: country.dial_code,
  value: country.dial_code,
  label: `${country.emoji} ${country.dial_code}`,
}))

export type AddressFormValues = z.infer<typeof addressSchema>

interface AddNewAddressPopupProps {
  onClose: () => void
  onSaveAddress: (data: AddressFormValues) => void
  initialAddressData?: Partial<AddressFormValues>
  open: boolean
}

const AddNewAddressPopup: React.FC<AddNewAddressPopupProps> = ({
  onClose,
  onSaveAddress,
  initialAddressData,
  open = true,
}) => {
  const { register, handleSubmit, control, watch, setValue, reset } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    mode: "onChange",
    defaultValues: {
      billingType: BillingType.Personal,
      ...initialAddressData,
    },
  })

  const values = watch()
  const isFirstNameFilled = Boolean(values.firstName?.trim())
  const isLastNameFilled = Boolean(values.lastName?.trim())
  const isPhoneCountryCodeFilled = Boolean(values.phoneCountryCode?.toString().trim())
  const isPhoneNumberFilled = Boolean(values.phoneNumber?.toString().trim())
  const isCountryFilled = Boolean(values.country?.trim())
  const isCityFilled = Boolean(values.city?.trim())
  const isStateFilled = Boolean(values.state?.trim())
  const isAddressLineFilled = Boolean(values.addressLine?.trim())
  const isZipCodeFilled = Boolean(values.zipCode?.toString().trim())

  const isRequiredFilled =
    isFirstNameFilled &&
    isLastNameFilled &&
    isPhoneCountryCodeFilled &&
    isPhoneNumberFilled &&
    isCountryFilled &&
    isCityFilled &&
    isStateFilled &&
    isAddressLineFilled &&
    isZipCodeFilled

  const onSubmit = async (data: AddressFormValues) => {
    onSaveAddress(data)
    handleClose()
  }

  const handleFormSubmit = () => {
    handleSubmit(onSubmit)()
  }

  const handleBillingTypeChange = (type: "Personal" | "Business") => {
    setValue("billingType", type as BillingType)
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Popup open={open} modalId="add-new-address-modal" onClose={handleClose}>
      <div className="max-h-[90vh] space-y-8 overflow-y-auto">
        <div className="flex w-full flex-col gap-6 rounded-[20px] bg-slate-100 p-6">
          <PopupHeader onClose={handleClose}>Add new address</PopupHeader>
          <div className="flex flex-col gap-5">
            <Input
              id="addressTitle"
              label="Address Title"
              type="text"
              placeholder="Address 1"
              registerProps={register("addressTitle")}
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                id="firstName"
                label="Name"
                type="text"
                placeholder="Enter your name"
                required
                registerProps={register("firstName")}
              />
              <Input
                id="lastName"
                label="Last Name"
                type="text"
                placeholder="Enter your surname"
                required
                registerProps={register("lastName")}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="phoneNumber" className="mb-2 block ps-1 text-sm font-medium text-gray-700">
                  Number <span className="text-red-500">*</span>
                </label>
                <div className="focus:shadow-outline flex rounded-[12px] border border-slate-100 bg-white focus-within:border-blue-500">
                  <Controller
                    name="phoneCountryCode"
                    control={control}
                    render={({ field }) => (
                      <RadixSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        id="phoneCountryCode"
                        options={phoneCodeOptions}
                        placeholder="+000"
                        className="min-w-[120px] border-r-0"
                        variant="left"
                      />
                    )}
                  />
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter your number"
                    className={`focus:shadow-outline flex-grow rounded-r-[12px] bg-white px-4 py-3 text-base font-medium placeholder-slate-400 focus:border-transparent focus:outline-none`}
                    {...register("phoneNumber")}
                  />
                </div>
              </div>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <RadixSelect
                    value={field.value}
                    onValueChange={field.onChange}
                    id="country"
                    label="Country"
                    required
                    options={countryOptions}
                    placeholder="Choose your country"
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                id="city"
                label="City"
                type="text"
                placeholder="Enter you city"
                required
                registerProps={register("city")}
              />
              <Input
                id="state"
                label="State"
                type="text"
                placeholder="Enter you state"
                required
                registerProps={register("state")}
              />
            </div>
            <div>
              <Input
                id="addressLine"
                label="Address line"
                type="text"
                placeholder="Enter you address line"
                required
                registerProps={register("addressLine")}
              />
              <p className="mt-2 ps-1 text-sm text-gray-500">
                To ensure your order is delivered without any issues, please make sure to provide complete details such
                as neighborhood, street, avenue, and building information.
              </p>
            </div>
            <Input
              id="zipCode"
              label="ZIP Code"
              type="text"
              placeholder="Enter code"
              required
              registerProps={register("zipCode")}
            />
            <div>
              <label className="mb-2 block ps-1 text-sm font-medium text-gray-700">Billing Type</label>
              <div className="flex w-fit space-x-2">
                <Button
                  variant={watch("billingType") === BillingType.Personal ? "default" : "light"}
                  size="lg"
                  onClick={() => handleBillingTypeChange("Personal")}
                >
                  <Personal />
                  Personal
                </Button>
                <Button
                  variant={watch("billingType") === BillingType.Business ? "default" : "light"}
                  size="lg"
                  onClick={() => handleBillingTypeChange("Business")}
                >
                  <OfficeWhiteBlack />
                  Business
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[20px] bg-white p-6">
          <p className="text-sm text-slate-600">
            Please check the data and if everything is correct, save the changes.
          </p>
          <Button
            type="button"
            size="lg"
            className={`min-w-[180px] justify-center text-white ${
              !isRequiredFilled ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleFormSubmit}
            disabled={!isRequiredFilled}
          >
            Save
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export default AddNewAddressPopup

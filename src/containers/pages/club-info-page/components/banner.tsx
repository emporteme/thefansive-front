import Image from "next/image"
import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"

const Banner = () => {
  return (
    <ContainerLayout>
      <div className="mb-6">
        <h2 className="mb-3 text-4xl leading-[1.4] font-bold tracking-normal text-slate-900">Liverpool Fan Support</h2>
        <p className="text-xl leading-[1.4] font-medium tracking-normal text-slate-900">
          Support the club you love and, by going beyond just being a spectator, actively contribute to its success both
          on and off the field.
        </p>
      </div>
      <Image
        src="/images/dev/club-fan-support-banner.png"
        alt="Banner Team"
        width={1000}
        height={375}
        className="block h-auto w-full rounded-[20px]"
      />
    </ContainerLayout>
  )
}

export default Banner

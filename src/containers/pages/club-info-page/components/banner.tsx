import Image from "next/image"
import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"

const Banner = () => {
  return (
    <ContainerLayout className="py-4">
      <div className="mb-3">
        <h2 className="mb-3 text-4xl font-semibold">Liverpool Fan Support</h2>
        <p>
          Support the club you love and, by going beyond just being a spectator, actively contribute to its success both
          on and off the field.
        </p>
      </div>
      <Image
        src="/images/dev/banner-team.jpg"
        alt="Banner Team"
        width={1000}
        height={1000}
        className="block h-auto w-full rounded-[20px]"
      />
    </ContainerLayout>
  )
}

export default Banner

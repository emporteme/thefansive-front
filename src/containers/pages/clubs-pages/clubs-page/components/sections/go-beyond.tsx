import React from "react"
import { CachedImage } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"

const GoBeyond: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <ContainerLayout className="flex flex-col pt-10 pb-15">
        <h2 className="mb-7.5 text-center text-4xl font-semibold">Go Beyond Being a Spectator</h2>
        <p className="horizontal-justify mx-auto mb-10 max-w-[725px] text-lg leading-[1.2] font-medium tracking-[-1px]">
          Thefansive transforms fandom from passive spectating into an active force of support. Fans can directly
          contribute to their favorite clubs and athletes, helping shape their future, strengthen their success and
          shift the balance on the competitive stage, fueling new trophies, new championships and unforgettable
          victories.
          <br />
          <br />
          By integrating the technologies of the future with the world of sports, our platform builds thriving
          communities across both sports and Web3. Fans not only support their teams but also earn rewards and enjoy a
          dynamic, engaging community experience.
          <br />
          <br />
          Whether big or small, every club and athlete can access sustainable funding through Thefansive. In return,
          fans gain access to exclusive products, events and limited-edition collectibles, turning their support into a
          lasting legacy.
        </p>
        <CachedImage src="/logo-white.svg" alt="logo - thefansive.com" width={120} height={20} className="mx-auto" />
      </ContainerLayout>
    </div>
  )
}

export default GoBeyond

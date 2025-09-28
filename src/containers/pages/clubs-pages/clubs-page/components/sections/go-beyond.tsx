import Image from "next/image"
import React from "react"

const GoBeyond: React.FC = () => {
  return (
    <div className="flex flex-col gap-7.5 bg-black px-[15vw] py-15 text-white">
      <h2 className="text-center text-4xl font-semibold">Go Beyond Being a Spectator</h2>
      <p className="pb-11 text-lg leading-5.5 font-medium">
        Thefansive transforms fandom from passive spectating into an active force of support. Fans can directly
        contribute to their favorite clubs and athletes, helping shape their future, strengthen their success and shift
        the balance on the competitive stage, fueling new trophies, new championships and unforgettable victories.
        <br />
        <br />
        By integrating the technologies of the future with the world of sports, our platform builds thriving communities
        across both sports and Web3. Fans not only support their teams but also earn rewards and enjoy a dynamic,
        engaging community experience.
        <br />
        <br />
        Whether big or small, every club and athlete can access sustainable funding through Thefansive. In return, fans
        gain access to exclusive products, events and limited-edition collectibles, turning their support into a lasting
        legacy.
      </p>
      <Image src="/images/dev/logo-white.svg" alt="Go Beyond" width={120} height={19} className="mx-auto mb-10" />
    </div>
  )
}

export default GoBeyond

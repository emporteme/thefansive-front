import Image from "next/image"
import React from "react"

type CardProps = {
  id: number
  title: string
  description: string
  date: string
  image: string
  handleClick: () => void
}

const Card = ({ title, description, date, image, handleClick }: CardProps) => {
  return (
    <div
      className="align-center flex cursor-pointer flex-col justify-center gap-[24px] rounded-[16px] border bg-white p-[24px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="relative h-[220px] w-[233px] rounded-[8px] border-[1px] bg-gray-200">
        <Image src={image} alt={"alternative"} fill className="max-h-[220px] max-w-[233px] object-cover" />
      </div>
      <div className="flex h-[152px] w-[233px] flex-col gap-[12px] overflow-hidden">
        <p className="text-base">{date}</p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  )
}

export { Card, type CardProps }

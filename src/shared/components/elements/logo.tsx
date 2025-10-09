import Image from "next/image"
import Link from "next/link"
import React from "react"
import { cn } from "@/shared/lib/utils"
import { getRoutes } from "@/shared/utils/get-routes"

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const routes = getRoutes()

  return (
    <Link href={routes.home()}>
      <Image
        src="/logo.svg"
        alt="logo - thefansive.com"
        width={140}
        height={25}
        className={cn("h-auto min-w-35", className)}
      />
    </Link>
  )
}

export default Logo

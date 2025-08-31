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
        src="/logo-1.png"
        alt="logo - thefansive.com"
        width={140}
        height={140}
        className={cn("min-w-35", className)}
      />
    </Link>
  )
}

export default Logo

import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/logo-1.png" alt="logo - thefansive.com" width={140} height={140} className="min-w-35" />
    </Link>
  )
}

export default Logo

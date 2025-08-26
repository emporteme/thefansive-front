import Link from "next/link"
import React from "react"
import Logo from "@/shared/components/elements/logo"
import { AppStore, Facebook, GooglePlay, Instagram, Telegram, X } from "@/shared/icons"

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-6 bg-white px-[5vw] py-9">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col gap-2.5">
          <Logo />
          <span className="text-sm font-medium text-black">Go Beyond Being a Fan</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-2xl font-semibold text-slate-900">Explore</span>
          <ul className="flex flex-col gap-1.5">
            <li className="text-sm font-medium text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm font-medium text-black">
              <Link href="/">Ecosystem</Link>
            </li>
            <li className="text-sm font-medium text-black">
              <Link href="/">Game</Link>
            </li>
            <li className="text-sm font-medium text-black">
              <Link href="/">Partners</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-2xl font-semibold text-slate-900">Follow us</span>
          <ul className="flex gap-2.5">
            <li>
              <Link href="/">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Telegram />
              </Link>
            </li>

            <li>
              <Link href="/">
                <X />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-2xl font-semibold text-slate-900">Download</span>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/">
                <AppStore />
              </Link>
            </li>
            <li>
              <Link href="/">
                <GooglePlay />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center border-t border-slate-200 pt-6">
        <span className="text-center text-xs font-normal text-slate-900">
          thefansive — © Copyright 2025. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer

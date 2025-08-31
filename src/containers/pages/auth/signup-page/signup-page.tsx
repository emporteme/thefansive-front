import Link from "next/link"
import React from "react"
import Logo from "@/shared/components/elements/logo"
import { Email, EmailCode, Password, User } from "@/shared/icons"

const SignupPage = () => {
  return (
    <div className="flex flex-col rounded-xl bg-white px-6 py-8 shadow-2xl shadow-slate-400/50">
      <Logo className="mb-[5vh] w-32" />
      <h1 className="mt-3 text-3xl leading-[150%] text-black">
        Welcome to <br /> <span className="text-4xl font-bold">Thefansive platform</span>
      </h1>
      <p className="mt-2 text-slate-600">Go Beyond Being a Fan</p>

      <div className="mt-12 flex flex-col gap-6">
        {/* Full Name Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <User />
          </div>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Email />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
          />
        </div>

        {/* Email Code Input with Send Code Button */}
        <div className="flex gap-3">
          <div className="relative flex-1 text-slate-400">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <EmailCode />
            </div>
            <input
              type="text"
              placeholder="Email Code"
              className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
            />
          </div>
          <button className="cursor-pointer rounded-lg bg-green-500 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-600">
            Send Code
          </button>
        </div>

        {/* Password Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
          />
        </div>

        {/* Sign Up Button */}
        <button className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-black transition-all duration-200 hover:bg-slate-50">
          Sign Up
        </button>

        {/* Login Link */}
        <div className="text-center text-sm">
          <span className="text-slate-500">Have an account? </span>
          <Link href="/auth" className="font-semibold text-slate-800 hover:text-slate-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage

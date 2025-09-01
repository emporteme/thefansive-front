import Link from "next/link"
import React from "react"
import Logo from "@/shared/components/elements/logo"
import { Password } from "@/shared/icons"
import { getRoutes } from "@/shared/utils/get-routes"

const RestorePage = () => {
  const routes = getRoutes()

  return (
    <div className="flex min-w-120 flex-col rounded-xl bg-white px-6 py-8 shadow-2xl shadow-slate-400/50">
      <Logo className="mb-[5vh] w-32" />
      <h1 className="mt-3 text-3xl leading-[150%] text-black">
        Reset <br /> <span className="text-4xl font-bold">Password</span>
      </h1>
      <p className="mt-2 text-slate-600">Create a new secure password</p>

      <div className="mt-12 flex flex-col gap-6">
        {/* Description Text */}
        <p className="text-center text-slate-600">Enter your new password below</p>

        {/* New Password Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password />
          </div>
          <input
            type="password"
            placeholder="New Password"
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="relative text-slate-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Password />
          </div>
          <input
            type="password"
            placeholder="Confirm New Password"
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-black transition-all duration-200 hover:bg-slate-50">
          Reset Password
        </button>

        {/* Back to Login Link */}
        <div className="text-center text-sm">
          <span className="text-slate-500">Remember your password? </span>
          <Link href={routes.auth.login()} className="font-semibold text-slate-800 hover:text-slate-600">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RestorePage

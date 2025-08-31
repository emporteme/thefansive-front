import Link from "next/link"
import React from "react"
import Logo from "@/shared/components/elements/logo"
import { Email, Google, Password } from "@/shared/icons"

const AuthPage = () => {
  return (
    <div className="flex flex-col rounded-xl bg-white px-6 py-8 shadow-2xl shadow-slate-400/50">
      <Logo className="mb-[5vh] w-32" />
      <h1 className="mt-3 text-3xl leading-[150%] text-black">
        Welcome to <br /> <span className="text-4xl font-bold">Thefansive platform</span>
      </h1>
      <p className="mt-2 text-slate-600">Go Beyond Being a Fan</p>

      <div className="mt-12 flex flex-col gap-6">
        {/* Google Sign In Button */}
        <button className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-3 rounded-lg border border-black bg-white px-4 py-3 text-black transition-all duration-200 hover:bg-slate-50">
          <Google />
          <span className="text-sm font-medium">Sign in with Google</span>
        </button>

        {/* Separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-sm text-slate-500">or continue with Email</span>
          </div>
        </div>

        {/* Email and Password Fields */}
        <div className="space-y-4">
          <div className="relative text-slate-400">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Email />
            </div>
            <input
              type="email"
              placeholder="example@mail.com"
              className="block w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pr-3 pl-12 transition-all duration-200 hover:bg-slate-100 focus:border-transparent focus:ring-2 focus:ring-slate-500 focus:outline-none"
            />
          </div>

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
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-600 focus:ring-slate-500" />
            <span className="ml-2 text-sm text-slate-700">Remember me</span>
          </label>
          <Link href="/auth/forgot" className="text-sm font-semibold text-slate-600 hover:text-slate-800">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-black transition-all duration-200 hover:bg-slate-50">
          Log in
        </button>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span className="text-slate-500">Don't have an account? </span>
          <Link href="/auth/sign-up" className="font-semibold text-slate-800 hover:text-slate-600">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthPage

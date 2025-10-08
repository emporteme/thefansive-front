import Link from "next/link"
import React from "react"
import { getRoutes } from "@/shared/utils/get-routes"

export const RememberForgotSection = () => {
  const routes = getRoutes()

  return (
    <div className="flex items-center justify-between">
      <label className="flex cursor-pointer items-center">
        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-600 focus:ring-slate-500" />
        <span className="ml-2 text-sm text-slate-700">Remember me</span>
      </label>
      <Link href={routes.auth.forgot()} className="text-sm font-semibold text-slate-600 hover:text-slate-800">
        Forgot Password?
      </Link>
    </div>
  )
}

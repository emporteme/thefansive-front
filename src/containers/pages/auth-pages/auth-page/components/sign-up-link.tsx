import Link from "next/link"
import React from "react"
import { getRoutes } from "@/shared/utils/get-routes"

export const SignUpLink = () => {
  const routes = getRoutes()

  return (
    <div className="text-center text-base">
      <span className="text-slate-700">Don't have an account? </span>
      <Link href={routes.auth.signup()} className="font-semibold text-slate-700 hover:text-slate-900">
        Sign Up
      </Link>
    </div>
  )
}

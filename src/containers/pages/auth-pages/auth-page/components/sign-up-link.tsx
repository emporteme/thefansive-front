import Link from "next/link"
import React from "react"
import { getRoutes } from "@/shared/utils/get-routes"

export const SignUpLink = () => {
  const routes = getRoutes()

  return (
    <div className="text-center text-sm">
      <span className="text-slate-500">Don't have an account? </span>
      <Link href={routes.auth.signup()} className="font-semibold text-slate-800 hover:text-slate-600">
        Sign Up
      </Link>
    </div>
  )
}

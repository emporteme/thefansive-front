import React from "react"
import { Auth as AuthIcon } from "@/shared/icons"

const Auth: React.FC = () => {
  return (
    <div className="flex cursor-pointer items-center gap-2.5 rounded-lg px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100">
      <p className="font-semibold">Login</p>
      <AuthIcon className="h-5 w-5" />
    </div>
  )
}

export default Auth

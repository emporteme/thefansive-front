import { FC, ReactElement } from "react"

const AuthLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return <div className="flex min-h-screen items-center justify-center bg-white p-10">{children}</div>
}

export default AuthLayout

import { useEffect, useState } from "react"
import { isAuthenticated } from "@/shared/api"

export const useIsAuthenticated = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    setIsAuth(isAuthenticated())
  }, [])

  return { isAuth, setIsAuth }
}

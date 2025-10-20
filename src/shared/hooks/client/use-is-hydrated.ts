"use client"

import { useEffect, useState } from "react"

/**
 * Hook to check if the component has been hydrated on the client side
 * @returns boolean indicating if the component is hydrated
 */
export const useIsHydrated = (): boolean => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return isHydrated
}

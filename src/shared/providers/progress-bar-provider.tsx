"use client"

import { ProgressProvider } from "@bprogress/next/app"

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressProvider height="2px" color="#62748e" options={{ showSpinner: false }} shallowRouting>
        {children}
      </ProgressProvider>
    </>
  )
}

export { ProgressBarProvider }

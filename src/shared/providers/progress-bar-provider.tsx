"use client"

import { ProgressProvider } from "@bprogress/next/app"

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="3px"
      color="#ffffff"
      options={{ showSpinner: false }}
      shallowRouting
      disableSameURL={true}
    >
      {children}
    </ProgressProvider>
  )
}

export { ProgressBarProvider }

'use client'

import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifestUrl = process.env.NEXT_PUBLIC_TON_MANIFEST_URL || 'https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json'

interface TonProviderProps {
  children: React.ReactNode
}

export function TonProvider({ children }: TonProviderProps) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  )
}
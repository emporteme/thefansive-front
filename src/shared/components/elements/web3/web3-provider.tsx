"use client"

import { WagmiProvider } from "wagmi"
import { config } from "@/shared/lib/web3"

interface Web3ProviderProps {
  children: React.ReactNode
}

export function Web3Provider({ children }: Web3ProviderProps) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>
}

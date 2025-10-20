import { createConfig, http } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors"

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID

const getConnectors = () => {
  const baseConnectors = [injected(), metaMask(), safe()]

  if (projectId && projectId.trim() !== "") {
    return [...baseConnectors, walletConnect({ projectId })]
  }

  return baseConnectors
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: getConnectors(),
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}

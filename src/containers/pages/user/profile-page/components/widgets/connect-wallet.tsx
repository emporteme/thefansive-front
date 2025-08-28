import { useWallet } from "@/shared/hooks/client/use-wallet"
import { Wallet as WalletIcon } from "@/shared/icons"
import { alert } from "@/shared/lib/alert"

const ConnectWallet = () => {
  const { address, isConnected, connect, connectors, disconnect } = useWallet()

  const handleConnect = () => {
    const metaMaskConnector = connectors.find((connector) => connector.type === "metaMask")

    if (metaMaskConnector) {
      connect(
        { connector: metaMaskConnector },
        {
          onSuccess: () => alert.success("Connected to MetaMask"),
        }
      )
    } else {
      alert.error("No connectors found")
    }
  }

  const handleDisconnect = () => {
    disconnect()
    alert.info("Disconnected from MetaMask")
  }

  return (
    // TODO: refactor to reusable button component
    <div
      className="flex cursor-pointer items-center gap-2.5 rounded-lg border-2 border-[#cad5e2] bg-slate-100 px-4.5 py-2"
      onClick={isConnected ? handleDisconnect : handleConnect}
    >
      <WalletIcon />
      <span className="text-base font-semibold text-slate-900">
        {isConnected && address ? address.slice(0, 6) + "..." + address.slice(-4) : "Connect Wallet"}
      </span>
    </div>
  )
}

export { ConnectWallet }

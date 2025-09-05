import { Button } from "@/shared/components/ui"
import { useWallet } from "@/shared/hooks/client/use-wallet"
import { WalletFilled } from "@/shared/icons"
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
    <Button className="px-3 py-2" onClick={isConnected ? handleDisconnect : handleConnect}>
      <span className="text-sm leading-[1.7] font-semibold">
        {isConnected && address ? address.slice(0, 6) + "..." + address.slice(-4) : "Connect Wallet"}
      </span>
      <WalletFilled />
    </Button>
  )
}

export { ConnectWallet }

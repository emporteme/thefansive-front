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
    <Button className="gap-2.5 self-end !px-4 py-3" onClick={isConnected ? handleDisconnect : handleConnect}>
      <WalletFilled className="!h-5 !w-5" />
      <span className="text-base leading-[1.5] font-semibold tracking-[0]">
        {isConnected && address ? address.slice(0, 7) + "..." + address.slice(-4) : "Connect Wallet"}
      </span>
    </Button>
  )
}

export { ConnectWallet }

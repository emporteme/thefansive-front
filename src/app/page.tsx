import { WalletConnect, TonConnect } from "@/shared/components/web3"

export default function Main() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect Ethereum Wallet</h2>
          <WalletConnect />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect TON Wallet</h2>
          <TonConnect />
        </div>
      </div>
    </div>
  )
}

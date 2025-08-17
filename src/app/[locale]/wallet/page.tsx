import { TonConnect, WalletConnect } from "@/shared/components/elements/web3"

export default function Main() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Connect Ethereum Wallet</h2>
          <WalletConnect />
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold">Connect TON Wallet</h2>
          <TonConnect />
        </div>
      </div>
    </div>
  )
}

import { TonConnect, WalletConnect } from "@/shared/components/elements/web3"

export default function Main() {
  return (
    <div className="mx-auto py-8 container">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 max-w-4xl">
        <div>
          <h2 className="mb-4 font-semibold text-xl">Connect Ethereum Wallet</h2>
          <WalletConnect />
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-xl">Connect TON Wallet</h2>
          <TonConnect />
        </div>
      </div>
    </div>
  )
}

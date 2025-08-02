import { WalletConnect } from "@/shared/components/web3"

export default function Main() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-4">Connect Wallet</h2>
        <WalletConnect />
      </div>
    </div>
  )
}

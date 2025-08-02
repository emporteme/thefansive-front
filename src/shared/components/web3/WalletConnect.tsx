'use client'

import { Button } from '@/shared/components/ui/button'
import { ClientOnly } from '@/shared/components/ui/ClientOnly'
import { useWallet } from '@/shared/hooks/client/useWallet'

function WalletConnectInner() {
  const { address, isConnected, isConnecting, connect, connectors, disconnect, error, isPending } = useWallet()

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <Button onClick={() => disconnect()} variant="outline" size="sm">
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          onClick={() => connect({ connector })}
          disabled={isPending || isConnecting}
          variant="outline"
          className="w-full"
        >
          {isConnecting ? 'Connecting...' : `Connect ${connector.name}`}
        </Button>
      ))}
      {error && (
        <p className="text-sm text-red-600">
          Error: {error.message}
        </p>
      )}
    </div>
  )
}

export function WalletConnect() {
  return (
    <ClientOnly fallback={<div className="animate-pulse bg-gray-200 h-10 rounded-md" />}>
      <WalletConnectInner />
    </ClientOnly>
  )
}
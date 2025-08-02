'use client'

import { TonConnectButton, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react'
import { useState } from 'react'

export function TonConnect() {
  const [tonConnectUI] = useTonConnectUI()
  const wallet = useTonWallet()
  const [balance, setBalance] = useState<string>('0')

  const handleDisconnect = () => {
    tonConnectUI.disconnect()
  }

  const getBalance = async () => {
    if (wallet?.account.address) {
      try {
        // This is a basic example - you might want to use a proper TON API
        const response = await fetch(`https://toncenter.com/api/v2/getAddressInformation?address=${wallet.account.address}`)
        const data = await response.json() as { ok: boolean; result?: { balance?: string } }
        if (data.ok && data.result) {
          const balanceNanotons = data.result.balance || '0'
          const balanceTons = (parseInt(balanceNanotons) / 1e9).toFixed(4)
          setBalance(balanceTons)
        }
      } catch (error) {
        console.error('Error fetching balance:', error)
      }
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <TonConnectButton />
      
      {wallet && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-600">
            Connected: {wallet.account.address.slice(0, 6)}...{wallet.account.address.slice(-4)}
          </p>
          <p className="text-sm">Balance: {balance} TON</p>
          <div className="space-x-2">
            <button
              onClick={getBalance}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              Get Balance
            </button>
            <button
              onClick={handleDisconnect}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
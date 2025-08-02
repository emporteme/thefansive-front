'use client'

import { useTonConnectUI, useTonWallet as useTonWalletBase } from '@tonconnect/ui-react'
import { useCallback, useState } from 'react'

export function useTonWallet() {
  const [tonConnectUI] = useTonConnectUI()
  const wallet = useTonWalletBase()
  const [isLoading, setIsLoading] = useState(false)

  const connect = useCallback(() => {
    return tonConnectUI.openModal()
  }, [tonConnectUI])

  const disconnect = useCallback(() => {
    return tonConnectUI.disconnect()
  }, [tonConnectUI])

  const getBalance = useCallback(async () => {
    if (!wallet?.account.address) return null
    
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://toncenter.com/api/v2/getAddressInformation?address=${wallet.account.address}`
      )
      const data = await response.json() as { ok: boolean; result?: { balance?: string } }
      
      if (data.ok && data.result) {
        const balanceNanotons = data.result.balance || '0'
        return (parseInt(balanceNanotons) / 1e9).toString()
      }
      return null
    } catch (error) {
      console.error('Error fetching balance:', error)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [wallet?.account.address])

  const sendTransaction = useCallback(async (transaction: {
    to: string;
    value: string;
    data?: string;
  }) => {
    if (!wallet) throw new Error('Wallet not connected')
    
    setIsLoading(true)
    try {
      return await tonConnectUI.sendTransaction({
        messages: [
          {
            address: transaction.to,
            amount: transaction.value,
            payload: transaction.data,
          },
        ],
        validUntil: Math.floor(Date.now() / 1000) + 60, // Valid for 60 seconds
      })
    } finally {
      setIsLoading(false)
    }
  }, [wallet, tonConnectUI])

  return {
    wallet,
    isConnected: !!wallet,
    address: wallet?.account.address,
    isLoading,
    connect,
    disconnect,
    getBalance,
    sendTransaction,
  }
}
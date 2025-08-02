import "@/styles/tailwind.css"
import { Web3Provider, TonProvider } from "@/shared/components/web3"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>
          <TonProvider>
            {children}
          </TonProvider>
        </Web3Provider>
      </body>
    </html>
  )
}

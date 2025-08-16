import "@/styles/tailwind.css"
import { ReactElement } from "react"
import { I18nProviderClient } from "@/locale/client"
import { TonProvider, Web3Provider } from "@/shared/components/elements/web3"

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params

  return (
    <html lang="en">
      <body>
        <I18nProviderClient locale={locale}>
          <Web3Provider>
            <TonProvider>
              {children}
            </TonProvider>
          </Web3Provider>
        </I18nProviderClient>
      </body>
    </html>
  )
}

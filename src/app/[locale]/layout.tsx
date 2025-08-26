import { Metadata } from "next"
import { Manrope } from "next/font/google"
import { ReactElement } from "react"
import { ToastContainer } from "react-toastify"
import { Footer, Header } from "@/containers/layout"
import { I18nProviderClient } from "@/locale/client"
import { TonProvider, Web3Provider } from "@/shared/components/elements/web3"
import "@/styles/tailwind.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "The Fansive",
  description: "The Fansive",
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>
  children: ReactElement
}) {
  const { locale } = await params

  return (
    <html lang="en" className={manrope.className}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
      </head>
      <body>
        <I18nProviderClient locale={locale}>
          <Web3Provider>
            <TonProvider>
              <Header />
              {children}
              <Footer />
            </TonProvider>
          </Web3Provider>
        </I18nProviderClient>
        <ToastContainer />
      </body>
    </html>
  )
}

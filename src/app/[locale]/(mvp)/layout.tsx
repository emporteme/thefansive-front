import { FC, ReactElement } from "react"
import { Footer, Header } from "@/containers/layout"

const MvpLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MvpLayout

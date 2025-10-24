import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"
import LinkList from "./components/link-list"
import LogoAndSocial from "./components/logo-and-social"

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-[0px_-6px_16px_-6px_#110C221A]">
      <ContainerLayout className="flex flex-col gap-6 pt-8.5 pb-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <LogoAndSocial />
          <LinkList />
        </div>
        <div className="flex items-center justify-center border-t border-slate-200 pt-6">
          <span className="text-center text-xs font-normal text-slate-900">
            thefansive — © Copyright 2025. All Rights Reserved.
          </span>
        </div>
      </ContainerLayout>
    </footer>
  )
}

export default Footer

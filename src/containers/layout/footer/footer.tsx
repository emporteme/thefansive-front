"use client"

import React from "react"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { Routes } from "@/shared/types/routes"
import { getRoutes } from "@/shared/utils/get-routes"
import BottomSection from "./components/bottom-section"
import LinkList from "./components/link-list"
import LogoAndSocial from "./components/logo-and-social"
import { LangSwitcher } from "../header/components/sections/top-section/ui"

const getExploreLinks = (routes: Routes) => [
  { title: "Home", href: routes.home() },
  { title: "Ecosystem", href: routes.ecosystem() },
  { title: "Game", href: routes.game() },
]

const getCompanyLinks = (_routes: Routes) => [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Partners", href: "/partners" },
]

const Footer: React.FC = () => {
  const routes = getRoutes()

  return (
    <footer className="bg-white shadow-[0px_-6px_16px_-6px_#110C221A]">
      <ContainerLayout>
        <div className="flex pt-8.5 pb-5">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <LogoAndSocial />
            <LinkList title="Explore" links={getExploreLinks(routes)} />
            <LinkList title="Company" links={getCompanyLinks(routes)} />
          </div>
          <div>
            <LangSwitcher variant="white" />
          </div>
        </div>
        <BottomSection />
      </ContainerLayout>
    </footer>
  )
}

export default Footer

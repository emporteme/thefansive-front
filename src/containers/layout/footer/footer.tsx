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

const getCompanyLinks = (routes: Routes) => [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Partners", href: "/partners" },
]

const Footer: React.FC = () => {
  const routes = getRoutes()

  return (
    <footer className="bg-white shadow-[0px_-6px_16px_-6px_#110C221A]">
      <ContainerLayout>
        <div className="grid grid-cols-1 gap-5 pt-8.5 pb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <LogoAndSocial />
          <LinkList title="Explore" links={getExploreLinks(routes)} />
          <LinkList title="Company" links={getCompanyLinks(routes)} />
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

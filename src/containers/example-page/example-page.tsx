"use client"

import React, { FC } from "react"
import { FooterSection } from "./components/sections/footer-section"
import { HeaderSection } from "./components/sections/header-section"
import { MainSection } from "./components/sections/main-section"

const ExamplePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </div>
  )
}

export default ExamplePage

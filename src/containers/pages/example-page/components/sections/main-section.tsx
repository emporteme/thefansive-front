"use client"

import React, { FC } from "react"
import { ActionButton } from "../ui/action-button"
import { ContentCard } from "../ui/content-card"
import { StatsWidget } from "../widgets/stats-widget"

const MainSection: FC = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContentCard title="Основной контент">
            <p className="text-gray-600">Это пример основной секции страницы с контентом и виджетами.</p>
            <ActionButton onClick={() => console.log("Клик!")}>Действие</ActionButton>
          </ContentCard>
        </div>
        <div>
          <StatsWidget />
        </div>
      </div>
    </main>
  )
}

export { MainSection }

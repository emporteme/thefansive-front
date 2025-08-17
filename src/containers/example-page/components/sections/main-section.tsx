"use client"

import React, { FC } from 'react'
import { ActionButton } from '../ui/action-button'
import { ContentCard } from '../ui/content-card'
import { StatsWidget } from '../widgets/stats-widget'

const MainSection: FC = () => {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContentCard title="Основной контент">
            <p className="text-gray-600">
              Это пример основной секции страницы с контентом и виджетами.
            </p>
            <ActionButton onClick={() => console.log('Клик!')}>
              Действие
            </ActionButton>
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

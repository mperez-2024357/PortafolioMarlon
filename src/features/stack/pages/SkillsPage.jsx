import React from 'react'
import PortfolioLayout from '../../../shared/components/layout/PortfolioLayout'
import { useStackData } from '../hooks/useStackData'
import StackShowcase from '../components/StackShowcase'

export default function SkillsPage() {
  const { categories } = useStackData()

  return (
    <PortfolioLayout>
      <div className="section-dark relative min-h-screen px-4 py-28">
        <div className="container mx-auto max-w-7xl">
          <StackShowcase categories={categories} />
        </div>
      </div>
    </PortfolioLayout>
  )
}

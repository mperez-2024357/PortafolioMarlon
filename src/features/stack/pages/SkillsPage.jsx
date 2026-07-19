import React from 'react'
import PortfolioLayout from '../../../shared/components/layout/PortfolioLayout'
import { useStackData } from '../hooks/useStackData'
import StackCategory from '../components/StackCategory'
import StackDetailedPanel from '../components/StackDetailedPanel'

export default function SkillsPage() {
  const { categories } = useStackData();

  return (
    <PortfolioLayout>
      <div className="section-dark min-h-screen px-4 py-28 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Stack Tecnológico</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explora mi experiencia, proyectos y estadísticas en cada tecnología.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna Izquierda: Carpetitas */}
            <div className="w-full lg:w-[55%] flex flex-col pt-4">
              {categories.map((cat) => (
                <StackCategory key={cat.id} category={cat} />
              ))}
            </div>

            {/* Columna Derecha: Panel de Detalles */}
            <div className="w-full lg:w-[45%] h-auto lg:h-[750px] sticky top-28">
              <StackDetailedPanel />
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  )
}

import React from 'react'
import PortfolioLayout from '../../../shared/components/layout/PortfolioLayout'
import ExperienceTimeline from '../components/ExperienceTimeline'
import useExperience from '../hooks/useExperience'

export default function ExperiencePage() {
  const { experiences, totalHours } = useExperience()

  return (
    <PortfolioLayout>
      <section className="section-muted min-h-screen px-4 py-28">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="section-kicker type-reveal mb-3 text-brand-primary">Trayectoria profesional</p>
            <h1 className="section-title type-reveal text-4xl font-display font-bold text-brand-ink md:text-5xl">Experiencia</h1>
            <p className="type-reveal-delay mt-5 text-brand-secondary">
              Mi experiencia profesional inicia con prácticas en Banco BAC, con una duración total de {totalHours} horas.
            </p>
          </div>

          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>
    </PortfolioLayout>
  )
}

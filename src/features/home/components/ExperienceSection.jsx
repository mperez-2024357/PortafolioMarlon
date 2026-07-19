import React from 'react'
import SectionWrapper from '../../../shared/components/ui/SectionWrapper.jsx'
import ExperienceTimeline from '../../experience/components/ExperienceTimeline.jsx'
import useExperience from '../../experience/hooks/useExperience.js'

export default function ExperienceSection(){
  const { experiences } = useExperience()

  return (
    <SectionWrapper id="experience" className="section-muted py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-kicker type-reveal mb-3 text-brand-primary">Prácticas profesionales</p>
          <h2 className="section-title type-reveal text-4xl md:text-5xl font-display font-bold text-brand-ink">Experiencia</h2>
          <p className="type-reveal-delay mt-5 text-brand-secondary">
            Próxima etapa profesional en Banco BAC, con 400 horas de práctica a partir del 17 de agosto de 2026.
          </p>
        </div>

        <ExperienceTimeline experiences={experiences} compact />
      </div>
    </SectionWrapper>
  )
}

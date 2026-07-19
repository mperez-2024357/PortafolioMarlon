import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function ExperienceTimeline({ experiences, compact = false }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-primary via-brand-cyan to-brand-accent md:block" />
      <div className="space-y-6 md:pl-12">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative">
            <span className="absolute -left-[2.72rem] top-8 hidden h-5 w-5 rounded-full border-4 border-white bg-brand-primary shadow-[0_0_0_6px_rgba(37,99,235,.12)] md:block" />
            <ExperienceCard experience={experience} compact={compact} />
          </div>
        ))}
      </div>
    </div>
  )
}

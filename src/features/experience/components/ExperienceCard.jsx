import React from 'react'
import { Building2, CalendarDays, Clock3, MapPin } from 'lucide-react'
import ExperienceMetric from './ExperienceMetric'

export default function ExperienceCard({ experience, compact = false }) {
  if (!experience) return null

  return (
    <article className="surface-card overflow-hidden p-0">
      <div className="border-b border-slate-200 bg-white px-6 py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="inline-flex w-fit rounded-md border border-brand-primary/15 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">
              {experience.status}
            </span>
            <h3 className="mt-4 text-2xl font-black text-brand-ink">{experience.role}</h3>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-brand-secondary">
              <Building2 size={16} />
              {experience.company}
            </p>
          </div>
          <div className="rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-4 py-3 text-left sm:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-accent">{experience.type}</p>
            <p className="mt-1 text-sm font-semibold text-brand-ink">{experience.location}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="max-w-3xl text-brand-secondary">{experience.summary}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <ExperienceMetric icon={CalendarDays} label="Inicio" value={experience.startLabel} />
          <ExperienceMetric icon={Clock3} label="Duración" value={`${experience.hours} horas`} accent />
          <ExperienceMetric icon={MapPin} label="Modalidad" value={experience.location} />
        </div>

        {!compact && (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h4 className="text-sm font-black uppercase tracking-[0.14em] text-brand-ink">Puntos clave</h4>
            <ul className="mt-4 space-y-3">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-brand-secondary">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

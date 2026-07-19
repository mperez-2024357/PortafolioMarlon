import React from 'react'
import { Download, ExternalLink } from 'lucide-react'
import PortfolioLayout from '../../../shared/components/layout/PortfolioLayout'
import useEducation from '../hooks/useEducation'

function EducationCard({ item }) {
  return (
    <article className="glass-panel rounded-2xl p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white">{item.title}</h2>
          <p className="mt-1 font-semibold text-brand-cyan">{item.institution}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="rounded-md bg-brand-accent/15 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-accent">
            {item.status}
          </span>
          <span className="text-sm font-bold text-slate-400">{item.period}</span>
        </div>
      </div>

      <p className="mt-5 leading-7 text-slate-300">{item.summary}</p>

      <ul className="mt-6 space-y-3">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function DiplomaCard({ diploma }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-200 hover:border-brand-cyan/50">
      <a
        href={diploma.imageUrl}
        target="_blank"
        rel="noreferrer"
        className="block cursor-pointer bg-slate-950/60 p-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-brand-dark"
        aria-label={`Abrir diploma ${diploma.title}`}
      >
        <div className="aspect-[1.42/1] overflow-hidden rounded-xl border border-white/10 bg-white">
          <img
            src={diploma.imageUrl}
            alt={`Diploma ${diploma.title}`}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
            loading="lazy"
          />
        </div>
      </a>

      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-cyan">
              {diploma.institution}
            </p>
            <h3 className="mt-2 text-2xl font-black text-white">{diploma.title}</h3>
          </div>
          <span className="rounded-md bg-brand-accent/15 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-accent">
            {diploma.date}
          </span>
        </div>

        <p className="mt-4 leading-7 text-slate-300">{diploma.summary}</p>
        <p className="mt-3 text-sm font-semibold text-slate-400">Emitido por {diploma.issuer}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={diploma.pdfUrl}
            download
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-brand-cyan px-4 py-2.5 text-sm font-black text-brand-dark transition-colors duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-brand-dark"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar PDF
          </a>
          <a
            href={diploma.imageUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:border-brand-accent hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Ver imagen
          </a>
        </div>
      </div>
    </article>
  )
}

export default function EducationPage() {
  const { education, diplomas } = useEducation()

  return (
    <PortfolioLayout>
      <section className="section-dark blue-depth-bg relative min-h-screen overflow-hidden px-4 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,210,255,.14),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(249,115,22,.10),transparent_32%)]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="section-kicker mb-3 block text-brand-cyan">Formacion</span>
            <h1 className="section-title text-4xl font-display font-bold text-white md:text-5xl">Educacion</h1>
            <p className="mt-5 text-slate-300">
              Mi formacion tecnica como desarrollador de software y certificaciones complementarias.
            </p>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {education.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-20">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-kicker text-brand-cyan">Diplomas</span>
                <h2 className="mt-3 text-3xl font-display font-black text-white md:text-4xl">
                  Certificaciones verificables
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                Evidencia de cursos completados en Cisco Networking Academy, disponible para revisar en imagen o descargar en PDF.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {diplomas.map((diploma) => (
                <DiplomaCard key={diploma.id} diploma={diploma} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  )
}

import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Expand, Eye, Layers, MonitorSmartphone, Users } from 'lucide-react'
import ProjectViewLightbox from './ProjectViewLightbox'

const ease = [0.25, 1, 0.5, 1]

/**
 * Apartado de vistas: espacio para capturas de proyectos con interfaz visual.
 * Demuestra capacidad de UI con un marco tipo browser y tira de capturas.
 */
export default function ProjectViewsGallery({ projects = [], onOpenProject }) {
  const visualProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          project.hasVisualInterface &&
          Array.isArray(project.screenshots) &&
          project.screenshots.length > 0,
      ),
    [projects],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [shotIndex, setShotIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const safeIndex = visualProjects.length
    ? Math.min(activeIndex, visualProjects.length - 1)
    : 0
  const active = visualProjects[safeIndex] || null
  const shots = active?.screenshots || []
  const safeShotIndex = shots.length ? Math.min(shotIndex, shots.length - 1) : 0
  const activeShot = shots[safeShotIndex] || null

  const selectProject = (index) => {
    setActiveIndex(index)
    setShotIndex(0)
  }

  if (!visualProjects.length) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-16 text-center">
        <MonitorSmartphone className="mx-auto mb-4 text-brand-secondary" size={32} />
        <p className="font-display text-lg font-bold text-brand-ink">Sin vistas visuales aún</p>
        <p className="mt-2 text-sm text-brand-secondary">
          Este apartado muestra capturas solo de proyectos con interfaz visual. Cuando haya demos UI, aparecerán aquí.
        </p>
      </div>
    )
  }

  return (
    <div id="project-views" className="mx-auto max-w-7xl scroll-mt-28">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-kicker mb-3 text-brand-primary"
          >
            Vistas de proyectos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 }}
            className="section-title font-display text-3xl font-bold text-brand-ink md:text-4xl"
          >
            Capturas de interfaces reales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-brand-secondary"
          >
            Recorre pantallas de proyectos con UI de la comunidad IN6BV y demos frontend.
            Sirve para demostrar capacidad visual y de producto, no solo el repositorio.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary shadow-sm">
            <Layers size={14} className="text-brand-primary" />
            {visualProjects.length} con interfaz
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary shadow-sm">
            <Users size={14} className="text-brand-accent" />
            {visualProjects.filter((p) => p.community).length} de comunidades
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary shadow-sm">
            <Eye size={14} className="text-brand-cyan" />
            {shots.length} capturas
          </span>
        </div>
      </div>

      {/* Project chips */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {visualProjects.map((project, index) => {
          const selected = index === safeIndex
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => selectProject(index)}
              className={`shrink-0 rounded-lg border px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                selected
                  ? 'border-brand-primary bg-brand-primary text-white shadow-[0_12px_28px_rgba(37,99,235,.22)]'
                  : 'border-slate-200 bg-white text-brand-secondary hover:border-brand-primary/30 hover:text-brand-primary'
              }`}
            >
              {project.community ? (
                <span className="inline-flex items-center gap-1.5">
                  <Users size={13} className={selected ? 'text-white/90' : 'text-brand-accent'} />
                  {project.title}
                </span>
              ) : (
                project.title
              )}
            </button>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.75fr)]">
        {/* Browser frame preview */}
        <motion.div
          layout
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,.12)]"
        >
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F97316]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00D2FF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
            <div className="ml-2 flex min-w-0 flex-1 items-center rounded-md border border-slate-200 bg-white px-3 py-1.5">
              <span className="truncate text-xs font-medium text-brand-secondary">
                {active.title.toLowerCase().replace(/\s+/g, '-')}.app · {activeShot?.label}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-brand-secondary transition-colors hover:border-brand-primary/30 hover:text-brand-primary"
              aria-label="Ampliar captura a pantalla completa"
            >
              <Expand size={16} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative block w-full cursor-zoom-in text-left"
            aria-label={`Ampliar vista de ${active.title}`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`${active.id}-${activeShot?.id}`}
                src={activeShot?.image}
                alt={`Captura: ${active.title} — ${activeShot?.label}`}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease }}
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent px-5 pb-5 pt-16">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-cyan">
                {activeShot?.label}
              </p>
              <p className="mt-1 max-w-lg text-sm text-white/90">{activeShot?.caption}</p>
            </div>
          </button>

          {/* Shot strip */}
          <div className="flex gap-2 overflow-x-auto border-t border-slate-200 bg-slate-50/80 p-3 no-scrollbar">
            {shots.map((shot, index) => {
              const selected = index === safeShotIndex
              return (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() => setShotIndex(index)}
                  className={`relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border transition-all ${
                    selected
                      ? 'border-brand-primary ring-2 ring-brand-primary/25'
                      : 'border-slate-200 opacity-80 hover:opacity-100'
                  }`}
                  aria-label={shot.label}
                  aria-current={selected ? 'true' : undefined}
                >
                  <img src={shot.image} alt="" className="h-full w-full object-cover" />
                  <span className="absolute inset-x-0 bottom-0 bg-brand-dark/65 px-1 py-0.5 text-center text-[9px] font-bold uppercase tracking-wide text-white">
                    {shot.label}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Side panel: overview */}
        <AnimatePresence mode="wait">
          <motion.aside
            key={active.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.32, ease }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,.08)]"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-brand-accent/10 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-accent">
                {active.status}
              </span>
              <span className="text-sm font-bold text-brand-secondary">{active.year}</span>
              <span className="rounded-md border border-brand-primary/15 bg-brand-primary/5 px-2.5 py-1 text-xs font-bold text-brand-primary">
                {active.category}
              </span>
              {active.community && (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-cyan/25 bg-brand-cyan/10 px-2.5 py-1 text-xs font-bold text-sky-700">
                  <Users size={12} />
                  {active.community}
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl font-black tracking-tight text-brand-ink">
              {active.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-brand-secondary">{active.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-brand-primary/10 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {active.metrics?.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-2">
                {active.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-secondary">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-sm font-black text-brand-ink">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="btn-primary min-h-0 px-4 py-2.5 text-sm"
              >
                <Expand size={16} />
                Recorrer vistas
              </button>
              {typeof onOpenProject === 'function' && (
                <button
                  type="button"
                  onClick={() => onOpenProject(active)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-primary/40 hover:text-brand-primary"
                >
                  Ver ficha
                </button>
              )}
            </div>

            <p className="mt-5 text-xs leading-5 text-brand-secondary/80">
              Solo se listan proyectos con interfaz visual. Usa las miniaturas o el visor a pantalla completa
              para demostrar el alcance de cada UI.
            </p>
          </motion.aside>
        </AnimatePresence>
      </div>

      <ProjectViewLightbox
        open={lightboxOpen}
        project={active}
        shotIndex={safeShotIndex}
        onClose={() => setLightboxOpen(false)}
        onShotChange={setShotIndex}
        onPrevProject={() => {
          if (safeIndex > 0) selectProject(safeIndex - 1)
        }}
        onNextProject={() => {
          if (safeIndex < visualProjects.length - 1) selectProject(safeIndex + 1)
        }}
        hasPrevProject={safeIndex > 0}
        hasNextProject={safeIndex < visualProjects.length - 1}
      />
    </div>
  )
}

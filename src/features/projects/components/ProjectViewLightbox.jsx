import React, { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'

export default function ProjectViewLightbox({
  open,
  project,
  shotIndex,
  onClose,
  onShotChange,
  onPrevProject,
  onNextProject,
  hasPrevProject,
  hasNextProject,
}) {
  const shots = project?.screenshots || []
  const shot = shots[shotIndex] || null

  const goPrevShot = useCallback(() => {
    if (!shots.length) return
    onShotChange((shotIndex - 1 + shots.length) % shots.length)
  }, [onShotChange, shotIndex, shots.length])

  const goNextShot = useCallback(() => {
    if (!shots.length) return
    onShotChange((shotIndex + 1) % shots.length)
  }, [onShotChange, shotIndex, shots.length])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrevShot()
      if (event.key === 'ArrowRight') goNextShot()
      if (event.key === 'ArrowUp' && hasPrevProject) onPrevProject()
      if (event.key === 'ArrowDown' && hasNextProject) onNextProject()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose, goPrevShot, goNextShot, hasPrevProject, hasNextProject, onPrevProject, onNextProject])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && project && shot && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col bg-brand-dark/94 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Vistas de ${project.title}`}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-cyan">
                {project.category} · captura {shotIndex + 1}/{shots.length}
              </p>
              <h3 className="truncate font-display text-lg font-bold text-white sm:text-xl">
                {project.title}
                <span className="ml-2 font-normal text-white/50">— {shot.label}</span>
              </h3>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                  rel={project.liveUrl.startsWith('http') ? 'noreferrer' : undefined}
                  className="hidden items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-brand-cyan/40 hover:text-white sm:inline-flex"
                >
                  <ExternalLink size={15} />
                  Demo
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-white/30 hover:text-white"
                aria-label="Cerrar visor de capturas"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-6 sm:px-10">
            <button
              type="button"
              onClick={goPrevShot}
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-brand-dark/70 text-white transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan sm:left-4"
              aria-label="Captura anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={`${project.id}-${shot.id}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
              className="max-h-full w-full max-w-5xl"
            >
              <div className="overflow-hidden rounded-xl border border-white/12 bg-space-graphite shadow-[0_40px_100px_rgba(0,0,0,.55)]">
                <div className="flex items-center gap-2 border-b border-white/8 bg-white/5 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F97316]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00D2FF]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]/80" />
                  <span className="ml-3 truncate text-xs font-medium text-white/40">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.app / {shot.label}
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  {shot.fit === 'contain' && (
                    <img
                      src={shot.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
                    />
                  )}
                  <img
                    src={shot.image}
                    alt={`${project.title} — ${shot.label}`}
                    className={`relative h-full w-full ${
                      shot.fit === 'contain' ? 'object-contain py-3' : 'object-cover'
                    }`}
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-white/55">{shot.caption}</p>
            </motion.div>

            <button
              type="button"
              onClick={goNextShot}
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-brand-dark/70 text-white transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan sm:right-4"
              aria-label="Captura siguiente"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="border-t border-white/10 px-4 py-4 sm:px-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {shots.map((item, index) => {
                  const active = index === shotIndex
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onShotChange(index)}
                      className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition-all ${
                        active
                          ? 'border-brand-cyan ring-2 ring-brand-cyan/40'
                          : 'border-white/15 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={item.label}
                      aria-current={active ? 'true' : undefined}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className={`h-full w-full ${
                          item.fit === 'contain' ? 'bg-space-graphite object-contain' : 'object-cover'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrevProject}
                  disabled={!hasPrevProject}
                  className="rounded-lg border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 transition-colors enabled:hover:border-white/30 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Proyecto ant.
                </button>
                <button
                  type="button"
                  onClick={onNextProject}
                  disabled={!hasNextProject}
                  className="rounded-lg border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70 transition-colors enabled:hover:border-white/30 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Proyecto sig.
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

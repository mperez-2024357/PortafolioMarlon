import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ExternalLink, X } from 'lucide-react'

function GithubMark({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.405 7.86 10.93.574.106.784-.25.784-.553 0-.274-.01-1-.016-1.964-3.197.695-3.873-1.542-3.873-1.542-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.08-.699.08-.699 1.154.082 1.76 1.186 1.76 1.186 1.025 1.755 2.689 1.249 3.345.955.104-.743.402-1.249.731-1.536-2.552-.29-5.237-1.276-5.237-5.678 0-1.254.448-2.279 1.184-3.083-.119-.29-.513-1.457.112-3.037 0 0 .965-.31 3.162 1.18a10.99 10.99 0 0 1 2.876-.387c.976.004 1.96.132 2.877.387 2.196-1.49 3.16-1.18 3.16-1.18.627 1.58.233 2.747.114 3.037.737.804 1.183 1.829 1.183 3.083 0 4.412-2.69 5.384-5.253 5.67.413.356.78 1.058.78 2.133 0 1.539-.014 2.78-.014 3.158 0 .306.208.665.79.552C20.712 21.403 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Cerrar detalle del proyecto"
        className="absolute inset-0 cursor-default bg-brand-dark/76 backdrop-blur-sm"
        onClick={onClose}
      />

      <section className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white shadow-[0_34px_120px_rgba(2,8,23,.42)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/92 px-5 py-4 backdrop-blur-xl">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">
              {project.category}
              {project.community ? ` · ${project.community}` : ''}
            </p>
            <h3 className="text-xl font-black text-brand-ink">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-brand-secondary transition-colors duration-200 hover:border-brand-primary/30 hover:text-brand-primary"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-slate-100 p-4 sm:p-6">
            <img src={project.image} alt={`Imagen del proyecto ${project.title}`} className="aspect-[16/10] w-full rounded-lg object-cover shadow-lg" />
            {project.hasVisualInterface && Array.isArray(project.screenshots) && project.screenshots.length > 1 && (
              <div className="mt-3">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-secondary">
                  Vistas de interfaz
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {project.screenshots.map((shot) => (
                    <div
                      key={shot.id}
                      className="h-16 w-28 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
                      title={shot.label}
                    >
                      <img src={shot.image} alt={shot.label} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-brand-primary/10 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-brand-secondary">{project.description}</p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary">{metric.label}</p>
                  <p className="mt-1 text-base font-black text-brand-ink">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-black uppercase tracking-[0.14em] text-brand-ink">Información clave</h4>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-brand-secondary">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={project.liveUrl} className="btn-primary min-h-0 px-4 py-2 text-sm" onClick={onClose}>
                <ExternalLink size={16} />
                Ver sección
              </a>
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="btn-secondary min-h-0 border-slate-300 px-4 py-2 text-sm text-brand-ink hover:text-white">
                <GithubMark />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>,
    document.body
  )
}

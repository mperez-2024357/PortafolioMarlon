import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function GithubMark({ size = 18 }) {
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

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,.08)] transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_24px_60px_rgba(37,99,235,.14)]">
      <button type="button" onClick={() => onSelect(project)} className="cursor-pointer text-left">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          />
          <div className="absolute left-4 top-4 rounded-lg border border-white/25 bg-brand-dark/72 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {project.category}
          </div>
          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-primary shadow-lg transition-colors duration-200 group-hover:bg-brand-primary group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="rounded-md bg-brand-accent/10 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-accent">
            {project.status}
          </span>
          <span className="text-sm font-bold text-brand-secondary">{project.year}</span>
        </div>

        <h3 className="text-xl font-black text-brand-ink">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-brand-secondary">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-md border border-brand-primary/10 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button type="button" onClick={() => onSelect(project)} className="btn-primary min-h-0 px-4 py-2 text-sm">
            Ver detalles
          </button>
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Repositorio de ${project.title}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-brand-secondary transition-colors duration-200 hover:border-brand-primary/30 hover:text-brand-primary"
          >
            <GithubMark />
          </a>
        </div>
      </div>
    </article>
  )
}

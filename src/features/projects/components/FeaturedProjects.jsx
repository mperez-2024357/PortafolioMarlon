import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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

const grotesk = { fontFamily: "'Space Grotesk', sans-serif" }

function FeaturedRow({ project, index, onSelect }) {
  const number = String(index + 1).padStart(2, '0')
  const flip = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className="group grid items-center gap-8 md:grid-cols-2 md:gap-12"
    >
      {/* Image */}
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Ver detalles de ${project.title}`}
        className={`relative block aspect-[16/11] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_24px_60px_rgba(15,23,42,.12)] ${flip ? 'md:order-2' : ''}`}
      >
        <img
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 rounded-lg border border-white/25 bg-brand-dark/72 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md" style={grotesk}>
          {project.category}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-primary shadow-lg transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-12">
          <ArrowUpRight size={20} />
        </span>
      </button>

      {/* Content */}
      <div className={flip ? 'md:order-1' : ''}>
        <div className="flex items-baseline gap-4">
          <span
            className="bg-gradient-to-br from-brand-primary via-brand-cyan to-brand-accent bg-clip-text text-5xl font-bold leading-none text-transparent md:text-6xl"
            style={grotesk}
          >
            {number}
          </span>
          <span className="h-px flex-1 translate-y-[-0.4rem] bg-gradient-to-r from-slate-300 to-transparent" />
          <span className="text-sm font-bold text-brand-secondary" style={grotesk}>{project.year}</span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-black tracking-tight text-brand-ink md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-md text-[15px] leading-7 text-brand-secondary">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-brand-primary/15 bg-brand-primary/5 px-2.5 py-1 text-xs font-semibold text-brand-primary"
              style={grotesk}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-5">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="group/btn inline-flex items-center gap-2 text-sm font-bold text-brand-ink transition-colors hover:text-brand-primary"
          >
            Ver proyecto
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
    </motion.article>
  )
}

export default function FeaturedProjects({ projects, onSelect }) {
  const featured = projects.slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 block text-xs font-bold uppercase tracking-[0.22em] text-brand-primary"
            style={grotesk}
          >
            Trabajo seleccionado
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title font-display text-4xl font-bold text-brand-ink md:text-5xl"
          >
            Proyectos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-brand-secondary"
          >
            Una seleccion de los proyectos que mejor representan mi trabajo. Presiona cualquiera para ver mas detalles.
          </motion.p>
        </div>

        <Link
          to="/projects"
          className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-primary/40 hover:text-brand-primary"
          style={grotesk}
        >
          Ver todos
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {featured.map((project, index) => (
          <FeaturedRow key={project.id} project={project} index={index} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

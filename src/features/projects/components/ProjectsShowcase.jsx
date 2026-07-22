import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetailModal from './ProjectDetailModal'
import ProjectFilter from './ProjectFilter'
import FeaturedProjects from './FeaturedProjects'
import ProjectViewsGallery from './ProjectViewsGallery'
import useProjects from '../hooks/useProjects'

export default function ProjectsShowcase({ compact = false }) {
  const {
    projects,
    filteredProjects,
    visualProjects,
    selectedProject,
    activeCategory,
    isLoading,
    error,
    source,
    categories,
    setSelectedProject,
    clearSelectedProject,
    setActiveCategory,
  } = useProjects()

  const visibleProjects = compact ? filteredProjects.slice(0, 3) : filteredProjects

  if (compact) {
    return (
      <>
        <FeaturedProjects projects={filteredProjects} onSelect={setSelectedProject} />
        <ProjectDetailModal project={selectedProject} onClose={clearSelectedProject} />
      </>
    )
  }

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-kicker type-reveal mb-3 text-brand-primary">Visual case studies</p>
          <h2 className="section-title type-reveal text-4xl font-display font-bold text-brand-ink md:text-5xl">Proyectos</h2>
          <p className="type-reveal-delay mt-5 text-brand-secondary">
            Explora capturas de interfaces y fichas de cada proyecto frontend. El apartado de vistas demuestra la
            capacidad visual de lo construido; las tarjetas dan el contexto técnico y los enlaces.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary shadow-sm">
              {isLoading
                ? 'Cargando GitHub...'
                : source === 'github'
                  ? 'Curados + repos frontend de GitHub'
                  : 'Curados locales y de comunidades'}
            </span>
            <span className="inline-flex rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-sky-700 shadow-sm">
              Comunidad IN6BV
            </span>
          </div>
          {error && (
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-accent">
              No se pudo cargar GitHub ahora mismo; estoy mostrando proyectos locales como respaldo.
            </p>
          )}
        </div>
      </div>

      {/* Apartado de vistas: capturas solo de proyectos con UI */}
      <div className="mb-20">
        <ProjectViewsGallery projects={visualProjects.length ? visualProjects : projects} onOpenProject={setSelectedProject} />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center md:text-left">
          <p className="section-kicker mb-2 text-brand-primary">Catálogo</p>
          <h3 className="font-display text-2xl font-bold text-brand-ink md:text-3xl">Todos los proyectos</h3>
        </div>

        <div className="mb-10">
          <ProjectFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={clearSelectedProject} />
    </>
  )
}

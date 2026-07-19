import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetailModal from './ProjectDetailModal'
import ProjectFilter from './ProjectFilter'
import FeaturedProjects from './FeaturedProjects'
import useProjects from '../hooks/useProjects'

export default function ProjectsShowcase({ compact = false }) {
  const {
    filteredProjects,
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
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-kicker type-reveal mb-3 text-brand-primary">Visual case studies</p>
          <h2 className="section-title type-reveal text-4xl font-display font-bold text-brand-ink md:text-5xl">Proyectos</h2>
          <p className="type-reveal-delay mt-5 text-brand-secondary">
            Una vista más visual de mis proyectos frontend: presiona cualquier tarjeta para ver imagen, información, tecnologías y enlaces.
          </p>
          <div className="mt-5 inline-flex rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary shadow-sm">
            {isLoading ? 'Cargando GitHub...' : source === 'github' ? 'Repos frontend desde GitHub' : 'Proyectos frontend locales'}
          </div>
          {error && (
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-accent">
              No se pudo cargar GitHub ahora mismo; estoy mostrando proyectos locales como respaldo.
            </p>
          )}
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

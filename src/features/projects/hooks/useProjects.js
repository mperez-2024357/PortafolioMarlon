import { useEffect } from 'react'
import useProjectsStore from '../store/useProjectsStore'

export default function useProjects() {
  const projects = useProjectsStore((state) => state.projects)
  const selectedProject = useProjectsStore((state) => state.selectedProject)
  const activeCategory = useProjectsStore((state) => state.activeCategory)
  const isLoading = useProjectsStore((state) => state.isLoading)
  const error = useProjectsStore((state) => state.error)
  const source = useProjectsStore((state) => state.source)
  const fetchGitHubProjects = useProjectsStore((state) => state.fetchGitHubProjects)
  const setSelectedProject = useProjectsStore((state) => state.setSelectedProject)
  const clearSelectedProject = useProjectsStore((state) => state.clearSelectedProject)
  const setActiveCategory = useProjectsStore((state) => state.setActiveCategory)

  useEffect(() => {
    fetchGitHubProjects()
  }, [fetchGitHubProjects])

  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)
  const visualProjects = projects.filter(
    (project) =>
      project.hasVisualInterface &&
      Array.isArray(project.screenshots) &&
      project.screenshots.length > 0,
  )

  return {
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
  }
}

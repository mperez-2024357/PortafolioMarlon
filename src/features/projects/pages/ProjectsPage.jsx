import React from 'react'
import PortfolioLayout from '../../../shared/components/layout/PortfolioLayout'
import ProjectsShowcase from '../components/ProjectsShowcase'

export default function ProjectsPage() {
  return (
    <PortfolioLayout>
      <section className="section-light min-h-screen px-4 py-28">
        <ProjectsShowcase />
      </section>
    </PortfolioLayout>
  )
}

import React from 'react'
import SectionWrapper from '../../../shared/components/ui/SectionWrapper.jsx'
import ProjectsShowcase from '../../projects/components/ProjectsShowcase.jsx'

export default function ProjectsSection(){
  return (
    <SectionWrapper id="projects" className="section-light py-24">
      <div className="container mx-auto px-4">
        <ProjectsShowcase compact />
      </div>
    </SectionWrapper>
  )
}

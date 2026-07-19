import React from 'react'
import PortfolioLayout from '../../../shared/components/layout/PortfolioLayout.jsx'
import HeroSection from '../components/HeroSection.jsx'
import SkillsSection from '../components/SkillsSection.jsx'
import ExperienceSection from '../components/ExperienceSection.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function HomePage() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </PortfolioLayout>
  )
}

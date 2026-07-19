import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import AboutExperiments from '../components/AboutExperiments'
import Header from '../../../shared/components/header/Header'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutExperiments />

      <footer className="py-8 bg-brand-dark text-white border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-sm">
          <span className="text-brand-accent">&copy;</span> {new Date().getFullYear()} Marlon
        </div>
      </footer>
    </div>
  )
}

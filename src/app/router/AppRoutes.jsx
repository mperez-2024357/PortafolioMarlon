import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// Eager: la home es la primera pintura, no debe esperar a un chunk aparte.
import HomePage from '../../features/home/pages/HomePage.jsx'

// Lazy: el resto de rutas (y su Three.js / dependencias pesadas) se cargan bajo demanda.
const AboutPage = lazy(() => import('../../features/about/pages/AboutPage.jsx'))
const ContactPage = lazy(() => import('../../features/contact/pages/ContactPage.jsx'))
const EducationPage = lazy(() => import('../../features/education/pages/EducationPage.jsx'))
const ExperiencePage = lazy(() => import('../../features/experience/pages/ExperiencePage.jsx'))
const ProjectsPage = lazy(() => import('../../features/projects/pages/ProjectsPage.jsx'))
const SkillsPage = lazy(() => import('../../features/stack/pages/SkillsPage.jsx'))

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-brand-cyan" />
    </div>
  )
}

export const AppRoutes = () => {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

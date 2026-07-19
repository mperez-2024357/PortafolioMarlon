import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import WaveGrid from './WaveGrid'

export default function AboutExperiments() {
  return (
    <section className="relative py-32 overflow-hidden bg-space-graphite">
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas
          camera={{ position: [0, 4, 8], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <WaveGrid />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-kicker mb-4 inline-block text-brand-accent">Lo que me mueve</span>
          <h2 className="section-title text-4xl md:text-5xl font-display font-bold text-white">
            Filosofia & enfoque
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PhilosophyCard
            icon={<CodeIcon />}
            title="Codigo limpio"
            description="Arquitectura modular, feature-sliced design, y codigo que otros desarrolladores quieren leer."
            accent="brand-primary"
          />
          <PhilosophyCard
            icon={<EyeIcon />}
            title="Experiencia visual"
            description="Animaciones fluidas, efectos 3D, y atencion al detalle que transforma una app en una experiencia."
            accent="brand-cyan"
          />
          <PhilosophyCard
            icon={<RocketIcon />}
            title="Rendimiento"
            description="Optimizacion desde el principio: lazy loading, code splitting, y metricas Core Web Vitals."
            accent="brand-accent"
          />
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Disponible para <span className="text-white font-semibold">proyectos freelance</span>,
            <span className="text-brand-cyan font-semibold"> colaboraciones</span> y
            <span className="text-brand-accent font-semibold"> oportunidades profesionales</span>.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contactame
            </Link>
            <Link to="/" className="btn-ghost">
              Ver proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhilosophyCard({ icon, title, description, accent }) {
  return (
    <div className="glass-panel rounded-xl p-8 hover:border-white/20 transition-all duration-300 group">
      <div className={`w-12 h-12 rounded-lg bg-${accent}/20 flex items-center justify-center mb-5 text-${accent} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-white font-display font-bold text-xl mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function RocketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ParticleMorphField from './ParticleMorphField'

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="!absolute inset-0"
        >
          <Suspense fallback={null}>
            <ParticleMorphField />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <span className="type-reveal section-kicker mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-brand-cyan">
            Sobre mi
          </span>

          <h1 className="type-reveal-delay font-display font-black text-white leading-[0.9] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            <span className="block">Marlon</span>
            <span className="block text-gradient-accent">Perez</span>
          </h1>

          <p className="type-reveal-late mt-8 text-xl leading-relaxed text-slate-300 max-w-xl">
            Desarrollador full-stack apasionado por crear experiencias digitales que combinan
            <span className="accent-shimmer font-semibold"> codigo limpio</span>,
            <span className="text-brand-cyan font-semibold"> diseno visual</span> y
            <span className="text-brand-accent font-semibold"> tecnologia moderna</span>.
          </p>

          <div className="type-reveal-late mt-10 flex flex-wrap gap-4">
            <div className="glass-panel rounded-xl px-6 py-4">
              <span className="text-3xl font-black text-white">3+</span>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Anos de experiencia</p>
            </div>
            <div className="glass-panel rounded-xl px-6 py-4">
              <span className="text-3xl font-black text-brand-cyan">15+</span>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Tecnologias</p>
            </div>
            <div className="glass-panel rounded-xl px-6 py-4">
              <span className="text-3xl font-black text-brand-accent">10+</span>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Proyectos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
          <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}

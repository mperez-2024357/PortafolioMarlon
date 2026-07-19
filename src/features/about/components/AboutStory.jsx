import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import NoiseSphere from './NoiseSphere'

export default function AboutStory() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative py-32 overflow-hidden bg-brand-dark">
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#00D2FF" />
          <Suspense fallback={null}>
            <NoiseSphere scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <span className="section-kicker mb-4 inline-block text-brand-cyan">Mi historia</span>
          <h2 className="section-title text-4xl md:text-5xl font-display font-bold text-white mb-8">
            De la curiosidad al codigo
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              Mi camino en la programacion comenzo con la curiosidad de entender como funcionan
              las cosas. Desde mis primeras lineas de HTML hasta construir aplicaciones full-stack
              completas, cada proyecto ha sido un paso en un viaje de aprendizaje continuo.
            </p>

            <p>
              Actualmente me especializo en el ecosistema <span className="text-brand-cyan font-semibold">React</span> y
              <span className="text-brand-cyan font-semibold"> Node.js</span>, construyendo interfaces
              modernas con <span className="text-brand-accent font-semibold">Tailwind CSS</span> y
              experiencias 3D con <span className="text-brand-accent font-semibold">Three.js</span>.
            </p>

            <p>
              Mi enfoque: codigo limpio, arquitectura escalable y experiencias de usuario que
              se sienten <span className="text-white font-semibold">premium</span>.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <TimelineItem year="2022" label="Primeros pasos en desarrollo web" />
            <TimelineItem year="2023" label="Dominio de React y ecosistema JS" />
            <TimelineItem year="2024" label="Full-stack con Node.js y bases de datos" />
            <TimelineItem year="2025" label="Three.js, animaciones y diseno avanzado" />
            <TimelineItem year="2026" label="Practicas profesionales en Banco BAC" active />
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ year, label, active = false }) {
  return (
    <div className={`glass-panel rounded-lg px-4 py-3 transition-all duration-300 ${active ? 'border-brand-accent/50 shadow-lg shadow-brand-accent/10' : ''}`}>
      <span className={`text-sm font-black ${active ? 'text-brand-accent' : 'text-brand-cyan'}`}>{year}</span>
      <p className="text-xs text-slate-400 mt-1">{label}</p>
    </div>
  )
}

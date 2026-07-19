import React, { Suspense, lazy } from 'react'
import { SITE, SOCIAL_LINKS } from '../../../shared/constants/site'

// Three.js es pesado: se carga aparte para que el texto del hero pinte de inmediato.
const AnimatedBackground = lazy(() => import('./AnimatedBackground.jsx'))

export default function HeroSection() {
  return (
    <section id="hero" className="section-dark hero-blue-bg min-h-[100vh] flex items-center overflow-hidden relative z-10 pt-20">
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 py-20 md:py-28 relative z-20 pointer-events-none">
        <div className="flex flex-col justify-center pointer-events-auto">
          <span className="type-reveal section-kicker mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-brand-cyan">
            Full stack developer
          </span>
          <h1 className="hero-name type-reveal-delay" aria-label="Marlon Pérez">
            <span className="headline-line type-float">Marlon</span>
            <span className="headline-line type-float" style={{ animationDelay: '0.5s' }}>Pérez</span>
          </h1>
          <p className="type-reveal-late mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Diseño y desarrollo experiencias web <span className="accent-shimmer font-semibold">modernas</span>, rápidas y visualmente cuidadas para productos digitales.
          </p>
          <div className="type-reveal-late mt-8 flex flex-wrap gap-4 items-center">
            <a className="btn-resume flex items-center gap-3" href={SITE.resumeUrl} target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Ver CV
            </a>

            <a className="btn-ghost" href="#contact">Contrátame</a>
          </div>

          <div className="type-reveal-late mt-6 flex items-center gap-3">
            <a className="social-btn" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.405 7.86 10.93.574.106.784-.25.784-.553 0-.274-.01-1-.016-1.964-3.197.695-3.873-1.542-3.873-1.542-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.08-.699.08-.699 1.154.082 1.76 1.186 1.76 1.186 1.025 1.755 2.689 1.249 3.345.955.104-.743.402-1.249.731-1.536-2.552-.29-5.237-1.276-5.237-5.678 0-1.254.448-2.279 1.184-3.083-.119-.29-.513-1.457.112-3.037 0 0 .965-.31 3.162 1.18a10.99 10.99 0 0 1 2.876-.387c.976.004 1.96.132 2.877.387 2.196-1.49 3.16-1.18 3.16-1.18.627 1.58.233 2.747.114 3.037.737.804 1.183 1.829 1.183 3.083 0 4.412-2.69 5.384-5.253 5.67.413.356.78 1.058.78 2.133 0 1.539-.014 2.78-.014 3.158 0 .306.208.665.79.552C20.712 21.403 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z" fill="currentColor"/>
              </svg>
            </a>
            <a className="social-btn" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.03h4.55V24H.22V8.03zM8.98 8.03h4.37v2.16h.06c.61-1.16 2.1-2.37 4.32-2.37 4.62 0 5.48 3.04 5.48 6.99V24h-4.56v-7.49c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.95-2.87 3.96V24H8.98V8.03z" fill="currentColor"/>
              </svg>
            </a>
            <a className="social-btn" href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* El lado derecho se mantiene vacío para que el fondo 3D respire detrás del contenido */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  )
}

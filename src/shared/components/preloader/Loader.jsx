import React from 'react'
import { SITE } from '../../constants/site'

/**
 * Full-screen intro loader while the 3D scene (and critical assets) warm up.
 * percent: 0–100. exiting: true triggers the exit fade before unmount.
 */
export default function Loader({ percent = 0, exiting = false }) {
  const clamped = Math.min(100, Math.max(0, Math.round(percent)))

  return (
    <div
      className={`preloader-screen fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-brand-dark text-white ${
        exiting ? 'preloader-screen--exit' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      aria-label={`Cargando experiencia, ${clamped} por ciento`}
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="preloader-orb preloader-orb--cyan" />
        <div className="preloader-orb preloader-orb--blue" />
        <div className="preloader-orb preloader-orb--orange" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,17,31,0.85)_70%)]" />
      </div>

      <div className="preloader-content relative z-10 flex w-[min(22rem,88vw)] flex-col items-center text-center">
        <span className="section-kicker mb-5 text-brand-cyan">
          {SITE.role}
        </span>

        <div className="preloader-mark mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(0,210,255,0.18)] backdrop-blur-md">
          <span className="font-display text-2xl font-black tracking-tight text-white">
            {SITE.name.slice(0, 1)}
          </span>
        </div>

        <h1 className="font-display text-3xl font-black tracking-[-0.04em] sm:text-4xl">
          {SITE.fullName}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Preparando la experiencia 3D…
        </p>

        <div className="mt-8 w-full">
          <div className="mb-2 flex items-end justify-between gap-3">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">
              Loading
            </span>
            <span className="font-mono text-sm tabular-nums text-brand-cyan">
              {clamped}%
            </span>
          </div>

          <div className="preloader-track h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="preloader-bar h-full rounded-full bg-gradient-to-r from-brand-primary via-brand-cyan to-brand-accent"
              style={{ width: `${clamped}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import SectionWrapper from '../../../shared/components/ui/SectionWrapper.jsx'
import { SITE, SOCIAL_LINKS } from '../../../shared/constants/site'

const EMAIL = SITE.email

const contactChannels = [
  {
    label: 'Correo',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
  },
  {
    label: 'Ubicacion',
    value: SITE.location,
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Disponibilidad',
    value: 'Abierto a proyectos',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

const socials = [
  {
    label: 'GitHub',
    href: SOCIAL_LINKS.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.405 7.86 10.93.574.106.784-.25.784-.553 0-.274-.01-1-.016-1.964-3.197.695-3.873-1.542-3.873-1.542-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.08-.699.08-.699 1.154.082 1.76 1.186 1.76 1.186 1.025 1.755 2.689 1.249 3.345.955.104-.743.402-1.249.731-1.536-2.552-.29-5.237-1.276-5.237-5.678 0-1.254.448-2.279 1.184-3.083-.119-.29-.513-1.457.112-3.037 0 0 .965-.31 3.162 1.18a10.99 10.99 0 0 1 2.876-.387c.976.004 1.96.132 2.877.387 2.196-1.49 3.16-1.18 3.16-1.18.627 1.58.233 2.747.114 3.037.737.804 1.183 1.829 1.183 3.083 0 4.412-2.69 5.384-5.253 5.67.413.356.78 1.058.78 2.133 0 1.539-.014 2.78-.014 3.158 0 .306.208.665.79.552C20.712 21.403 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.03h4.55V24H.22V8.03zM8.98 8.03h4.37v2.16h.06c.61-1.16 2.1-2.37 4.32-2.37 4.62 0 5.48 3.04 5.48 6.99V24h-4.56v-7.49c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.95-2.87 3.96V24H8.98V8.03z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Por favor completa todos los campos.')
      return
    }
    const subject = encodeURIComponent(`Contacto de ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nDe: ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    toast.success('Abriendo tu cliente de correo...')
  }

  return (
    <SectionWrapper id="contact" className="section-dark blue-depth-bg relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,210,255,.16),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(249,115,22,.12),transparent_32%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="section-kicker mb-3 block text-brand-cyan">Hablemos</span>
          <h2 className="section-title text-4xl md:text-5xl font-display font-bold text-white">Contacto</h2>
          <p className="mt-5 text-slate-300">
            Tienes un proyecto en mente? Escribeme y trabajemos juntos para construir algo increible.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <div className="flex flex-col gap-4">
            {contactChannels.map((channel) => {
              const Wrapper = channel.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={channel.label}
                  {...(channel.href ? { href: channel.href } : {})}
                  className="glass-panel group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-cyan">
                    {channel.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{channel.label}</span>
                    <span className="font-semibold text-white break-all">{channel.value}</span>
                  </span>
                </Wrapper>
              )
            })}

            <div className="glass-panel rounded-2xl p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Sigueme</span>
              <div className="mt-3 flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-btn">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <form onSubmit={handleSubmit} className="glass-panel grid grid-cols-1 gap-5 rounded-2xl p-6 sm:grid-cols-2 sm:p-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Nombre</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="rounded-lg border border-white/12 bg-white/5 p-3.5 text-white placeholder-slate-500 transition-colors focus:border-brand-cyan focus:outline-none focus:ring-4 focus:ring-brand-cyan/10"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Correo</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="rounded-lg border border-white/12 bg-white/5 p-3.5 text-white placeholder-slate-500 transition-colors focus:border-brand-cyan focus:outline-none focus:ring-4 focus:ring-brand-cyan/10"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aqui..."
                rows={5}
                className="resize-none rounded-lg border border-white/12 bg-white/5 p-3.5 text-white placeholder-slate-500 transition-colors focus:border-brand-cyan focus:outline-none focus:ring-4 focus:ring-brand-cyan/10"
              />
            </div>
            <button type="submit" className="btn-primary col-span-1 mt-1 w-full py-4 sm:col-span-2">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}

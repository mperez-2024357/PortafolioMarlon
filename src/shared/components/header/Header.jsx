import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SOCIAL_LINKS } from '../../constants/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleProjectsClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById('projects')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-brand-dark/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-display font-bold text-white">
          Marlon<span className="text-brand-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-semibold items-center text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <a href="/#projects" onClick={handleProjectsClick} className="hover:text-white transition-colors">Proyectos</a>
            <Link to="/about" className="hover:text-white transition-colors">Sobre mi</Link>
            <Link to="/education" className="hover:text-white transition-colors">Educacion</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contacto</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.405 7.86 10.93.574.106.784-.25.784-.553 0-.274-.01-1-.016-1.964-3.197.695-3.873-1.542-3.873-1.542-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.08-.699.08-.699 1.154.082 1.76 1.186 1.76 1.186 1.025 1.755 2.689 1.249 3.345.955.104-.743.402-1.249.731-1.536-2.552-.29-5.237-1.276-5.237-5.678 0-1.254.448-2.279 1.184-3.083-.119-.29-.513-1.457.112-3.037 0 0 .965-.31 3.162 1.18a10.99 10.99 0 0 1 2.876-.387c.976.004 1.96.132 2.877.387 2.196-1.49 3.16-1.18 3.16-1.18.627 1.58.233 2.747.114 3.037.737.804 1.183 1.829 1.183 3.083 0 4.412-2.69 5.384-5.253 5.67.413.356.78 1.058.78 2.133 0 1.539-.014 2.78-.014 3.158 0 .306.208.665.79.552C20.712 21.403 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z" fill="currentColor"/>
              </svg>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.03h4.55V24H.22V8.03zM8.98 8.03h4.37v2.16h.06c.61-1.16 2.1-2.37 4.32-2.37 4.62 0 5.48 3.04 5.48 6.99V24h-4.56v-7.49c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.95-2.87 3.96V24H8.98V8.03z" fill="currentColor"/>
              </svg>
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(o => !o)} className="p-2 rounded-lg bg-white/10 text-white border border-white/15">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-brand-dark/70" onClick={() => setOpen(false)} />
        <div className="absolute right-0 top-0 w-72 h-full bg-brand-dark p-6 text-white shadow-2xl">
          <button onClick={() => setOpen(false)} className="mb-4 p-2 rounded-lg border border-white/10 text-sm font-semibold">Cerrar</button>
          <nav className="flex flex-col gap-4 mt-4">
            <Link to="/" className="text-lg font-semibold">Inicio</Link>
            <a href="/#projects" onClick={handleProjectsClick} className="text-lg font-semibold">Proyectos</a>
            <Link to="/about" className="text-lg font-semibold">Sobre mi</Link>
            <Link to="/education" className="text-lg font-semibold">Educacion</Link>
            <Link to="/contact" className="text-lg font-semibold">Contacto</Link>
          </nav>
          <div className="mt-6 flex gap-3">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg text-white border border-white/10" aria-label="GitHub">GH</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg text-white border border-white/10" aria-label="LinkedIn">in</a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg text-white border border-white/10" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>
    </header>
  )
}

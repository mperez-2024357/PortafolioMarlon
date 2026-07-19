import React, { createContext, useContext, useEffect, useState } from 'react'
import Loader from './Loader'

const PreloaderContext = createContext({
  isLoading: true,
  loadingPercent: 0,
  bypassLoading: () => {}
})

export const usePreloader = () => {
  const ctx = useContext(PreloaderContext)
  if (!ctx) throw new Error('usePreloader debe usarse dentro de Preloader')
  return ctx
}

export default function Preloader({ children, disabled = false }){
  const [isLoading, setIsLoading] = useState(!disabled)
  const [loadingPercent, setLoadingPercent] = useState(0)

  useEffect(() => {
    if (disabled) return setIsLoading(false)
    let start = Date.now()
    const duration = 1600
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / duration)
      setLoadingPercent(Math.round(t * 100))
      if (t < 1) requestAnimationFrame(tick)
      else setTimeout(() => setIsLoading(false), 250)
    }
    tick()
  }, [disabled])

  const bypassLoading = () => { setLoadingPercent(100); setIsLoading(false) }

  return (
    <PreloaderContext.Provider value={{ isLoading, loadingPercent, bypassLoading }}>
      {isLoading && <Loader percent={loadingPercent} />}
      {children}
    </PreloaderContext.Provider>
  )
}

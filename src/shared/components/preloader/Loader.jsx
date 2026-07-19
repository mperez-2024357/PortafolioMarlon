import React from 'react'

export default function Loader({ percent = 0 }){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark text-white">
      <div className="w-80 rounded-lg border border-white/10 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl">
        <div className="section-title text-2xl font-semibold mb-2">Cargando</div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-primary to-brand-accent transition-all" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-3 text-sm opacity-80">{percent}%</div>
      </div>
    </div>
  )
}

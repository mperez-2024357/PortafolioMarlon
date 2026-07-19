import React from 'react'

export default function ExperienceMetric({ icon: Icon, label, value, accent = false }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
        <Icon size={18} strokeWidth={2} />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">{label}</p>
      <p className={`mt-1 text-lg font-black ${accent ? 'text-brand-accent' : 'text-brand-ink'}`}>{value}</p>
    </div>
  )
}

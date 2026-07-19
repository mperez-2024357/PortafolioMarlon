import React from 'react'

export default function ProjectFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const active = category === activeCategory

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-bold transition-all duration-200 ${
              active
                ? 'border-brand-primary bg-brand-primary text-white shadow-[0_14px_28px_rgba(37,99,235,.24)]'
                : 'border-slate-200 bg-white text-brand-secondary hover:border-brand-primary/30 hover:text-brand-primary'
            }`}
          >
            {category === 'All' ? 'Todos' : category}
          </button>
        )
      })}
    </div>
  )
}

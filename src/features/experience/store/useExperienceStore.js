import { create } from 'zustand'

const experiences = [
  {
    id: 'bac-practicas-2026',
    company: 'Banco BAC',
    role: 'Practicante de Tecnología',
    type: 'Prácticas profesionales',
    location: 'Guatemala',
    status: 'Próximamente',
    startDate: '2026-08-17',
    startLabel: '17 de agosto de 2026',
    hours: 400,
    summary:
      'Prácticas profesionales en Banco BAC, orientadas a fortalecer experiencia real en un entorno financiero formal, colaborativo y de alta responsabilidad.',
    highlights: [
      'Inicio programado para el 17 de agosto de 2026.',
      'Duración total de 400 horas de práctica.',
      'Experiencia enfocada en aprendizaje profesional dentro del sector bancario.',
    ],
  },
]

const useExperienceStore = create(() => ({
  experiences,
}))

export default useExperienceStore

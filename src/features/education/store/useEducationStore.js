import { create } from 'zustand'

const education = [
  {
    id: 'kinal-perito-informatica',
    institution: 'Centro Educativo Técnico Laboral Kinal',
    shortName: 'Kinal',
    title: 'Perito en Informática',
    period: '2024 — 2026',
    status: 'En curso',
    summary:
      'Formación técnica enfocada en desarrollo de software: programación orientada a objetos en Java, estructuras de datos, bases de datos y desarrollo de aplicaciones web.',
    highlights: [
      'Base sólida en Java y programación orientada a objetos.',
      'Desarrollo web frontend y backend con tecnologías modernas.',
      'Diseño y consumo de bases de datos relacionales.',
      'Prácticas profesionales en Banco BAC (400 horas) como cierre de la carrera.',
    ],
  },
]

const diplomas = [
  {
    id: 'it-essentials',
    title: 'IT Essentials',
    institution: 'Cisco Networking Academy',
    issuer: 'KINAL',
    date: '02/08/2024',
    summary:
      'Credencial de fundamentos de hardware, software, sistemas operativos, redes y soporte tecnico.',
    imageUrl: '/assets/diplomas/it-essentials-horizontal.png',
    pdfUrl: '/assets/diplomas/it-essentials.pdf',
  },
  {
    id: 'ccnav7-introduccion-redes',
    title: 'CCNAv7: Introduccion a Redes',
    institution: 'Cisco Networking Academy',
    issuer: 'KINAL',
    date: '28/08/2024',
    summary:
      'Curso orientado a conceptos base de redes, direccionamiento IP, conectividad y configuracion inicial.',
    imageUrl: '/assets/diplomas/ccnav7-introduccion-redes-horizontal.png',
    pdfUrl: '/assets/diplomas/ccnav7-introduccion-redes.pdf',
  },
]

const useEducationStore = create(() => ({
  education,
  diplomas,
}))

export default useEducationStore

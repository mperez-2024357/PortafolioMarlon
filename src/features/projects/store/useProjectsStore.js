import { create } from 'zustand'
import { GITHUB_USERNAME } from '../../../shared/constants/site'

const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const createProjectImage = ({ title, subtitle, from, to, accent }) => {
  const safeTitle = escapeXml(title)
  const safeSubtitle = escapeXml(subtitle)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#020817" flood-opacity=".38"/>
        </filter>
      </defs>
      <rect width="1200" height="760" rx="36" fill="url(#bg)"/>
      <circle cx="1010" cy="126" r="190" fill="${accent}" opacity=".2"/>
      <circle cx="178" cy="650" r="240" fill="#00D2FF" opacity=".13"/>
      <rect x="126" y="116" width="948" height="528" rx="28" fill="#F8FAFC" opacity=".96" filter="url(#shadow)"/>
      <rect x="170" y="164" width="860" height="58" rx="16" fill="#07111F"/>
      <circle cx="202" cy="193" r="8" fill="#F97316"/>
      <circle cx="232" cy="193" r="8" fill="#00D2FF"/>
      <circle cx="262" cy="193" r="8" fill="#2563EB"/>
      <rect x="170" y="268" width="326" height="246" rx="24" fill="#E8F2FF"/>
      <rect x="540" y="276" width="382" height="30" rx="15" fill="#0F172A"/>
      <rect x="540" y="334" width="458" height="18" rx="9" fill="#64748B" opacity=".44"/>
      <rect x="540" y="374" width="410" height="18" rx="9" fill="#64748B" opacity=".32"/>
      <rect x="540" y="442" width="160" height="50" rx="14" fill="#2563EB"/>
      <rect x="722" y="442" width="132" height="50" rx="14" fill="#F97316" opacity=".95"/>
      <path d="M236 440 C292 340 350 356 402 278 C426 344 424 410 382 450 C340 492 282 488 236 440Z" fill="${accent}" opacity=".9"/>
      <text x="170" y="600" font-family="Inter, Arial, sans-serif" font-size="52" font-weight="800" fill="#0F172A">${safeTitle}</text>
      <text x="170" y="644" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600" fill="#64748B">${safeSubtitle}</text>
    </svg>
  `

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const formatProjectTitle = (name) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

const formatDateYear = (value) => {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '2026' : String(date.getFullYear())
}

const formatUpdatedDate = (value) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Actualizado recientemente'

  return `Actualizado ${date.toLocaleDateString('es-GT', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })}`
}

const getRepoCategory = (repo) => repo.language || repo.topics?.[0] || 'GitHub'

const FRONTEND_KEYWORDS = [
  'front',
  'frontend',
  'react',
  'vite',
  'next',
  'tailwind',
  'html',
  'css',
  'javascript',
  'typescript',
  'web',
  'ui',
  'portfolio',
]

const FRONTEND_LANGUAGES = ['JavaScript', 'TypeScript', 'HTML', 'CSS']

const isFrontendRepo = (repo) => {
  const searchableText = [
    repo.name,
    repo.description,
    repo.language,
    ...(repo.topics || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return FRONTEND_LANGUAGES.includes(repo.language) || FRONTEND_KEYWORDS.some((keyword) => searchableText.includes(keyword))
}

const getRepoAccent = (language) => {
  const accents = {
    JavaScript: '#F97316',
    TypeScript: '#2563EB',
    CSS: '#00D2FF',
    HTML: '#F97316',
    Java: '#2563EB',
    Python: '#00D2FF',
  }

  return accents[language] || '#2563EB'
}

const mapGitHubRepoToProject = (repo, languages = {}) => {
  const languageNames = Object.keys(languages)
  const tags = [...new Set([repo.language, ...languageNames, ...(repo.topics || [])].filter(Boolean))].slice(0, 6)
  const category = getRepoCategory(repo)
  const title = formatProjectTitle(repo.name)

  return {
    id: `github-${repo.id}`,
    title,
    category,
    year: formatDateYear(repo.updated_at),
    status: repo.archived ? 'Archivado' : repo.fork ? 'Fork' : 'GitHub',
    summary: repo.description || `Repositorio público de GitHub para ${title}.`,
    description:
      repo.description ||
      `Proyecto público alojado en GitHub. La información se sincroniza desde el perfil ${GITHUB_USERNAME} usando la API pública de GitHub.`,
    image: createProjectImage({
      title,
      subtitle: `${repo.language || 'Repository'} · GitHub`,
      from: '#07111F',
      to: '#123B7D',
      accent: getRepoAccent(repo.language),
    }),
    tags: tags.length ? tags : ['GitHub', 'Repository'],
    features: [
      formatUpdatedDate(repo.updated_at),
      `${repo.stargazers_count} estrellas y ${repo.forks_count} forks en GitHub.`,
      repo.homepage ? 'Incluye enlace de demo o página pública.' : 'Repositorio disponible para revisar código y evolución.',
    ],
    metrics: [
      { label: 'Stars', value: String(repo.stargazers_count) },
      { label: 'Forks', value: String(repo.forks_count) },
      { label: 'Lenguaje', value: repo.language || 'N/A' },
    ],
    repositoryUrl: repo.html_url,
    liveUrl: repo.homepage || repo.html_url,
  }
}

const projects = [
  {
    id: 'portfolio-personal',
    title: 'Portfolio Personal',
    category: 'Frontend',
    year: '2026',
    status: 'En desarrollo',
    summary: 'Portafolio profesional con identidad visual moderna, animaciones suaves y una experiencia 3D con React Three Fiber.',
    description:
      'Proyecto principal para presentar habilidades, stack tecnológico, experiencia y contacto. El enfoque está en una interfaz formal, limpia y premium con secciones reutilizables y datos organizados por feature.',
    image: createProjectImage({
      title: 'Portfolio Personal',
      subtitle: 'React + Tailwind + Three.js',
      from: '#07111F',
      to: '#123B7D',
      accent: '#2563EB',
    }),
    tags: ['React', 'Tailwind CSS', 'React Three Fiber', 'Zustand'],
    features: ['Hero 3D animado', 'Stack tecnológico interactivo', 'Diseño responsive', 'Arquitectura por features'],
    metrics: [
      { label: 'Stack', value: 'React' },
      { label: 'UI', value: 'Premium' },
      { label: 'Estado', value: 'Activo' },
    ],
    repositoryUrl: 'https://github.com',
    liveUrl: '/#hero',
  },
  {
    id: 'stack-dashboard',
    title: 'Stack Tecnológico',
    category: 'Dashboard UI',
    year: '2026',
    status: 'Activo',
    summary: 'Dashboard visual para explorar tecnologías, progreso, experiencia y proyectos relacionados.',
    description:
      'Sección tipo dashboard con keycaps, panel de detalle, barras animadas y SVGs de tecnologías. Está pensada para mostrar el perfil técnico de forma visual y fácil de escanear.',
    image: createProjectImage({
      title: 'Stack Dashboard',
      subtitle: 'Interactive skills showcase',
      from: '#080D18',
      to: '#0A1E3F',
      accent: '#00D2FF',
    }),
    tags: ['Framer Motion', 'Simple Icons', 'Tailwind CSS', 'Zustand'],
    features: ['Cards interactivas', 'Panel de detalle', 'Iconos SVG reales', 'Animaciones suaves'],
    metrics: [
      { label: 'Categorías', value: '4' },
      { label: 'Tecnologías', value: '15+' },
      { label: 'UX', value: 'Dashboard' },
    ],
    repositoryUrl: 'https://github.com',
    liveUrl: '/#skills',
  },
  {
    id: 'bac-practice-profile',
    title: 'Perfil de Prácticas BAC',
    category: 'Professional',
    year: '2026',
    status: 'Planificado',
    summary: 'Módulo de experiencia profesional centrado en prácticas de 400 horas en Banco BAC.',
    description:
      'Feature de experiencia organizada con store, hook y componentes reutilizables. Presenta la próxima etapa profesional con fechas, horas y contexto de aprendizaje.',
    image: createProjectImage({
      title: 'BAC Practice',
      subtitle: '400 horas profesionales',
      from: '#0F172A',
      to: '#2563EB',
      accent: '#F97316',
    }),
    tags: ['React', 'Zustand', 'Lucide Icons', 'Feature Architecture'],
    features: ['Timeline', 'Métricas de experiencia', 'Datos centralizados', 'Diseño formal'],
    metrics: [
      { label: 'Inicio', value: '17 Ago' },
      { label: 'Horas', value: '400' },
      { label: 'Empresa', value: 'BAC' },
    ],
    repositoryUrl: 'https://github.com',
    liveUrl: '/#experience',
  },
]

const useProjectsStore = create((set, get) => ({
  projects,
  selectedProject: null,
  activeCategory: 'All',
  isLoading: false,
  error: null,
  source: 'local',
  hasLoadedGitHub: false,
  fetchGitHubProjects: async () => {
    const { isLoading, hasLoadedGitHub } = get()
    if (isLoading || hasLoadedGitHub) return

    set({ isLoading: true, error: null })

    try {
      const response = await fetch(GITHUB_REPOS_URL, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      })

      if (!response.ok) {
        throw new Error(`GitHub respondió con estado ${response.status}`)
      }

      const repos = await response.json()
      const visibleRepos = repos.filter((repo) => !repo.private && isFrontendRepo(repo)).slice(0, 9)

      if (!visibleRepos.length) {
        throw new Error('No se encontraron repositorios públicos de frontend.')
      }

      const languageMaps = await Promise.all(
        visibleRepos.map(async (repo) => {
          try {
            const languageResponse = await fetch(repo.languages_url, {
              headers: { Accept: 'application/vnd.github+json' },
            })
            return languageResponse.ok ? languageResponse.json() : {}
          } catch {
            return {}
          }
        }),
      )

      const githubProjects = visibleRepos.map((repo, index) => mapGitHubRepoToProject(repo, languageMaps[index]))

      set({
        projects: githubProjects,
        activeCategory: 'All',
        isLoading: false,
        error: null,
        source: 'github',
        hasLoadedGitHub: true,
      })
    } catch (error) {
      set({
        isLoading: false,
        error: error.message || 'No se pudieron cargar los repositorios de GitHub.',
        source: 'local',
        hasLoadedGitHub: true,
      })
    }
  },
  setSelectedProject: (project) => set({ selectedProject: project }),
  clearSelectedProject: () => set({ selectedProject: null }),
  setActiveCategory: (category) => set({ activeCategory: category }),
}))

export default useProjectsStore

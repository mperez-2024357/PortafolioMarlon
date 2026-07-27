import { create } from 'zustand'
import { GITHUB_USERNAME } from '../../../shared/constants/site'

const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Mock UI screenshots as SVG data-URLs. Variants simulate real product views. */
const createProjectImage = ({ title, subtitle, from, to, accent, variant = 'hero' }) => {
  const safeTitle = escapeXml(title)
  const safeSubtitle = escapeXml(subtitle)
  const uid = `${variant}-${safeTitle.replace(/\s+/g, '').slice(0, 12)}`

  const frames = {
    hero: `
      <rect x="126" y="116" width="948" height="528" rx="28" fill="#F8FAFC" opacity=".96" filter="url(#shadow-${uid})"/>
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
    `,
    dashboard: `
      <rect x="100" y="100" width="1000" height="560" rx="24" fill="#F8FAFC" opacity=".97" filter="url(#shadow-${uid})"/>
      <rect x="100" y="100" width="220" height="560" rx="24" fill="#07111F"/>
      <rect x="130" y="140" width="140" height="14" rx="7" fill="#00D2FF" opacity=".85"/>
      <rect x="130" y="190" width="160" height="12" rx="6" fill="#94A3B8" opacity=".5"/>
      <rect x="130" y="220" width="160" height="12" rx="6" fill="#94A3B8" opacity=".35"/>
      <rect x="130" y="250" width="160" height="12" rx="6" fill="${accent}" opacity=".7"/>
      <rect x="130" y="280" width="160" height="12" rx="6" fill="#94A3B8" opacity=".35"/>
      <rect x="360" y="140" width="280" height="22" rx="8" fill="#0F172A"/>
      <rect x="360" y="190" width="200" height="100" rx="16" fill="#E8F2FF"/>
      <rect x="580" y="190" width="200" height="100" rx="16" fill="#E0F7FA"/>
      <rect x="800" y="190" width="200" height="100" rx="16" fill="#FFF3E8"/>
      <rect x="380" y="220" width="80" height="18" rx="6" fill="${accent}"/>
      <rect x="600" y="220" width="80" height="18" rx="6" fill="#00D2FF"/>
      <rect x="820" y="220" width="80" height="18" rx="6" fill="#F97316"/>
      <rect x="360" y="320" width="640" height="280" rx="18" fill="#EEF4FA"/>
      <rect x="400" y="360" width="120" height="180" rx="10" fill="${accent}" opacity=".55"/>
      <rect x="540" y="400" width="120" height="140" rx="10" fill="#2563EB" opacity=".7"/>
      <rect x="680" y="340" width="120" height="200" rx="10" fill="#00D2FF" opacity=".5"/>
      <rect x="820" y="380" width="120" height="160" rx="10" fill="#F97316" opacity=".45"/>
    `,
    detail: `
      <rect x="180" y="80" width="840" height="600" rx="28" fill="#F8FAFC" opacity=".97" filter="url(#shadow-${uid})"/>
      <rect x="180" y="80" width="840" height="72" rx="28" fill="#07111F"/>
      <rect x="180" y="120" width="840" height="32" fill="#07111F"/>
      <circle cx="220" cy="116" r="8" fill="#F97316"/>
      <circle cx="250" cy="116" r="8" fill="#00D2FF"/>
      <circle cx="280" cy="116" r="8" fill="#2563EB"/>
      <rect x="220" y="190" width="320" height="28" rx="10" fill="#0F172A"/>
      <rect x="220" y="240" width="480" height="14" rx="7" fill="#64748B" opacity=".4"/>
      <rect x="220" y="268" width="420" height="14" rx="7" fill="#64748B" opacity=".28"/>
      <rect x="220" y="320" width="760" height="200" rx="18" fill="#E8F2FF"/>
      <rect x="260" y="360" width="200" height="120" rx="14" fill="${accent}" opacity=".75"/>
      <rect x="490" y="360" width="200" height="120" rx="14" fill="#2563EB" opacity=".55"/>
      <rect x="720" y="360" width="200" height="120" rx="14" fill="#00D2FF" opacity=".45"/>
      <rect x="220" y="560" width="140" height="44" rx="12" fill="#2563EB"/>
      <rect x="380" y="560" width="140" height="44" rx="12" fill="#F97316" opacity=".9"/>
    `,
    mobile: `
      <rect x="420" y="60" width="360" height="640" rx="40" fill="#07111F" filter="url(#shadow-${uid})"/>
      <rect x="436" y="90" width="328" height="580" rx="28" fill="#F8FAFC"/>
      <rect x="460" y="120" width="180" height="18" rx="8" fill="#0F172A"/>
      <rect x="460" y="160" width="280" height="12" rx="6" fill="#64748B" opacity=".4"/>
      <rect x="460" y="200" width="280" height="140" rx="18" fill="#E8F2FF"/>
      <rect x="480" y="230" width="100" height="80" rx="12" fill="${accent}" opacity=".8"/>
      <rect x="600" y="230" width="100" height="80" rx="12" fill="#2563EB" opacity=".55"/>
      <rect x="460" y="370" width="280" height="70" rx="14" fill="#EEF4FA"/>
      <rect x="460" y="460" width="280" height="70" rx="14" fill="#EEF4FA"/>
      <rect x="460" y="550" width="280" height="48" rx="14" fill="#2563EB"/>
      <rect x="560" y="70" width="80" height="10" rx="5" fill="#334155"/>
    `,
  }

  const body = frames[variant] || frames.hero

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760">
      <defs>
        <linearGradient id="bg-${uid}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
        <filter id="shadow-${uid}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#020817" flood-opacity=".38"/>
        </filter>
      </defs>
      <rect width="1200" height="760" rx="36" fill="url(#bg-${uid})"/>
      <circle cx="1010" cy="126" r="190" fill="${accent}" opacity=".2"/>
      <circle cx="178" cy="650" r="240" fill="#00D2FF" opacity=".13"/>
      ${body}
      <text x="100" y="720" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC" opacity=".9">${safeTitle}</text>
      <text x="100" y="748" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="600" fill="#94A3B8">${safeSubtitle}</text>
    </svg>
  `

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/**
 * Capturas reales: public/assets/projects/<folder>/<variant>.png
 * Si pasas `assetFolder`, se usan esas rutas. Si no hay archivos aún,
 * el navegador fallará la carga; por eso preferimos `realImage` opcional
 * por variante o el mock SVG como fallback vía `useRealAssets: false`.
 *
 * Cómo poner imágenes:
 * 1. Exporta capturas (png/jpg/webp) a public/assets/projects/<carpeta>/
 * 2. Nombres: hero.png, dashboard.png, detail.png, mobile.png
 * 3. Activa useRealAssets: true en buildScreenshots del proyecto.
 */
const SHOT_META = [
  {
    id: 'hero',
    label: 'Vista principal',
    caption: 'Pantalla de entrada y primera impresión del producto.',
    file: 'hero.png',
  },
  {
    id: 'dashboard',
    label: 'Panel / flujo',
    caption: 'Disposición de información, métricas y navegación interna.',
    file: 'dashboard.png',
  },
  {
    id: 'detail',
    label: 'Detalle',
    caption: 'Vista de detalle con acciones y jerarquía visual clara.',
    file: 'detail.png',
  },
  {
    id: 'mobile',
    label: 'Responsive',
    caption: 'Adaptación a móvil: misma identidad, layout compacto.',
    file: 'mobile.png',
  },
]

const projectAsset = (folder, file) => `/assets/projects/${folder}/${file}`

const RESTAURANTE_FRONTEND_IMAGE = projectAsset(
  'restaurante-frontend',
  'panel-usuarios.jpeg',
)
const RESTAURANTE_MOVIL_IMAGE = projectAsset('restaurante-movil', 'inicio.jpeg')
const BANCARIO_FRONTEND_IMAGE = projectAsset('bancario-frontend', 'dashboard.png')
const BANCARIO_MOVIL_IMAGE = projectAsset('bancario-movil', 'inicio.jpeg')

const buildScreenshots = ({
  title,
  baseSubtitle,
  from,
  to,
  accent,
  assetFolder = null,
  useRealAssets = false,
  /** Opcional: { hero: '/assets/...', dashboard: '...' } para rutas custom */
  realImages = null,
}) =>
  SHOT_META.map((meta) => {
    const custom = realImages?.[meta.id]
    const fromFolder = assetFolder ? projectAsset(assetFolder, meta.file) : null
    const mock = createProjectImage({
      title,
      subtitle: meta.id === 'hero' ? baseSubtitle : `${meta.label} · UI`,
      from,
      to,
      accent,
      variant: meta.id,
    })

    const image = custom || (useRealAssets && fromFolder) || mock

    return {
      id: meta.id,
      label: meta.label,
      caption: meta.caption,
      image,
    }
  })

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
  const accent = getRepoAccent(repo.language)
  const from = '#07111F'
  const to = '#123B7D'
  const subtitle = `${repo.language || 'Repository'} · GitHub`
  const screenshots = buildScreenshots({
    title,
    baseSubtitle: subtitle,
    from,
    to,
    accent,
  })

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
    image: screenshots[0].image,
    hasVisualInterface: true,
    screenshots,
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

/**
 * Proyectos curados locales + de comunidades (orags de clase/colaboración).
 * Solo se marcan hasVisualInterface los que tienen UI real (web o móvil).
 * Se conservan al sincronizar GitHub personal.
 */
/** Repos personales que no deben listarse en proyectos / vistas. */
const EXCLUDED_REPO_NAME_PATTERNS = [
  /^portafolio/i,
  /^portfolio/i,
  /^in5av/i,
  /^inav/i,
]

const isExcludedRepo = (repo) => {
  const name = repo?.name || ''
  return EXCLUDED_REPO_NAME_PATTERNS.some((pattern) => pattern.test(name))
}

const curatedProjects = [
  // Primero: Restaurante y Banco (web), luego móviles. Repos de GitHub van después.
  {
    id: 'sistema-restaurante-frontend',
    title: 'Sistema Restaurante Frontend',
    category: 'Comunidad',
    community: 'Sistema-Bancario-IN6BV',
    year: '2026',
    status: 'Comunidad',
    summary:
      'Frontend del sistema de restaurante IN6BV con demo pública en Vercel: menús, pedidos y gestión visual.',
    description:
      'Interfaz web del Sistema Restaurante en la org Sistema-Bancario-IN6BV. Incluye despliegue en Vercel para demostrar la UI de pedidos y administración del local.',
    image: RESTAURANTE_FRONTEND_IMAGE,
    imageFit: 'contain',
    hasVisualInterface: true,
    screenshots: [
      {
        id: 'panel-usuarios',
        label: 'Panel de usuarios',
        caption:
          'Administración web de usuarios, roles y accesos desde el dashboard de KinalEats.',
        image: RESTAURANTE_FRONTEND_IMAGE,
        fit: 'contain',
      },
    ],
    tags: ['Frontend', 'Vercel', 'JavaScript', 'REST'],
    features: [
      'Demo desplegada en Vercel',
      'UI de restaurante (pedidos / gestión)',
      'Proyecto de comunidad IN6BV',
      'Integración con backend del ecosistema',
    ],
    metrics: [
      { label: 'Org', value: 'IN6BV' },
      { label: 'Demo', value: 'Vercel' },
      { label: 'UI', value: 'Web' },
    ],
    repositoryUrl: 'https://github.com/Sistema-Bancario-IN6BV/Sistema-Restaurante-Frontend',
    // Demo activa (la URL con sufijo -eta de GitHub homepage devuelve 404 en Vercel).
    liveUrl: 'https://sistema-restaurante-frontend.vercel.app',
  },
  {
    id: 'sistema-bancario-frontend',
    title: 'Sistema Bancario Frontend',
    category: 'Comunidad',
    community: 'Sistema-Bancario-IN6BV',
    year: '2026',
    status: 'Comunidad',
    summary:
      'Interfaz web del sistema bancario IN6BV: paneles y flujos de usuario sobre la API del proyecto de comunidad.',
    description:
      'Frontend del Sistema Bancario desarrollado en la org Sistema-Bancario-IN6BV. Expone la experiencia de usuario (consultas, operaciones y administración) conectada a la API y al AuthService del ecosistema.',
    image: BANCARIO_FRONTEND_IMAGE,
    imageFit: 'contain',
    hasVisualInterface: true,
    screenshots: [
      {
        id: 'dashboard-bancario',
        label: 'Dashboard bancario',
        caption:
          'Panel administrativo con métricas de usuarios, cuentas, transacciones y solicitudes.',
        image: BANCARIO_FRONTEND_IMAGE,
        fit: 'contain',
      },
    ],
    tags: ['React', 'JavaScript', 'Vite', 'REST API'],
    features: [
      'UI bancaria de comunidad IN6BV',
      'Consumo de API y AuthService',
      'Flujos de operaciones y consulta',
      'Colaboración en org GitHub',
    ],
    metrics: [
      { label: 'Org', value: 'IN6BV' },
      { label: 'Capa', value: 'Front' },
      { label: 'UI', value: 'Web' },
    ],
    repositoryUrl: 'https://github.com/Sistema-Bancario-IN6BV/Sistema-Bancario-IN6BV-Frontend',
    liveUrl: 'https://github.com/Sistema-Bancario-IN6BV/Sistema-Bancario-IN6BV-Frontend',
  },
  {
    id: 'sistema-restaurante-movil',
    title: 'Sistema Restaurante Móvil',
    category: 'Comunidad',
    community: 'Sistema-Bancario-IN6BV',
    year: '2026',
    status: 'Comunidad',
    summary:
      'App React Native del sistema de restaurante IN6BV: interfaz móvil para pedidos y seguimiento.',
    description:
      'Cliente móvil del Sistema Restaurante en la org Sistema-Bancario-IN6BV. Complementa el frontend web con una experiencia nativa para comensales o personal.',
    image: RESTAURANTE_MOVIL_IMAGE,
    imageFit: 'contain',
    hasVisualInterface: true,
    screenshots: [
      {
        id: 'inicio-movil',
        label: 'Inicio móvil',
        caption:
          'Pantalla principal con categorías, restaurantes recientes y navegación de pedidos.',
        image: RESTAURANTE_MOVIL_IMAGE,
        fit: 'contain',
      },
    ],
    tags: ['React Native', 'JavaScript', 'Mobile', 'Android'],
    features: [
      'UI móvil de restaurante',
      'React Native para Android',
      'Par de la demo web del ecosistema',
      'Trabajo colaborativo IN6BV',
    ],
    metrics: [
      { label: 'Org', value: 'IN6BV' },
      { label: 'Capa', value: 'Móvil' },
      { label: 'UI', value: 'RN' },
    ],
    repositoryUrl: 'https://github.com/Sistema-Bancario-IN6BV/Sistema-Restaurante-Movil',
    liveUrl: 'https://github.com/Sistema-Bancario-IN6BV/Sistema-Restaurante-Movil',
  },
  {
    id: 'sistema-bancario-movil',
    title: 'Sistema Bancario Móvil',
    category: 'Comunidad',
    community: 'Sistema-Bancario-IN6BV',
    year: '2026',
    status: 'Comunidad',
    summary:
      'App React Native del sistema bancario IN6BV: interfaz móvil para operaciones del cliente.',
    description:
      'Cliente móvil del Sistema Bancario (org Sistema-Bancario-IN6BV). React Native para Android con flujos de consulta y operaciones conectados a los servicios de la comunidad.',
    image: BANCARIO_MOVIL_IMAGE,
    imageFit: 'contain',
    hasVisualInterface: true,
    screenshots: [
      {
        id: 'inicio-bancario-movil',
        label: 'Inicio móvil',
        caption:
          'Pantalla principal con saldo, accesos rápidos, cuentas y movimientos recientes.',
        image: BANCARIO_MOVIL_IMAGE,
        fit: 'contain',
      },
    ],
    tags: ['React Native', 'JavaScript', 'Mobile', 'Android'],
    features: [
      'UI nativa con React Native',
      'Flujos bancarios en móvil',
      'Parte del ecosistema IN6BV',
      'Consumo de APIs de comunidad',
    ],
    metrics: [
      { label: 'Org', value: 'IN6BV' },
      { label: 'Capa', value: 'Móvil' },
      { label: 'UI', value: 'RN' },
    ],
    repositoryUrl: 'https://github.com/Sistema-Bancario-IN6BV/Sistema-Bancario-Movil',
    liveUrl: 'https://github.com/Sistema-Bancario-IN6BV/Sistema-Bancario-Movil',
  },
]

const projects = curatedProjects

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
      const visibleRepos = repos
        .filter((repo) => !repo.private && !isExcludedRepo(repo) && isFrontendRepo(repo))
        .slice(0, 9)

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

      // Conservar curados (comunidades con UI) y sumar repos personales de GitHub.
      const curatedIds = new Set(curatedProjects.map((p) => p.id))
      const curatedTitles = new Set(curatedProjects.map((p) => p.title.toLowerCase()))
      const extraGithub = githubProjects.filter(
        (p) => !curatedIds.has(p.id) && !curatedTitles.has(p.title.toLowerCase()),
      )

      set({
        projects: [...curatedProjects, ...extraGithub],
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

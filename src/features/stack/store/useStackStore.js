import { create } from 'zustand'

/**
 * Stack realista (~1 año + comunidades).
 * Perfil orientado a BACKEND: más comodidad en APIs, datos y servicios
 * que en UI. Porcentajes = comodidad relativa, no seniority.
 *
 * Orgs: Grupo1-AISentinel, Sistema-Bancario-IN6BV + repos personales.
 */
const useStackStore = create((set) => ({
  selectedSkill: null,
  setSelectedSkill: (skill) => set({ selectedSkill: skill }),
  categories: [
    {
      id: 'backend',
      name: 'Backend',
      skills: [
        {
          name: 'Node.js',
          percentage: 65,
          experience: '1',
          level: 'Cómodo',
          description:
            'Donde más me siento. Servidores, APIs y lógica de negocio en JavaScript. Labs, microservicios AISentinel (admin/auth) y backends bancario / restaurante.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'server-admin-aisentinel', year: 2026 },
            { name: 'server-auth-aisentinel', year: 2026 },
            { name: 'Sistema Bancario API', year: 2026 },
          ],
          subSkills: [
            { name: 'HTTP / APIs', val: 68 },
            { name: 'Módulos / npm', val: 62 },
            { name: 'Async en servidor', val: 60 },
          ],
        },
        {
          name: 'Express',
          percentage: 62,
          experience: '1',
          level: 'Cómodo',
          description:
            'Rutas, middlewares y REST de forma natural. APIs COPEREX, servicios IN6BV y capas admin de AISentinel.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'Sistema Restaurante API', year: 2026 },
            { name: 'Gestor de opiniones', year: 2026 },
          ],
          subSkills: [
            { name: 'Rutas / controllers', val: 65 },
            { name: 'Middlewares', val: 60 },
            { name: 'REST JSON', val: 62 },
          ],
        },
        {
          name: 'Python',
          percentage: 55,
          experience: '1',
          level: 'En progreso',
          description:
            'Servicios y scripts de IA/visión. Módulo de imágenes en AISentinel (server-pyimage) y motor ANA-IA-Engine en IN6BV.',
          projects: [
            { name: 'server-pyimage-aisentinel', year: 2026 },
            { name: 'ANA-IA-Engine', year: 2026 },
          ],
          subSkills: [
            { name: 'Sintaxis / scripts', val: 58 },
            { name: 'APIs / servicios', val: 52 },
            { name: 'Procesamiento / IA básica', val: 55 },
          ],
        },
        {
          name: 'Java',
          percentage: 45,
          experience: '1',
          level: 'En progreso',
          description:
            'POO y apps de clase (TaKito). Me da estructura de backend aunque lo uso menos que Node en el día a día.',
          projects: [
            { name: 'TaKito', year: 2025 },
          ],
          subSkills: [
            { name: 'POO', val: 50 },
            { name: 'Sintaxis / colecciones', val: 45 },
            { name: 'Apps de laboratorio', val: 42 },
          ],
        },
        {
          name: 'C#',
          percentage: 40,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Auth microservices: Sistema Bancario / Restaurante y labs AuthService. Lo refuerzo en servicios de autenticación.',
          projects: [
            { name: 'Sistema-Bancario-AuthService', year: 2026 },
            { name: 'Sistema-Restaurante-AuthService', year: 2026 },
            { name: 'AuthService IN6BV', year: 2026 },
          ],
          subSkills: [
            { name: 'Sintaxis básica', val: 42 },
            { name: 'Servicios / auth', val: 40 },
          ],
        },
      ],
    },
    {
      id: 'databases',
      name: 'Bases de datos',
      skills: [
        {
          name: 'PostgreSQL',
          percentage: 58,
          experience: '1',
          level: 'Cómodo',
          description:
            'SQL relacional y diseño de datos con APIs Node/Express (COPEREX y servicios de comunidad). Parte natural de mi flujo backend.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
          ],
          subSkills: [
            { name: 'SQL / CRUD', val: 60 },
            { name: 'Relaciones / joins', val: 55 },
            { name: 'Diseño de tablas', val: 52 },
          ],
        },
        {
          name: 'MySQL',
          percentage: 58,
          experience: '1',
          level: 'Cómodo',
          description:
            'Consultas, relaciones y CRUD en proyectos IN6BV / AISentinel. Me muevo bien modelando y consultando desde el backend.',
          projects: [
            { name: 'Sistema Bancario', year: 2026 },
            { name: 'Sistema Restaurante', year: 2026 },
            { name: 'server-admin-aisentinel', year: 2026 },
          ],
          subSkills: [
            { name: 'SQL / CRUD', val: 60 },
            { name: 'Joins / relaciones', val: 55 },
            { name: 'Diseño de esquema', val: 52 },
          ],
        },
        {
          name: 'MongoDB',
          percentage: 50,
          experience: '1',
          level: 'En progreso',
          description:
            'NoSQL con documentos y colecciones en prácticas (gestor de opiniones). Menos horas que SQL, pero lo integro en APIs sin problema.',
          projects: [
            { name: 'Gestor de opiniones', year: 2026 },
          ],
          subSkills: [
            { name: 'CRUD / colecciones', val: 52 },
            { name: 'Modelo de documentos', val: 48 },
          ],
        },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      skills: [
        {
          name: 'JavaScript',
          percentage: 60,
          experience: '1',
          level: 'Cómodo',
          description:
            'Base compartida front y back. En backend es mi lenguaje principal; en UI lo uso lo necesario para pantallas y consumo de APIs.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'server-admin-aisentinel', year: 2026 },
            { name: 'Sistema Bancario API', year: 2026 },
          ],
          subSkills: [
            { name: 'ES6+ / lógica', val: 62 },
            { name: 'Async / Fetch', val: 60 },
            { name: 'DOM / UI básica', val: 48 },
          ],
        },
        {
          name: 'React',
          percentage: 48,
          experience: '1',
          level: 'En progreso',
          description:
            'Lo uso en portafolio y fronts de comunidad, pero me siento más cómodo armando APIs que puliendo UI. Componentes, hooks y estado a nivel funcional.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
            { name: 'Sistema Bancario Frontend', year: 2026 },
          ],
          subSkills: [
            { name: 'Componentes / Hooks', val: 50 },
            { name: 'Estado (Zustand / Context)', val: 45 },
            { name: 'Routing / layout', val: 42 },
          ],
        },
        {
          name: 'HTML5/CSS3',
          percentage: 50,
          experience: '1',
          level: 'En progreso',
          description:
            'Base web para maquetar y conectar con el backend. Agenda Web, Sitio Web e IN5AV; hoy lo uso de apoyo a React.',
          projects: [
            { name: 'Agenda Web', year: 2026 },
            { name: 'Sitio Web', year: 2026 },
            { name: 'IN5AV 2025', year: 2025 },
          ],
          subSkills: [
            { name: 'HTML semántico', val: 52 },
            { name: 'Flexbox / Grid', val: 48 },
            { name: 'Responsive básico', val: 45 },
          ],
        },
        {
          name: 'Tailwind CSS',
          percentage: 45,
          experience: '1',
          level: 'En progreso',
          description:
            'Utilidades para UI rápida cuando toca front. Portafolio y client AISentinel; no es mi zona de mayor comodidad.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
          ],
          subSkills: [
            { name: 'Layout / responsive', val: 48 },
            { name: 'Componentes UI', val: 42 },
            { name: 'Animaciones utilitarias', val: 38 },
          ],
        },
        {
          name: 'Vite',
          percentage: 50,
          experience: '1',
          level: 'En progreso',
          description:
            'Build, preview y deploy de apps (estáticas y front con API). Portafolio y AISentinel Client; lo domino más del lado tooling/deploy que del diseño visual.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
            { name: 'FrontConvertidor', year: 2026 },
          ],
          subSkills: [
            { name: 'Dev server / HMR', val: 52 },
            { name: 'Build de producción', val: 50 },
            { name: 'Deploy / hosting estático', val: 52 },
          ],
        },
        {
          name: 'React Native',
          percentage: 35,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Móvil en labs y módulos IN6BV. Prefiero la capa de API; la UI nativa la voy reforzando.',
          projects: [
            { name: 'React Native for Android', year: 2026 },
            { name: 'Sistema Bancario Móvil', year: 2026 },
            { name: 'Sistema Restaurante Móvil', year: 2026 },
          ],
          subSkills: [
            { name: 'Componentes nativos', val: 38 },
            { name: 'Navegación básica', val: 32 },
            { name: 'Estilos RN', val: 34 },
          ],
        },
        {
          name: 'TypeScript',
          percentage: 38,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Tipado gradual (Yeimi AI y APIs más formales). Lo aplico más cuando el backend o el contrato de datos lo piden.',
          projects: [
            { name: 'Yeimi AI', year: 2026 },
          ],
          subSkills: [
            { name: 'Tipos básicos', val: 42 },
            { name: 'Interfaces / contratos', val: 40 },
            { name: 'Integración con React', val: 32 },
          ],
        },
      ],
    },
    {
      id: 'tools',
      name: 'Herramientas',
      skills: [
        {
          name: 'Git',
          percentage: 55,
          experience: '1',
          level: 'En progreso',
          description:
            'Ramas, commits, PRs y colaboración en orgs (AISentinel, Sistema-Bancario-IN6BV) y repos personales.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel (org)', year: 2026 },
            { name: 'Sistema Bancario IN6BV (org)', year: 2026 },
          ],
          subSkills: [
            { name: 'Commits / ramas', val: 58 },
            { name: 'PRs / GitHub orgs', val: 55 },
            { name: 'Conflictos básicos', val: 45 },
          ],
        },
        {
          name: 'Docker',
          percentage: 40,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Contenedores para servicios backend y orquestación básica (AISentinel). Encaja con mi perfil de APIs y deploys.',
          projects: [
            { name: 'orquestador-aisentinel', year: 2026 },
          ],
          subSkills: [
            { name: 'Dockerfile básico', val: 42 },
            { name: 'Contenedores / run', val: 40 },
          ],
        },
        {
          name: 'Three.js',
          percentage: 35,
          experience: '1',
          level: 'Fundamentos',
          description:
            '3D en portafolio y client AISentinel. Es front visual; lo uso por proyecto, no es mi zona de mayor comodidad.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
          ],
          subSkills: [
            { name: 'R3F / Canvas', val: 38 },
            { name: 'GLTF / modelos', val: 34 },
            { name: 'Luces / ambiente', val: 32 },
          ],
        },
      ],
    },
  ],
  setCategories: (categories) => set({ categories }),
}))

export default useStackStore

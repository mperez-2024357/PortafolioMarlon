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
            'Runtime de backend para JavaScript (el backend no es “JS”, es Node + APIs). Servidores, lógica de negocio y microservicios AISentinel (admin/auth) y banca / restaurante.',
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
      id: 'languages',
      name: 'Lenguajes',
      skills: [
        {
          name: 'JavaScript',
          percentage: 60,
          experience: '1',
          level: 'Cómodo',
          description:
            'Lenguaje (no es “el backend” ni “el frontend” por sí solo). Lo uso en el navegador con React y en el servidor con Node.js/Express. ES6+, async y lógica del día a día.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'server-admin-aisentinel', year: 2026 },
            { name: 'Portafolio Marlon', year: 2026 },
          ],
          subSkills: [
            { name: 'ES6+ / lógica', val: 62 },
            { name: 'Async / promesas', val: 60 },
            { name: 'Uso con Node (backend)', val: 65 },
            { name: 'Uso en el browser (front)', val: 48 },
          ],
        },
        {
          name: 'TypeScript',
          percentage: 38,
          experience: '1',
          level: 'Fundamentos',
          description:
            'JavaScript con tipos. También es un lenguaje multiplataforma: sirve para APIs Node y para React. Lo aplico de forma gradual (Yeimi AI y contratos de datos).',
          projects: [
            { name: 'Yeimi AI', year: 2026 },
          ],
          subSkills: [
            { name: 'Tipos básicos', val: 42 },
            { name: 'Interfaces / contratos', val: 40 },
            { name: 'En APIs / Node', val: 38 },
            { name: 'Con React', val: 32 },
          ],
        },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      skills: [
        {
          name: 'React',
          percentage: 48,
          experience: '1',
          level: 'En progreso',
          description:
            'Librería de UI (frontend). Portafolio y fronts de comunidad; me siento más cómodo armando APIs que puliendo interfaces.',
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
            'Base del frontend: maquetado y estilos. Agenda Web, Sitio Web e IN5AV; hoy apoyo a React.',
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
            'Utilidades CSS para UI. Portafolio y client AISentinel; no es mi zona de mayor comodidad.',
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
            'Tooling de frontend: dev server, build y deploy estático. Portafolio y AISentinel Client.',
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
            'UI móvil con React. Labs e IN6BV; prefiero la capa de API.',
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

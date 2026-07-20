import { create } from 'zustand'

/**
 * Stack realista (~1 año de práctica + trabajo en comunidades).
 * Porcentajes = comodidad relativa, no “años senior”.
 *
 * Comunidades / orgs:
 * - Grupo1-AISentinel (client Vite/React, server Python, microservicios)
 * - Sistema-Bancario-IN6BV (banca, restaurante, auth, móvil)
 * + repos personales mperez-2024357
 */
const useStackStore = create((set) => ({
  selectedSkill: null,
  setSelectedSkill: (skill) => set({ selectedSkill: skill }),
  categories: [
    {
      id: 'frontend',
      name: 'Frontend',
      skills: [
        {
          name: 'React',
          percentage: 60,
          experience: '1',
          level: 'Cómodo',
          description:
            'Mi tecnología principal. Componentes, hooks, estado (Zustand/Context), rutas y UIs interactivas. Lo uso en el portafolio, labs y en comunidades (AISentinel client, frontends bancarios).',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
            { name: 'Sistema Bancario Frontend', year: 2026 },
            { name: 'Sistema Restaurante Frontend', year: 2026 },
          ],
          subSkills: [
            { name: 'Componentes / Hooks', val: 62 },
            { name: 'Estado (Zustand / Context)', val: 55 },
            { name: 'Routing / layout', val: 52 },
          ],
        },
        {
          name: 'JavaScript',
          percentage: 58,
          experience: '1',
          level: 'Cómodo',
          description:
            'ES6+, asíncronía y lógica del día a día en front y back. Base de APIs IN6BV, microservicios AISentinel y repos personales.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'server-admin-aisentinel', year: 2026 },
            { name: 'Sistema Bancario API', year: 2026 },
          ],
          subSkills: [
            { name: 'ES6+', val: 60 },
            { name: 'Async / Fetch', val: 55 },
            { name: 'DOM / lógica UI', val: 52 },
          ],
        },
        {
          name: 'Tailwind CSS',
          percentage: 55,
          experience: '1',
          level: 'En progreso',
          description:
            'Layouts responsivos y UI con utilidades. Portafolio y client AISentinel (Tailwind + Vite).',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
          ],
          subSkills: [
            { name: 'Layout / responsive', val: 58 },
            { name: 'Componentes UI', val: 52 },
            { name: 'Animaciones utilitarias', val: 45 },
          ],
        },
        {
          name: 'HTML5/CSS3',
          percentage: 60,
          experience: '1',
          level: 'Cómodo',
          description:
            'HTML semántico, Flex/Grid y estilos base. Empecé por aquí (Agenda Web, Sitio Web, IN5AV) y sigue bajo React.',
          projects: [
            { name: 'Agenda Web', year: 2026 },
            { name: 'Sitio Web', year: 2026 },
            { name: 'IN5AV 2025', year: 2025 },
          ],
          subSkills: [
            { name: 'HTML semántico', val: 62 },
            { name: 'Flexbox / Grid', val: 58 },
            { name: 'Responsive básico', val: 55 },
          ],
        },
        {
          name: 'Vite',
          percentage: 55,
          experience: '1',
          level: 'En progreso',
          description:
            'Bundler del día a día: dev server, build de producción y despliegue de apps estáticas (preview, hosting, assets). Portafolio y AISentinel Client corren con Vite.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
            { name: 'FrontConvertidor', year: 2026 },
          ],
          subSkills: [
            { name: 'Dev server / HMR', val: 58 },
            { name: 'Build de producción', val: 55 },
            { name: 'Deploy / hosting estático', val: 52 },
          ],
        },
        {
          name: 'React Native',
          percentage: 38,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Apps móviles con React: labs personales y módulos móvil del Sistema Bancario / Restaurante (IN6BV).',
          projects: [
            { name: 'React Native for Android', year: 2026 },
            { name: 'Sistema Bancario Móvil', year: 2026 },
            { name: 'Sistema Restaurante Móvil', year: 2026 },
          ],
          subSkills: [
            { name: 'Componentes nativos', val: 40 },
            { name: 'Navegación básica', val: 35 },
            { name: 'Estilos RN', val: 36 },
          ],
        },
        {
          name: 'TypeScript',
          percentage: 38,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Tipado en proyectos con más estructura (p. ej. Yeimi AI). Lo refuerzo de forma gradual junto a React.',
          projects: [
            { name: 'Yeimi AI', year: 2026 },
          ],
          subSkills: [
            { name: 'Tipos básicos', val: 42 },
            { name: 'Interfaces / props', val: 38 },
            { name: 'Integración con React', val: 35 },
          ],
        },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      skills: [
        {
          name: 'Node.js',
          percentage: 50,
          experience: '1',
          level: 'En progreso',
          description:
            'Servidores y APIs en JavaScript. Labs personales, microservicios AISentinel (admin/auth) y backends del Sistema Bancario / Restaurante.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'server-admin-aisentinel', year: 2026 },
            { name: 'server-auth-aisentinel', year: 2026 },
            { name: 'Sistema Bancario API', year: 2026 },
          ],
          subSkills: [
            { name: 'HTTP / APIs', val: 52 },
            { name: 'Módulos / npm', val: 50 },
            { name: 'Async en servidor', val: 48 },
          ],
        },
        {
          name: 'Express',
          percentage: 50,
          experience: '1',
          level: 'En progreso',
          description:
            'Rutas, middlewares y REST. APIs académicas (COPEREX), servicios IN6BV y capas admin de AISentinel.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'Sistema Restaurante API', year: 2026 },
            { name: 'Gestor de opiniones', year: 2026 },
          ],
          subSkills: [
            { name: 'Rutas / controllers', val: 52 },
            { name: 'Middlewares', val: 48 },
            { name: 'REST JSON', val: 50 },
          ],
        },
        {
          name: 'Python',
          percentage: 45,
          experience: '1',
          level: 'En progreso',
          description:
            'Scripts y servicios de IA/visión. En AISentinel trabajo el módulo de procesamiento de imágenes (server-pyimage) y en IN6BV el motor ANA-IA-Engine.',
          projects: [
            { name: 'server-pyimage-aisentinel', year: 2026 },
            { name: 'ANA-IA-Engine', year: 2026 },
          ],
          subSkills: [
            { name: 'Sintaxis / scripts', val: 48 },
            { name: 'APIs / servicios', val: 42 },
            { name: 'Procesamiento / IA básica', val: 45 },
          ],
        },
        {
          name: 'Java',
          percentage: 40,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Base de POO y aplicaciones de clase (p. ej. TaKito). Más académico que productivo, pero me da estructura.',
          projects: [
            { name: 'TaKito', year: 2025 },
          ],
          subSkills: [
            { name: 'POO', val: 45 },
            { name: 'Sintaxis / colecciones', val: 40 },
            { name: 'Apps de laboratorio', val: 38 },
          ],
        },
        {
          name: 'C#',
          percentage: 35,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Microservicios de autenticación: AuthService en labs personales y en Sistema Bancario / Restaurante (IN6BV).',
          projects: [
            { name: 'Sistema-Bancario-AuthService', year: 2026 },
            { name: 'Sistema-Restaurante-AuthService', year: 2026 },
            { name: 'AuthService IN6BV', year: 2026 },
          ],
          subSkills: [
            { name: 'Sintaxis básica', val: 38 },
            { name: 'Servicios / auth', val: 35 },
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
          percentage: 45,
          experience: '1',
          level: 'En progreso',
          description:
            'Modelo relacional, SQL y CRUD en APIs. Usado con Node/Express en COPEREX Interfer y en servicios de comunidad.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
          ],
          subSkills: [
            { name: 'SQL / CRUD', val: 48 },
            { name: 'Relaciones / joins', val: 42 },
            { name: 'Diseño de tablas', val: 40 },
          ],
        },
        {
          name: 'MySQL',
          percentage: 45,
          experience: '1',
          level: 'En progreso',
          description:
            'SQL relacional en proyectos académicos y de comunidad (IN6BV / AISentinel): tablas, consultas, relaciones y CRUD desde APIs.',
          projects: [
            { name: 'Sistema Bancario', year: 2026 },
            { name: 'Sistema Restaurante', year: 2026 },
            { name: 'server-admin-aisentinel', year: 2026 },
          ],
          subSkills: [
            { name: 'SQL / CRUD', val: 48 },
            { name: 'Joins / relaciones', val: 44 },
            { name: 'Diseño de esquema', val: 42 },
          ],
        },
        {
          name: 'MongoDB',
          percentage: 40,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Documentos, colecciones y CRUD NoSQL en prácticas. Menos horas que SQL relacional, pero lo uso a nivel proyecto.',
          projects: [
            { name: 'Gestor de opiniones', year: 2026 },
          ],
          subSkills: [
            { name: 'CRUD / colecciones', val: 42 },
            { name: 'Modelo de documentos', val: 38 },
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
            'Ramas, commits, PRs y colaboración en orgs (Grupo1-AISentinel, Sistema-Bancario-IN6BV) y en el portafolio personal.',
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
          percentage: 35,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Imágenes, contenedores y Dockerfiles a nivel introductorio para levantar servicios en labs y microservicios de comunidad. Sigo practicando.',
          projects: [
            { name: 'orquestador-aisentinel', year: 2026 },
          ],
          subSkills: [
            { name: 'Dockerfile básico', val: 38 },
            { name: 'Contenedores / run', val: 35 },
          ],
        },
        {
          name: 'Three.js',
          percentage: 42,
          experience: '1',
          level: 'En progreso',
          description:
            'Escenas 3D con React Three Fiber / Drei en el portafolio y también en el client de AISentinel (Three + R3F).',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'AISentinel Client', year: 2026 },
          ],
          subSkills: [
            { name: 'R3F / Canvas', val: 45 },
            { name: 'GLTF / modelos', val: 40 },
            { name: 'Luces / ambiente', val: 38 },
          ],
        },
      ],
    },
  ],
  setCategories: (categories) => set({ categories }),
}))

export default useStackStore

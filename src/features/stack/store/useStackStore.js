import { create } from 'zustand'

/**
 * Stack realista (~1 año de práctica).
 * Porcentajes = comodidad relativa, no “años senior”.
 * Proyectos alineados con repos públicos de mperez-2024357.
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
            'Mi tecnología principal. Componentes, hooks, estado (Zustand/Context), rutas y UIs interactivas. Lo uso a diario en el portafolio y labs.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'ReactApp', year: 2026 },
            { name: 'FrontConvertidor', year: 2026 },
            { name: 'PMA Laboratorio 2', year: 2026 },
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
            'ES6+, asíncronía, arrays y lógica del día a día en front y back. Base de casi todos mis repos en GitHub.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'Gestor de opiniones', year: 2026 },
            { name: 'server-admin-IN6BV', year: 2026 },
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
            'Layouts responsivos, utilidades y UI limpia sin pelear tanto con CSS suelto. Lo uso fuerte en el portafolio.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
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
            'HTML semántico, Flex/Grid y estilos base. Empecé por aquí (Agenda Web, Sitio Web, IN5AV) y aún lo uso debajo de React.',
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
          percentage: 50,
          experience: '1',
          level: 'En progreso',
          description:
            'Bundler del día a día para React: dev server rápido, build y assets. Es el entorno del portafolio y varios labs.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
          ],
          subSkills: [
            { name: 'Dev server / HMR', val: 55 },
            { name: 'Build de producción', val: 48 },
            { name: 'Assets estáticos', val: 50 },
          ],
        },
        {
          name: 'React Native',
          percentage: 35,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Primeros pasos en móvil con React. Laboratorio React Native for Android: pantallas, componentes y flujo básico.',
          projects: [
            { name: 'React Native for Android', year: 2026 },
          ],
          subSkills: [
            { name: 'Componentes nativos', val: 38 },
            { name: 'Navegación básica', val: 32 },
            { name: 'Estilos RN', val: 35 },
          ],
        },
        {
          name: 'TypeScript',
          percentage: 38,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Tipado en proyectos con más estructura (p. ej. Yeimi AI). Aún lo refuerzo; no es mi default en todos los repos.',
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
            'Servidores y APIs en JavaScript. Lo uso con Express en APIs académicas y de laboratorio (COPEREX, admin, gestores).',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'server-admin-IN6BV', year: 2026 },
            { name: 'Gestor de opiniones', year: 2026 },
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
            'Rutas, middlewares y REST. Base del API COPEREX Interfer (empresas de feria) y otros servicios IN6BV.',
          projects: [
            { name: 'COPEREX Interfer API', year: 2026 },
            { name: 'Gestor de opiniones', year: 2026 },
          ],
          subSkills: [
            { name: 'Rutas / controllers', val: 52 },
            { name: 'Middlewares', val: 48 },
            { name: 'REST JSON', val: 50 },
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
          percentage: 32,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Servicios de autenticación en labs (AuthService / opiniones). Aún en etapa de aprendizaje, no es mi stack diario.',
          projects: [
            { name: 'Gestor opiniones AuthService', year: 2026 },
            { name: 'AuthService IN6BV', year: 2026 },
          ],
          subSkills: [
            { name: 'Sintaxis básica', val: 35 },
            { name: 'Servicios / auth', val: 30 },
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
            'Modelo relacional, SQL y CRUD en APIs. Usado con Node/Express en COPEREX Interfer (empresas de feria).',
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
          name: 'MongoDB',
          percentage: 40,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Documentos, colecciones y CRUD NoSQL en prácticas. Menos horas que PostgreSQL, pero lo conozco a nivel proyecto.',
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
            'Ramas, commits, PRs y GitHub en el flujo del portafolio y labs. Trabajo con feature branches y pull requests.',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
            { name: 'COPEREX Interfer API', year: 2026 },
          ],
          subSkills: [
            { name: 'Commits / ramas', val: 58 },
            { name: 'PRs / GitHub', val: 52 },
            { name: 'Conflictos básicos', val: 45 },
          ],
        },
        {
          name: 'Docker',
          percentage: 35,
          experience: '1',
          level: 'Fundamentos',
          description:
            'Imágenes, contenedores y Dockerfiles a nivel introductorio para levantar servicios en labs. Sigo practicando.',
          projects: [],
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
            'Escenas 3D en el hero del portafolio con React Three Fiber / Drei (modelo MacBook, luces, partículas).',
          projects: [
            { name: 'Portafolio Marlon', year: 2026 },
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

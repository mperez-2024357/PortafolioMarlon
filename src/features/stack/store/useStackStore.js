import { create } from 'zustand';

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
          percentage: 90, 
          experience: '2',
          description: 'He trabajado con React en el desarrollo de aplicaciones web modernas, reutilizando componentes, manejando estado con Context API y Zustand, y consumiendo APIs RESTful.',
          projects: [
            { name: 'Portfolio Personal', year: 2024 },
            { name: 'E-commerce App', year: 2023 },
            { name: 'Dashboard Analítico', year: 2023 },
            { name: 'Sistema de Tareas', year: 2022 }
          ],
          subSkills: [
            { name: 'React', val: 90 },
            { name: 'JavaScript (ES6+)', val: 85 },
            { name: 'TypeScript', val: 70 },
            { name: 'Zustand / Context', val: 75 }
          ]
        },
        { 
          name: 'JavaScript', 
          percentage: 85, 
          experience: '2',
          description: 'Dominio de asincronía, manipulación del DOM, closures y métodos de arrays en un entorno de desarrollo frontend moderno.',
          projects: [
            { name: 'Juego Interactivo Web', year: 2023 },
            { name: 'Calculadora Financiera', year: 2022 }
          ],
          subSkills: [
            { name: 'ES6+', val: 90 },
            { name: 'DOM', val: 85 },
            { name: 'Asynchrony', val: 80 }
          ]
        },
        { name: 'Tailwind CSS', percentage: 95, experience: '2', description: 'Maquetación rápida, responsiva y orientada a utilidades con animaciones fluidas.', projects: [], subSkills: [] },
        { name: 'HTML5/CSS3', percentage: 95, experience: '2', description: 'HTML semántico y hojas de estilo avanzadas (Flexbox, Grid, Animaciones).', projects: [], subSkills: [] },
        { name: 'Next.js', percentage: 70, experience: '2', description: 'Aplicaciones SSR/SSG, optimización de SEO y rutas de API.', projects: [], subSkills: [] }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 80, experience: '2', description: 'Construcción de servidores, manejo de eventos y arquitectura asíncrona.', projects: [], subSkills: [] },
        { name: 'Express', percentage: 85, experience: '2', description: 'Creación de APIs RESTful, middlewares y manejo de rutas de manera eficiente.', projects: [], subSkills: [] },
        { name: 'Python', percentage: 75, experience: '2', description: 'Scripts de automatización, análisis de datos y desarrollo backend.', projects: [], subSkills: [] },
        { name: 'Java', percentage: 75, experience: '3', description: 'Base sólida en programación orientada a objetos formada en Kinal: estructuras de datos, POO y desarrollo de aplicaciones.', projects: [], subSkills: [] }
      ]
    },
    {
      id: 'databases',
      name: 'Bases de Datos',
      skills: [
        { name: 'PostgreSQL', percentage: 80, experience: '2', description: 'Diseño de bases de datos relacionales, joins complejos y optimización de consultas.', projects: [], subSkills: [] },
        { name: 'MongoDB', percentage: 75, experience: '2', description: 'Modelado de colecciones NoSQL, agregaciones y operaciones CRUD avanzadas.', projects: [], subSkills: [] },
        { name: 'MySQL', percentage: 80, experience: '2', description: 'Relaciones estructuradas, vistas, procedimientos almacenados y transacciones.', projects: [], subSkills: [] }
      ]
    },
    {
      id: 'tools',
      name: 'Entorno de Herramientas',
      skills: [
        { name: 'Git', percentage: 85, experience: '2', description: 'Control de versiones, resolución de conflictos y flujos de trabajo colaborativos.', projects: [], subSkills: [] },
        { name: 'Docker', percentage: 65, experience: '2', description: 'Contenerización de aplicaciones, creación de Dockerfiles y volúmenes.', projects: [], subSkills: [] },
        { name: 'AWS', percentage: 50, experience: '2', description: 'Despliegues en la nube, S3, EC2 y otros servicios fundamentales.', projects: [], subSkills: [] },
        { name: 'Figma', percentage: 90, experience: '2', description: 'Prototipado rápido, UI/UX, exportación de assets y wireframing.', projects: [], subSkills: [] },
        { name: 'Vite', percentage: 90, experience: '2', description: 'Empaquetador ultrarrápido para frontend moderno (React, Vue, etc).', projects: [], subSkills: [] }
      ]
    }
  ],
  setCategories: (categories) => set({ categories }),
}));

export default useStackStore;
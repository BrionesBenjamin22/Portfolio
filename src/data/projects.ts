export const projects = [
  {
    id: "laboratorio",
    title: "Sistema de Gestión para Laboratorio",
    status: "Proyecto principal",
    featured: true,
    shortDescription:
      "Aplicación orientada a centralizar procesos internos del laboratorio, incluyendo administración, actividades, financiamiento, vinculación y búsqueda unificada.",

    tags: ["React", "Tailwind", "Flask", "SQLite", "API REST"],

    metrics: [
      { value: "5", label: "Módulos" },
      { value: "52", label: "Entidades" },
      { value: "40+", label: "Endpoints" },
      { value: "3", label: "Flujos críticos" },
    ],

    problem:
      "El laboratorio lleva actualmente un registro manual de sus activos y de gran parte de sus actividades. Esto dificulta la administración de la información, ralentiza las consultas y complica el seguimiento de los datos en el tiempo.",

    solution:
      "El sistema fue diseñado para centralizar la información del laboratorio en un único entorno, facilitando su administración, consulta y organización. Además, incorpora trazabilidad sobre las acciones realizadas dentro de la plataforma.",

    architecture: {
      title: "Backend organizado por capas",
      description:
        "El backend fue estructurado con una separación por capas para mantener claridad en las responsabilidades, facilitar la escalabilidad y ordenar la lógica del sistema.",
      layers: [
        {
          step: "01",
          name: "Routes",
          description:
            "Definen los endpoints del sistema y reciben las solicitudes externas.",
        },
        {
          step: "02",
          name: "Controllers",
          description:
            "Orquestan las acciones del sistema y coordinan el flujo entre rutas y servicios.",
        },
        {
          step: "03",
          name: "Services",
          description:
            "Contienen la lógica de negocio y el acceso a datos necesario para cada operación.",
        },
        {
          step: "04",
          name: "Models / Modules",
          description:
            "Representan las entidades del sistema y permiten mapear la base de datos con ORM.",
        },
      ],
      flow: "Routes → Controllers → Services → Models",
    },

    stack: [
      {
        name: "Frontend",
        description:
          "React y Tailwind CSS para construir interfaces reutilizables y modernas.",
      },
      {
        name: "Backend",
        description:
          "Python y Flask para desarrollar la API y organizar la lógica del sistema por capas.",
      },
      {
        name: "Base de datos",
        description:
          "SQLite como base actual del proyecto, con posibilidad de evolucionar a PostgreSQL a futuro.",
      },
    ],
  },

  {
    id: "ganadera",
    title: "Sistema de Gestión Ganadera",
    status: "Experiencia backend",
    featured: false,
    shortDescription:
      "Participación en el análisis, diseño e implementación backend de un sistema de gestión ganadera tipo Feedlot, enfocado en organización operativa y soporte a procesos del dominio.",

    tags: ["Backend", "Análisis", "Diseño", "Lógica de negocio"],

    metrics: [],

    problem:
      "La operación requería una mejor organización de procesos y una estructura más clara para administrar información del dominio ganadero.",

    solution:
      "Participé en tareas de análisis, diseño e implementación backend para apoyar la construcción de un sistema de gestión más ordenado y alineado al negocio.",

    architecture: null,

    stack: [
      {
        name: "Rol",
        description:
          "Participación como desarrollador backend en análisis, diseño e implementación.",
      },
    ],
  },

  {
  id: "portfolio",
  title: "Portfolio personal",
  status: "Proyecto personal",
  featured: false,
  shortDescription:
    "Sitio desarrollado para presentar proyectos, arquitectura técnica y experiencia profesional con una interfaz enfocada en claridad, navegación y estética tipo producto SaaS.",

  tags: ["Astro", "TailwindCSS", "Componentización", "Responsive UI"],

  metrics: [],

  problem:
    "Necesitaba una forma de presentar proyectos y experiencia de manera clara, profesional y alineada a mi perfil técnico, evitando un portfolio genérico o sobrecargado.",

  solution:
    "Desarrollé un portfolio con Astro y Tailwind enfocado en mostrar sistemas reales, arquitectura, stack técnico y contacto profesional mediante una experiencia visual simple, sobria y orientada a producto.",

  architecture: {
    title: "Sitio estructurado por componentes",
    description:
      "La interfaz fue organizada en componentes reutilizables para mantener consistencia visual, facilitar iteraciones y escalar secciones sin duplicar estilos.",
    layers: [
      {
        step: "01",
        name: "Layouts",
        description:
          "Definen la estructura base de las páginas y la navegación principal."
      },
      {
        step: "02",
        name: "Sections",
        description:
          "Agrupan bloques funcionales como proyectos, contacto y detalle dinámico."
      },
      {
        step: "03",
        name: "UI Components",
        description:
          "Componentes reutilizables como cards, badges y headers para mantener consistencia."
      },
      {
        step: "04",
        name: "Data",
        description:
          "Los proyectos y contenidos principales se organizan desde estructuras de datos para simplificar el renderizado."
      }
    ],
    flow: "Pages → Layouts → Sections → UI Components"
  },

  stack: [
    {
      name: "Framework",
      description:
        "Astro para estructurar páginas, componentes y contenido estático de forma eficiente."
    },
    {
      name: "Estilos",
      description:
        "Tailwind CSS para construir una interfaz consistente, modular y orientada a producto."
    },
    {
      name: "Enfoque",
      description:
        "Diseño responsive, componentización y navegación clara para presentar proyectos de forma profesional."
    }
  ]
}
] as const;
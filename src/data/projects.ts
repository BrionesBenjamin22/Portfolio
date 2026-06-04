export const projects = [
  {
    id: "laboratorio",
    title: "Sistema de Gestion de Memorias Academicas",
    status: "Proyecto destacado",
    featured: true,
    shortDescription:
      "Aplicacion orientada a gestionar las memorias academicas de laboratorios de la facultad, facilitando el acceso a la informacion y su exportacion.",

    tags: ["React", "Typescript", "Flask", "PostgreSQL"],

    metrics: [
      { value: "5", label: "Modulos" },
      { value: "52", label: "Entidades" },
      { value: "40+", label: "Endpoints" },
      { value: "3", label: "Flujos criticos" },
    ],

    problem:
      "El sistema fue disenado para el laboratorio GIDAS de la UTN-FRLP. Antes de su desarrollo, la generacion de memorias academicas era un proceso manual que exigia relevar la informacion de los activos, actividades y registros del laboratorio durante cada periodo.",

    solution:
      "La solucion centraliza la informacion del laboratorio y permite generar memorias academicas de forma automatica, reduciendo tareas manuales, ordenando los datos disponibles y facilitando su consulta, acceso y exportacion.",

    architecture: {
      title: "Monolito modular para uso interno",
      description:
        "El proyecto fue planteado como un monolito modular, pensado para ser ejecutado por los propios laboratorios en servidores institucionales. Esta decision simplifica el despliegue y mantiene una arquitectura clara para un sistema de uso interno.",
      layers: [],
      flow: "React + Typescript -> Flask -> PostgreSQL -> Exportacion",
    },

    stack: [
      {
        name: "Frontend",
        description:
          "React con Typescript para construir una interfaz clara, tipada y mantenible.",
      },
      {
        name: "Backend",
        description:
          "Python y Flask para desarrollar la logica del sistema, organizar los servicios y exponer la API.",
      },
      {
        name: "Base de datos",
        description:
          "PostgreSQL como motor de base de datos para almacenar la informacion centralizada del laboratorio.",
      },
      {
        name: "Rol",
        description:
          "Me desempenie como desarrollador full stack y estuve a cargo del diseno de la solucion completa.",
      },
    ],
    coAuthors: ["Valentina Falco", "Zoe Quiroz"],
    i18n: {
      en: {
        title: "Academic Reports Management System",
        status: "Featured project",
        shortDescription:
          "Application focused on managing academic reports for university laboratories, making information easier to access and export.",
        tags: ["React", "Typescript", "Flask", "PostgreSQL"],
        metrics: [
          { value: "5", label: "Modules" },
          { value: "52", label: "Entities" },
          { value: "40+", label: "Endpoints" },
          { value: "3", label: "Critical flows" },
        ],
        problem:
          "The system was designed for the GIDAS laboratory at UTN-FRLP. Before this project, generating academic reports was a manual process that required collecting information about laboratory assets, activities and records for each period.",
        solution:
          "The solution centralizes laboratory information and enables automatic academic report generation, reducing manual work, organizing available data and improving access, consultation and export workflows.",
        architecture: {
          title: "Modular monolith for internal use",
          description:
            "The project was designed as a modular monolith intended to run on institutional laboratory servers. This simplifies deployment while keeping a clear architecture for an internal system.",
          layers: [],
          flow: "React + Typescript -> Flask -> PostgreSQL -> Export",
        },
        stack: [
          {
            name: "Frontend",
            description:
              "React with Typescript for a clear, typed and maintainable interface.",
          },
          {
            name: "Backend",
            description:
              "Python and Flask to implement system logic, organize services and expose the API.",
          },
          {
            name: "Database",
            description:
              "PostgreSQL to store centralized laboratory information.",
          },
          {
            name: "Role",
            description:
              "I worked as a full stack developer and was responsible for designing the complete solution.",
          },
        ],
      },
    },
  },

  {
    id: "deskly",
    title: "Deskly",
    status: "En desarrollo",
    featured: false,
    shortDescription:
      "Aplicacion movil para consultar disponibilidad y reservar escritorios en espacios de coworking desde una experiencia simple y orientada a dispositivos moviles.",

    tags: [
      "React Native",
      "Expo",
      "NestJS",
      "PostgreSQL",
      "Swagger",
      "TypeScript",
    ],

    metrics: [],

    problem:
      "Deskly aborda una necesidad frecuente en coworkings: evitar que trabajadores remotos, freelancers o estudiantes lleguen a un espacio sin conocer previamente la disponibilidad real de escritorios.",

    solution:
      "La aplicacion permite consultar escritorios disponibles, filtrar por criterios operativos como fecha, horario, capacidad, ubicacion, precio y estado, crear reservas y gestionar reservas activas desde una interfaz mobile-first.",

    architecture: {
      title: "Backend modular inspirado en arquitectura hexagonal",
      description:
        "El backend fue organizado con NestJS separando responsabilidades entre dominio, casos de uso, infraestructura y presentacion. Esta estructura favorece la mantenibilidad del MVP y deja el proyecto preparado para evolucionar con autenticacion, pagos, notificaciones, administracion de espacios y despliegue contenerizado con Docker.",
      layers: [
        {
          step: "01",
          name: "Dominio",
          description:
            "Define las reglas principales del sistema alrededor de escritorios, disponibilidad y reservas.",
        },
        {
          step: "02",
          name: "Casos de uso",
          description:
            "Orquestan acciones como consultar disponibilidad, crear reservas, listar reservas activas y cancelar reservas.",
        },
        {
          step: "03",
          name: "Infraestructura",
          description:
            "Integra PostgreSQL y los adaptadores necesarios para persistencia y acceso a datos.",
        },
        {
          step: "04",
          name: "Presentacion",
          description:
            "Expone endpoints documentados con Swagger para conectar la aplicacion movil con el backend.",
        },
      ],
      flow: "React Native + Expo -> NestJS -> PostgreSQL",
    },

    stack: [
      {
        name: "Mobile",
        description:
          "React Native y Expo para construir un MVP mobile-first enfocado en consulta y gestion de reservas.",
      },
      {
        name: "Backend",
        description:
          "NestJS con TypeScript para organizar modulos, casos de uso y endpoints documentados.",
      },
      {
        name: "Base de datos",
        description:
          "PostgreSQL para persistir escritorios, disponibilidad y reservas.",
      },
      {
        name: "Documentacion",
        description:
          "Swagger para documentar los endpoints y facilitar la integracion entre frontend mobile y backend.",
      },
      {
        name: "Evolucion",
        description:
          "Actualmente se encuentra en desarrollo. Proximamente incorporara Docker y nuevas funcionalidades orientadas a producto.",
      },
    ],
    i18n: {
      en: {
        title: "Deskly",
        status: "In development",
        shortDescription:
          "Mobile application for checking desk availability and booking workspaces in coworking spaces through a simple mobile-first experience.",
        tags: [
          "React Native",
          "Expo",
          "NestJS",
          "PostgreSQL",
          "Swagger",
          "TypeScript",
        ],
        metrics: [],
        problem:
          "Deskly addresses a common coworking issue: helping remote workers, freelancers and students avoid arriving at a workspace without knowing whether desks are available.",
        solution:
          "The app lets users browse available desks, filter by date, time slot, capacity, location, price and status, create bookings and manage active reservations from a mobile-first interface.",
        architecture: {
          title: "Modular backend inspired by hexagonal architecture",
          description:
            "The backend was built with NestJS, separating responsibilities across domain, use cases, infrastructure and presentation. This structure improves MVP maintainability and prepares the project for authentication, payments, notifications, space management and Docker-based deployment.",
          layers: [
            {
              step: "01",
              name: "Domain",
              description:
                "Defines the core rules around desks, availability and reservations.",
            },
            {
              step: "02",
              name: "Use cases",
              description:
                "Coordinates actions such as checking availability, creating reservations, listing active bookings and cancellations.",
            },
            {
              step: "03",
              name: "Infrastructure",
              description:
                "Integrates PostgreSQL and persistence adapters for data access.",
            },
            {
              step: "04",
              name: "Presentation",
              description:
                "Exposes Swagger-documented endpoints consumed by the mobile app.",
            },
          ],
          flow: "React Native + Expo -> NestJS -> PostgreSQL",
        },
        stack: [
          {
            name: "Mobile",
            description:
              "React Native and Expo for a mobile-first MVP focused on reservation workflows.",
          },
          {
            name: "Backend",
            description:
              "NestJS with TypeScript to organize modules, use cases and documented endpoints.",
          },
          {
            name: "Database",
            description:
              "PostgreSQL to persist desks, availability and reservations.",
          },
          {
            name: "Documentation",
            description:
              "Swagger to document endpoints and support integration between mobile frontend and backend.",
          },
          {
            name: "Evolution",
            description:
              "The project is currently in development. Docker support and additional product features are planned next.",
          },
        ],
      },
    },
  },

  {
    id: "ganadera",
    title: "Sistema de Gestion Ganadera",
    status: "Experiencia backend",
    featured: false,
    shortDescription:
      "Participacion en el analisis, diseno e implementacion backend de un sistema de gestion ganadera tipo Feedlot, enfocado en organizacion operativa y soporte a procesos del dominio.",

    tags: ["Backend", "Analisis", "Diseno", "Logica de negocio"],

    metrics: [],

    problem:
      "La operacion requeria una mejor organizacion de procesos y una estructura mas clara para administrar informacion del dominio ganadero.",

    solution:
      "Participe en tareas de analisis, diseno e implementacion backend para apoyar la construccion de un sistema de gestion mas ordenado y alineado al negocio.",

    architecture: null,

    stack: [
      {
        name: "Rol",
        description:
          "Participacion como desarrollador backend en analisis, diseno e implementacion.",
      },
    ],
    i18n: {
      en: {
        title: "Cattle Management System",
        status: "Backend experience",
        shortDescription:
          "Participation in analysis, design and backend implementation for a feedlot management system focused on operational organization and domain process support.",
        tags: ["Backend", "Analysis", "Design", "Business logic"],
        metrics: [],
        problem:
          "The operation required better process organization and a clearer structure for managing cattle domain information.",
        solution:
          "I contributed to backend analysis, design and implementation to support a more organized management system aligned with business needs.",
        architecture: null,
        stack: [
          {
            name: "Role",
            description:
              "Backend developer participation across analysis, design and implementation tasks.",
          },
        ],
      },
    },
  },

  {
    id: "portfolio",
    title: "Portfolio personal",
    status: "Proyecto personal",
    featured: false,
    shortDescription:
      "Sitio desarrollado para presentar proyectos, arquitectura tecnica y experiencia profesional con una interfaz enfocada en claridad, navegacion y estetica tipo producto SaaS.",

    tags: ["Astro", "TailwindCSS", "Componentizacion", "Responsive UI"],

    metrics: [],

    problem:
      "Necesitaba una forma de presentar proyectos y experiencia de manera clara, profesional y alineada a mi perfil tecnico, evitando un portfolio generico o sobrecargado.",

    solution:
      "Desarrolle un portfolio con Astro y Tailwind enfocado en mostrar sistemas reales, arquitectura, stack tecnico y contacto profesional mediante una experiencia visual simple, sobria y orientada a producto.",

    architecture: {
      title: "Sitio estructurado por componentes",
      description:
        "La interfaz fue organizada en componentes reutilizables para mantener consistencia visual, facilitar iteraciones y escalar secciones sin duplicar estilos.",
      layers: [
        {
          step: "01",
          name: "Layouts",
          description:
            "Definen la estructura base de las paginas y la navegacion principal.",
        },
        {
          step: "02",
          name: "Sections",
          description:
            "Agrupan bloques funcionales como proyectos, contacto y detalle dinamico.",
        },
        {
          step: "03",
          name: "UI Components",
          description:
            "Componentes reutilizables como cards, badges y headers para mantener consistencia.",
        },
        {
          step: "04",
          name: "Data",
          description:
            "Los proyectos y contenidos principales se organizan desde estructuras de datos para simplificar el renderizado.",
        },
      ],
      flow: "Pages -> Layouts -> Sections -> UI Components",
    },

    stack: [
      {
        name: "Framework",
        description:
          "Astro para estructurar paginas, componentes y contenido estatico de forma eficiente.",
      },
      {
        name: "Estilos",
        description:
          "Tailwind CSS para construir una interfaz consistente, modular y orientada a producto.",
      },
      {
        name: "Enfoque",
        description:
          "Diseno responsive, componentizacion y navegacion clara para presentar proyectos de forma profesional.",
      },
    ],
    i18n: {
      en: {
        title: "Personal portfolio",
        status: "Personal project",
        shortDescription:
          "Website built to present projects, technical architecture and professional experience through a clear, product-oriented interface.",
        tags: ["Astro", "TailwindCSS", "Componentization", "Responsive UI"],
        metrics: [],
        problem:
          "I needed a clear and professional way to present projects and experience aligned with my technical profile, avoiding a generic or overloaded portfolio.",
        solution:
          "I built a portfolio with Astro and Tailwind focused on real systems, architecture, technical stack and professional contact through a simple and sober product-oriented experience.",
        architecture: {
          title: "Component-based website structure",
          description:
            "The interface is organized into reusable components to preserve visual consistency, support iteration and scale sections without duplicating styles.",
          layers: [
            {
              step: "01",
              name: "Layouts",
              description:
                "Define the base page structure and main navigation.",
            },
            {
              step: "02",
              name: "Sections",
              description:
                "Group functional blocks such as projects, contact and dynamic detail.",
            },
            {
              step: "03",
              name: "UI Components",
              description:
                "Reusable components such as cards, badges and headers for consistency.",
            },
            {
              step: "04",
              name: "Data",
              description:
                "Project and main content are organized as data structures to simplify rendering.",
            },
          ],
          flow: "Pages -> Layouts -> Sections -> UI Components",
        },
        stack: [
          {
            name: "Framework",
            description:
              "Astro for efficient static pages, components and content structure.",
          },
          {
            name: "Styles",
            description:
              "Tailwind CSS to build a consistent, modular and product-oriented interface.",
          },
          {
            name: "Approach",
            description:
              "Responsive design, componentization and clear navigation to present projects professionally.",
          },
        ],
      },
    },
  },
] as const;

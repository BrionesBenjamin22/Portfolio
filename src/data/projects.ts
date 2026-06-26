export const projects = [
  {
    id: "laboratorio",
    title: "Sistema de Gestion de Memorias Academicas",
    status: "Proyecto destacado",
    featured: true,
    shortDescription:
      "Aplicacion orientada a gestionar las memorias academicas de laboratorios de la facultad, facilitando el acceso a la informacion y su exportacion.",

    tags: ["React", "TypeScript", "Flask", "PostgreSQL"],

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
          "Me desempeñé como desarrollador del sistema, participando en la implementación de la solución y su arquitectura.",
      },
      {
        name: "Repositorio",
        description:
          "Proyecto publico disponible en github.com/BrionesBenjamin22/SGM-GIDAS.",
      },
    ],
    coAuthors: ["Valentina Falco (Desarrollo Frontend)", "Zoe Quiroz (Desarrollo Frontend)"],
    i18n: {
      en: {
        title: "Academic Reports Management System",
        status: "Featured project",
        shortDescription:
          "Application focused on managing academic reports for university laboratories, making information easier to access and export.",
        tags: ["React", "TypeScript", "Flask", "PostgreSQL"],
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
              "I worked as a developer, contributing to the solution implementation and its architecture.",
          },
          {
            name: "Repository",
            description:
              "Public project available at github.com/BrionesBenjamin22/SGM-GIDAS.",
          },
        ],
      },
    },
  },

  {
    id: "deskly",
    title: "Deskly",
    status: "En desarrollo - etapa final",
    featured: false,
    shortDescription:
      "SaaS mobile para gestionar espacios de coworking, consultar disponibilidad y reservar escritorios desde una experiencia simple y orientada a dispositivos móviles.",

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
      "La aplicación permite a los usuarios de coworkings consultar escritorios disponibles, filtrar por fecha, horario, capacidad, ubicación, precio y estado, crear reservas y gestionar reservas activas desde una interfaz mobile-first.",

    architecture: {
      title: "Arquitectura hexagonal para un SaaS mobile",
      description:
        "El backend fue organizado con NestJS siguiendo una arquitectura hexagonal que separa dominio, casos de uso, infraestructura y presentación. El desarrollo se guía por un enfoque spec-driven, favoreciendo la mantenibilidad y la evolución del producto.",
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
          "El producto se encuentra en la etapa final de desarrollo y aún no está en producción.",
      },
      {
        name: "Rol",
        description:
          "Me desempeño como desarrollador con un enfoque spec-driven development para guiar la implementación de funcionalidades.",
      },
      {
        name: "Repositorio",
        description:
          "Proyecto publico disponible en github.com/BrionesBenjamin22/Deskly-Mobile.",
      },
    ],
    i18n: {
      en: {
        title: "Deskly",
        status: "In development - final stage",
        shortDescription:
          "Mobile SaaS for managing coworking spaces, checking availability and booking desks through a simple mobile-first experience.",
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
          "The application lets coworking users browse available desks, filter by date, time slot, capacity, location, price and status, create bookings and manage active reservations from a mobile-first interface.",
        architecture: {
          title: "Hexagonal architecture for a mobile SaaS",
          description:
            "The NestJS backend follows a hexagonal architecture that separates domain, use cases, infrastructure and presentation. Development is guided by a spec-driven approach to support maintainability and product evolution.",
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
              "The product is in its final development stage and is not yet in production.",
          },
          {
            name: "Role",
            description:
              "I work as a developer using a spec-driven development approach to guide feature implementation.",
          },
          {
            name: "Repository",
            description:
              "Public project available at github.com/BrionesBenjamin22/Deskly-Mobile.",
          },
        ],
      },
    },
  },

  {
    id: "ganadera",
    title: "LotManager",
    status: "Proyecto educativo",
    featured: false,
    shortDescription:
      "Sistema de gestion de bovinos orientado a corrales, dietas, pesajes y metricas operativas de cada corral, desarrollado como primer proyecto educativo.",

    tags: ["TypeScript", "Next.js", "React", "SQLite", "Backend"],

    metrics: [
      { value: "4", label: "Dominios clave" },
      { value: "SQLite", label: "Base de datos" },
      { value: "Backend", label: "Rol principal" },
      { value: "Capas", label: "Arquitectura" },
    ],

    problem:
      "El proyecto buscaba resolver, desde un contexto educativo, la organizacion basica de un establecimiento tipo feedlot: administrar bovinos, corrales, dietas, pesajes y el seguimiento de metricas por corral.",

    solution:
      "Participe como desarrollador backend, modelando reglas del dominio, persistencia en SQLite y servicios para que la aplicacion pudiera registrar animales, asociarlos a corrales, gestionar dietas y consultar informacion operativa.",

    architecture: {
      title: "Arquitectura por capas en TypeScript",
      description:
        "LotManager fue implementado con TypeScript, Next.js y React, usando SQLite como base de datos. El backend se organizo por capas para separar acceso a datos, logica de negocio y exposicion de funcionalidades, una decision clave para ordenar el primer proyecto y facilitar su mantenimiento.",
      layers: [
        {
          step: "01",
          name: "Dominio ganadero",
          description:
            "Representa bovinos, corrales, dietas, pesajes y metricas asociadas a la operacion diaria.",
        },
        {
          step: "02",
          name: "Servicios backend",
          description:
            "Centralizan reglas de negocio y coordinan las operaciones principales del sistema.",
        },
        {
          step: "03",
          name: "Persistencia",
          description:
            "Utiliza SQLite para almacenar datos del proyecto de forma simple y adecuada al alcance educativo.",
        },
        {
          step: "04",
          name: "Interfaz web",
          description:
            "Next.js y React conectan la experiencia de usuario con las funcionalidades del backend.",
        },
      ],
      flow: "Next.js + React -> Servicios TypeScript -> SQLite",
    },

    stack: [
      {
        name: "Rol",
        description:
          "Me desempene como desarrollador backend, enfocado en modelado de datos, servicios y logica de negocio.",
      },
      {
        name: "Backend",
        description:
          "TypeScript para implementar funcionalidades del dominio ganadero con una estructura por capas.",
      },
      {
        name: "Base de datos",
        description:
          "SQLite para persistir bovinos, corrales, dietas, pesajes y metricas del sistema.",
      },
      {
        name: "Repositorio",
        description:
          "Proyecto publico disponible en github.com/LotManager/lotmanager-proyect.",
      },
    ],
    i18n: {
      en: {
        title: "LotManager",
        status: "Educational project",
        shortDescription:
          "Cattle management system focused on pens, diets, weigh-ins and operational metrics for each pen, built as a first educational project.",
        tags: ["TypeScript", "Next.js", "React", "SQLite", "Backend"],
        metrics: [
          { value: "4", label: "Key domains" },
          { value: "SQLite", label: "Database" },
          { value: "Backend", label: "Main role" },
          { value: "Layers", label: "Architecture" },
        ],
        problem:
          "The project aimed to solve, in an educational context, the basic organization of a feedlot operation: managing cattle, pens, diets, weigh-ins and pen-level metrics.",
        solution:
          "I worked as a backend developer, modeling domain rules, SQLite persistence and services so the application could register animals, assign them to pens, manage diets and query operational information.",
        architecture: {
          title: "Layered architecture in TypeScript",
          description:
            "LotManager was implemented with TypeScript, Next.js and React, using SQLite as its database. The backend followed a layered structure to separate data access, business logic and feature exposure, an important decision for organizing a first project and making it easier to maintain.",
          layers: [
            {
              step: "01",
              name: "Cattle domain",
              description:
                "Represents cattle, pens, diets, weigh-ins and metrics tied to daily operations.",
            },
            {
              step: "02",
              name: "Backend services",
              description:
                "Centralize business rules and coordinate the main system operations.",
            },
            {
              step: "03",
              name: "Persistence",
              description:
                "Uses SQLite to store project data in a simple way aligned with its educational scope.",
            },
            {
              step: "04",
              name: "Web interface",
              description:
                "Next.js and React connect the user experience with backend functionality.",
            },
          ],
          flow: "Next.js + React -> TypeScript services -> SQLite",
        },
        stack: [
          {
            name: "Role",
            description:
              "I worked as a backend developer, focused on data modeling, services and business logic.",
          },
          {
            name: "Backend",
            description:
              "TypeScript for implementing cattle domain functionality with a layered structure.",
          },
          {
            name: "Database",
            description:
              "SQLite to persist cattle, pens, diets, weigh-ins and system metrics.",
          },
          {
            name: "Repository",
            description:
              "Public project available at github.com/LotManager/lotmanager-proyect.",
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

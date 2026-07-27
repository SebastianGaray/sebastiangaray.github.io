export const es = {
  lang: "es",
  skip: "Saltar al contenido",
  navLabel: "Navegación principal",
  menu: "Menú",
  language: "Idioma",
  languageName: "Español",
  alternateLanguage: "English",
  nav: [
    { label: "Proyectos", href: "/es/proyectos/" },
    { label: "Código abierto", href: "/es/codigo-abierto/" },
    { label: "Sobre mí", href: "/es/sobre-mi/" },
  ],
  footer: {
    line: "Ingeniería de software, sistemas de datos e interfaces útiles.",
    source: "Código",
    rights: "Construido con Astro.",
  },
  home: {
    title:
      "Ingeniero de software que convierte datos complejos en sistemas claros.",
    description:
      "Diseño y construyo software confiable, con énfasis en productos intensivos en datos y entregas mantenibles.",
    eyebrow: "Sebastián Garay · Ingeniero de software",
    primaryAction: "Ver trabajo seleccionado",
    secondaryAction: "Conocer más",
    selected: "Trabajo seleccionado",
    selectedIntro:
      "Una mirada a las decisiones, restricciones e implementación detrás de proyectos recientes.",
    openSource: "Código abierto",
    openSourceIntro:
      "Herramientas y experimentos pequeños y verificables. El código importa más que el discurso.",
    contact: "¿Tienes un problema que valga la pena simplificar?",
    contactAction: "Conversemos",
  },
  projects: {
    title: "Proyectos",
    description:
      "Casos de estudio centrados en las decisiones de ingeniería detrás del resultado.",
    empty: "Estoy preparando más casos de estudio.",
    read: "Leer caso de estudio",
  },
  openSource: {
    title: "Código abierto",
    description:
      "Código público, experimentos prácticos y el razonamiento detrás de ellos.",
    repository: "Ver repositorio",
  },
  about: {
    title: "Sobre mí",
    description:
      "Soy Sebastián, ingeniero de software en Chile. Trabajo en sistemas backend, productos de datos y las interfaces que permiten entenderlos.",
    body: [
      "Mi enfoque es directo: entender la restricción real, elegir el diseño sólido más pequeño y dejar el código más fácil de operar que antes.",
      "Me importan la comunicación clara, las pruebas útiles y las prácticas de entrega que hacen que cambiar software sea rutinario, no riesgoso.",
    ],
    focus: "En qué estoy trabajando",
    focusBody:
      "Aplicaciones intensivas en datos, servicios TypeScript, herramientas para desarrolladores y entregas confiables.",
    contact: "Contáctame",
  },
  caseStudy: {
    back: "Todos los proyectos",
    role: "Rol",
    period: "Período",
    stack: "Tecnologías",
    repository: "Repositorio",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La dirección puede haber cambiado o la página no existe.",
    action: "Volver al inicio",
  },
} as const;

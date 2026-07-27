import type { PortfolioContent } from "./types";

export const content = {
  lang: "es",
  meta: {
    title: "Sebastian Garay | Ingeniero de software",
    description:
      "Ingeniero de software con más de seis años de experiencia en sistemas backend, datos, machine learning aplicado y liderazgo técnico.",
  },
  skip: "Saltar al contenido",
  menu: "Menú",
  navLabel: "Navegación principal",
  nav: [
    { label: "Inicio", href: "#home" },
    { label: "Demos", href: "#projects" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],
  languageHref: "/en/",
  hero: {
    eyebrow: "Ingeniero de software · +6 años",
    title:
      "Ingeniero de software enfocado en sistemas backend, datos, machine learning y liderazgo técnico.",
    description:
      "Construyo sistemas mantenibles que conectan necesidades de negocio, arquitectura de software y entrega.",
    projectAction: "Ver demo",
  },
  project: {
    eyebrow: "Demo destacada",
    title: "Retail Demand Intelligence",
    description:
      "Una aplicación de pronóstico de demanda y riesgo de inventario construida con datos sintéticos. Combina análisis reproducible con interfaces para exploración e integración local.",
    synthetic: "Datos sintéticos",
    technologyLabel: "Tecnologías",
    technologies: ["Python", "Streamlit", "FastAPI", "Pronóstico", "Docker"],
    links: {
      demo: "Demo en vivo",
      repository: "Repositorio en GitHub",
      release: "Versión v0.1.0",
    },
    highlightsTitle: "Aspectos de implementación",
    highlights: [
      {
        title: "Validación temporal",
        description:
          "La evaluación del pronóstico conserva la cronología en lugar de usar una división aleatoria.",
      },
      {
        title: "Dashboard bilingüe",
        description:
          "La interfaz Streamlit permite explorar la demo en inglés y español.",
      },
      {
        title: "API local",
        description:
          "Una interfaz FastAPI permite acceder localmente al flujo de la aplicación.",
      },
    ],
    visualLabel: "Estudio de pronóstico de demanda",
    visualLegend: ["Observado", "Pronóstico", "Validación"],
  },
  background: {
    eyebrow: "Trayectoria profesional",
    title: "Experiencia profesional",
    intro:
      "Más de seis años en desarrollo backend y full-stack, machine learning aplicado y sistemas de retail expuestos a picos de demanda de Cyber y Navidad.",
    highlights: [
      "Reduje aproximadamente 70% el tiempo de respuesta de un flujo de e-commerce con microservicios TypeScript y Redis.",
      "Modernicé un backend Django legado en componentes modulares con infraestructura apoyada por Terraform.",
      "Construí una red neuronal convolucional con PyTorch y Flask para apoyar la detección de fraude.",
      "Trabajé en sistemas productivos para eventos de alta demanda en retail y e-commerce.",
    ],
  },
  focus: {
    eyebrow: "Foco técnico",
    title: "Áreas técnicas",
    areas: [
      {
        title: "Backend e Ingeniería de Software",
        description:
          "Servicios mantenibles, APIs, caché y modernización de sistemas existentes.",
        technologies: "Python · TypeScript · Django · Flask · Redis",
      },
      {
        title: "Datos y Machine Learning",
        description:
          "Modelos aplicados, flujos de datos e interfaces que permiten revisar los resultados.",
        technologies: "PyTorch · Redes neuronales · PostgreSQL",
      },
      {
        title: "Arquitectura y Entrega",
        description:
          "Diseño modular, infraestructura como código y entregas productivas repetibles.",
        technologies: "Arquitectura de software · Terraform · Docker",
      },
      {
        title: "Liderazgo Técnico",
        description:
          "Decisiones técnicas, mentoría y colaboración clara en torno a la entrega.",
        technologies: "Comunicación · Mantenibilidad · Enseñanza",
      },
    ],
  },
  leadership: {
    eyebrow: "Liderazgo y enseñanza",
    title: "Liderazgo y docencia",
    description:
      "Conecto decisiones de ingeniería con restricciones de negocio, ayudo a los equipos a entregar software mantenible y enseño temas técnicos con contexto práctico.",
    points: [
      "Decisiones técnicas y entrega",
      "Mentoría y mantenibilidad",
      "Colaboración con equipos de negocio",
      "Enseñanza de Python, estadística, gobierno de datos, Django y Flask",
    ],
  },
  credentials: {
    educationTitle: "Educación",
    education: [
      "Magíster en Ciencias de la Computación — Universidad de Santiago de Chile",
      "Ingeniería Civil en Informática — Universidad de Santiago de Chile",
      "Licenciatura en Ciencias de la Ingeniería",
    ],
    publicationTitle: "Publicación",
    publication:
      "Coautor de una publicación en Scientific Reports sobre análisis de entropía multiescala en señales retinales.",
    recognitionTitle: "Reconocimiento",
    recognition:
      "Reconocimientos profesionales recibidos en 2021, 2022 y 2024.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contacto",
    description:
      "El correo es la forma más directa de contactarme. Mi trabajo público y perfil profesional también están disponibles a continuación.",
  },
  labels: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Correo",
    builtWith: "Construido con Astro.",
  },
} satisfies PortfolioContent;

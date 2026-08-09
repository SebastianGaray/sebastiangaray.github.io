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
  theme: {
    label: "Tema",
    system: "Sistema",
    light: "Claro",
    dark: "Oscuro",
  },
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
      "Seis años construyendo y modernizando sistemas de retail y comercio electrónico.",
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
    availability:
      "Alojada en Streamlit Community Cloud. Si la aplicación está suspendida, reactívala desde la pantalla de Streamlit y espera unos minutos mientras inicia.",
    highlightsTitle: "Detalles",
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
  recommendationProject: {
    eyebrow: "Demo interactiva",
    title: "Retail Recommendation Lab",
    description:
      "Un laboratorio interactivo de carrito y recomendaciones de retail construido con comportamiento de compra sintético. Conecta un pipeline reproducible en PySpark con estrategias explicables y evaluación offline sintética.",
    synthetic: "Datos sintéticos",
    technologyLabel: "Tecnologías",
    technologies: ["PySpark", "Python", "Astro", "TypeScript", "Playwright"],
    links: {
      demo: "Demo en vivo",
      repository: "Repositorio en GitHub",
    },
    highlightsTitle: "Detalles",
    highlights: [
      {
        title: "Estrategias sensibles al carrito",
        description:
          "Quienes visitan la demo pueden comparar recomendaciones por popularidad, coocurrencia y afinidad de categoría mientras cambia el carrito.",
      },
      {
        title: "Explicación de resultados",
        description:
          "Cada recomendación presenta una razón breve en lugar de mostrar un ranking opaco.",
      },
      {
        title: "Evaluación reproducible",
        description:
          "Los artefactos sintéticos versionados y las métricas offline se generan mediante un pipeline determinista.",
      },
    ],
    visualLabel: "Comparación de estrategias de recomendación",
    visualLegend: ["Popularidad", "Coocurrencia", "Afinidad de categoría"],
  },
  sketchProject: {
    eyebrow: "Demo de ML en navegador",
    title: "SketchSense",
    description:
      "Un clasificador privado y local de dibujos para 16 categorías de Quick, Draw! Quienes visitan la demo dibujan en un canvas adaptable, inspeccionan la entrada normalizada exacta y reciben predicciones en vivo desde un modelo ONNX versionado.",
    badge: "Inferencia local",
    technologyLabel: "Tecnologías",
    technologies: [
      "PyTorch",
      "ONNX Runtime Web",
      "Astro",
      "TypeScript",
      "Playwright",
    ],
    links: {
      demo: "Demo en vivo",
      repository: "Repositorio en GitHub",
    },
    highlightsTitle: "Detalles",
    highlights: [
      {
        title: "Entrenamiento vectorial",
        description:
          "El modelo publicado usa 160.000 dibujos vectoriales oficiales de Quick, Draw! y alcanza 94,61 % de F1 macro reservado.",
      },
      {
        title: "Inferencia local inspeccionable",
        description:
          "El canvas, tensor centrado de 28 × 28, predicciones y tiempos medidos permanecen en el navegador.",
      },
      {
        title: "Manejo de incertidumbre",
        description:
          "Las puntuaciones débiles o muy cercanas producen un estado incierto en lugar de una afirmación confiada.",
      },
    ],
    visualLabel: "Clasificación local de dibujos en el navegador",
    visualLegend: ["Canvas", "Tensor 28 × 28", "Predicciones top-3"],
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
    eyebrow: "Trabajo seleccionado",
    title: "Enfoque técnico",
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
    eyebrow: "Cómo trabajo",
    title: "Liderazgo y docencia",
    description:
      "Decisiones técnicas, mentoría y docencia en temas de software y datos.",
    points: [
      "Decisiones técnicas y entrega",
      "Mentoría y mantenibilidad",
      "Colaboración con equipos de negocio",
      "Enseñanza de Python, estadística, gobierno de datos, Django y Flask",
    ],
  },
  credentials: {
    eyebrow: "Formación",
    title: "Educación, publicaciones y reconocimientos",
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
    title: "Correo y perfiles",
    description: "Correo, GitHub y LinkedIn.",
  },
  labels: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Correo",
    builtWith: "Construido con Astro.",
  },
  scroll: {
    label: "Posición en la página",
    up: "Sección anterior",
    down: "Sección siguiente",
  },
} satisfies PortfolioContent;

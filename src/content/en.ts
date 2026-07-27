import type { PortfolioContent } from "./types";

export const content = {
  lang: "en",
  meta: {
    title: "Sebastian Garay | Software Engineer",
    description:
      "Software engineer with more than six years of experience in backend systems, data, applied machine learning and technical leadership.",
  },
  skip: "Skip to content",
  menu: "Menu",
  navLabel: "Main navigation",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  languageHref: "/es/",
  hero: {
    eyebrow: "Software engineer · 6+ years",
    title:
      "Software engineer focused on backend systems, data, machine learning and technical leadership.",
    description:
      "I build maintainable systems that connect business needs, software architecture and delivery.",
    projectAction: "View project",
  },
  project: {
    eyebrow: "Featured project",
    title: "Retail Demand Intelligence",
    description:
      "A retail demand forecasting and inventory-risk application built with synthetic data. It combines reproducible analysis with interfaces for exploration and local integration.",
    synthetic: "Synthetic data",
    technologyLabel: "Technologies",
    technologies: ["Python", "Streamlit", "FastAPI", "Forecasting", "Docker"],
    links: {
      demo: "Live demo",
      repository: "GitHub repository",
      release: "Release v0.1.0",
    },
    highlightsTitle: "Implementation highlights",
    highlights: [
      {
        title: "Time-based validation",
        description:
          "Forecasting evaluation preserves chronology instead of using a random split.",
      },
      {
        title: "Bilingual dashboard",
        description:
          "The Streamlit interface supports English and Spanish exploration.",
      },
      {
        title: "Local API",
        description:
          "A FastAPI interface supports local access to the application workflow.",
      },
    ],
    visualLabel: "Demand forecasting study",
    visualLegend: ["Observed", "Forecast", "Validation"],
  },
  background: {
    eyebrow: "Professional background",
    title: "Professional experience",
    intro:
      "More than six years across backend and full-stack work, applied machine learning and retail systems exposed to Cyber and Christmas demand peaks.",
    highlights: [
      "Reduced response time by approximately 70% in an e-commerce flow using TypeScript microservices and Redis.",
      "Modernized a legacy Django backend into modular components with Terraform-supported infrastructure.",
      "Built a convolutional neural network with PyTorch and Flask to support fraud detection.",
      "Worked on production systems serving high-demand retail and e-commerce events.",
    ],
  },
  focus: {
    eyebrow: "Technical focus",
    title: "Technical areas",
    areas: [
      {
        title: "Backend and Software Engineering",
        description:
          "Maintainable services, APIs, caching and modernization of existing systems.",
        technologies: "Python · TypeScript · Django · Flask · Redis",
      },
      {
        title: "Data and Machine Learning",
        description:
          "Applied models, data workflows and interfaces that make results inspectable.",
        technologies: "PyTorch · Neural networks · PostgreSQL",
      },
      {
        title: "Architecture and Delivery",
        description:
          "Modular design, infrastructure as code and repeatable production delivery.",
        technologies: "Software architecture · Terraform · Docker",
      },
      {
        title: "Technical Leadership",
        description:
          "Technical decisions, mentoring and clear collaboration around delivery.",
        technologies: "Communication · Maintainability · Teaching",
      },
    ],
  },
  leadership: {
    eyebrow: "Leadership and teaching",
    title: "Leadership and teaching",
    description:
      "I connect engineering decisions with business constraints, help teams deliver maintainable software and teach technical topics with practical context.",
    points: [
      "Technical decision-making and delivery",
      "Mentoring and maintainability",
      "Collaboration with business stakeholders",
      "Teaching Python, statistics, data governance, Django and Flask",
    ],
  },
  credentials: {
    educationTitle: "Education",
    education: [
      "Master’s degree in Computer Science — Universidad de Santiago de Chile",
      "Civil Engineering in Computer Science — Universidad de Santiago de Chile",
      "Bachelor’s degree in Engineering Science",
    ],
    publicationTitle: "Publication",
    publication:
      "Co-author of a Scientific Reports publication on multiscale entropy analysis of retinal signals.",
    recognitionTitle: "Recognition",
    recognition: "Professional recognition received in 2021, 2022 and 2024.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    description:
      "Email is the most direct way to reach me. My public work and professional profile are also available below.",
  },
  labels: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    builtWith: "Built with Astro.",
  },
} satisfies PortfolioContent;

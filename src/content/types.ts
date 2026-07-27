export interface PortfolioContent {
  lang: "en" | "es";
  meta: { title: string; description: string };
  skip: string;
  menu: string;
  navLabel: string;
  nav: { label: string; href: `#${string}` }[];
  languageHref: "/en/" | "/es/";
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    projectAction: string;
  };
  project: {
    eyebrow: string;
    title: string;
    description: string;
    synthetic: string;
    technologyLabel: string;
    technologies: string[];
    links: { demo: string; repository: string; release: string };
    highlightsTitle: string;
    highlights: { title: string; description: string }[];
    visualLabel: string;
    visualLegend: string[];
  };
  background: {
    eyebrow: string;
    title: string;
    intro: string;
    highlights: string[];
  };
  focus: {
    eyebrow: string;
    title: string;
    areas: { title: string; description: string; technologies: string }[];
  };
  leadership: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  credentials: {
    educationTitle: string;
    education: string[];
    publicationTitle: string;
    publication: string;
    recognitionTitle: string;
    recognition: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  labels: {
    github: string;
    linkedin: string;
    email: string;
    builtWith: string;
  };
}

export const en = {
  lang: "en",
  skip: "Skip to content",
  navLabel: "Main navigation",
  menu: "Menu",
  language: "Language",
  languageName: "English",
  alternateLanguage: "Español",
  nav: [
    { label: "Projects", href: "/en/projects/" },
    { label: "Open source", href: "/en/open-source/" },
    { label: "About", href: "/en/about/" },
  ],
  footer: {
    line: "Software engineering, data systems and useful interfaces.",
    source: "Source",
    rights: "Built with Astro.",
  },
  home: {
    title: "Software engineer building clear systems from complex data.",
    description:
      "I design and build dependable software, with an emphasis on data-intensive products and maintainable delivery.",
    eyebrow: "Sebastián Garay · Software Engineer",
    primaryAction: "View selected work",
    secondaryAction: "Read about me",
    selected: "Selected work",
    selectedIntro:
      "A closer look at the decisions, constraints and implementation behind recent projects.",
    openSource: "Open source",
    openSourceIntro:
      "Small, inspectable tools and experiments. The code matters more than the pitch.",
    contact: "Have a problem worth making simpler?",
    contactAction: "Start a conversation",
  },
  projects: {
    title: "Projects",
    description:
      "Case studies focused on the engineering decisions behind the result.",
    empty: "More case studies are being prepared.",
    read: "Read case study",
  },
  openSource: {
    title: "Open source",
    description:
      "Public code, practical experiments and the reasoning behind them.",
    repository: "View repository",
  },
  about: {
    title: "About",
    description:
      "I am Sebastián, a software engineer based in Chile. I work across backend systems, data products and the interfaces people use to understand them.",
    body: [
      "My approach is direct: understand the real constraint, choose the smallest sound design and leave the code easier to operate than I found it.",
      "I care about clear communication, useful tests and delivery practices that make change routine rather than risky.",
    ],
    focus: "Current focus",
    focusBody:
      "Data-intensive applications, TypeScript services, developer tooling and dependable delivery.",
    contact: "Contact me",
  },
  caseStudy: {
    back: "All projects",
    role: "Role",
    period: "Period",
    stack: "Stack",
    repository: "Repository",
  },
  notFound: {
    title: "Page not found",
    description: "The address may have changed, or the page may not exist.",
    action: "Return home",
  },
} as const;

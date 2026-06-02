const age = new Date().getFullYear() - 1988;

export const english = {
  navbar: {
    whoami: `WhoAmI`,
    skills: `Skills`,
    ai: `AI`,
    experience: `Experience`,
    contact: `Contact`,
  },
  header: {
    title: `Welcome to my page!`,
    subtitle: `I'm glad you're here ;)`,
  },
  whoami: {
    title: `WhoAmI`,
    greetings: "Hi!",
    paragraph1: `I'm Renan Braga, ${age} years old, full-stack developer, and I've been working as a front-end developer since 2021. I studied web development at Trybe, one of the best web development schools in Brazil. I'm experienced in development using Javascript and Typescript, React and Angular in adition to other libraries and frameworks.`,
    paragraph2: `I hold a Master's degree in Agronomy from the Federal Rural University of Rio de Janeiro (UFRRJ). My scientific background has strongly influenced the way I approach technology, fostering a data-driven, analytical, and solution-oriented mindset. Years of research experience taught me to think critically, solve complex problems, and continuously seek improvement. While my career path has evolved into Information Technology, my passion for science and lifelong learning remains unchanged. Yes, I'm a NERD.`,
    paragraph3: `In adition to all this technical aspect of my background, I also developed soft skills during all these years, like comunication, empathy, leadership and management skills, adaptability and continuous learning, teaching...`,
  },
  skills: {
    title: `Skills`,
  },
  ai: {
    badge: `AI & Development`,
    title: `Developing with AI, without losing craft`,
    subtitle: `I build front-end products that are designed to perform with or without AI, using automation where it adds value and human judgment where it matters most.`,
    description: `I deliver front-end systems that leverage AI as an accelerator, not a crutch. My work balances rapid execution, robust quality, and a clear understanding of when AI should enhance decisions, not replace them.`,
    bullets: [
      `Use AI to speed up component design, prototyping and code generation while maintaining clean architecture.`,
      `Validate AI-supported implementation against accessibility, security and production readiness.`,
      `Adapt tooling to support internal AI workflows like prompt-driven specs, automated testing and documentation.`,
      `Deliver scalable front-end solutions that remain stable with or without AI support.`,
      `Communicate technical strategy clearly so stakeholders trust the product and the team.`,
    ],
    cardOne: {
      title: `AI-aware development`,
      description: `I can convert product ideas into polished interfaces using AI-generated assets while ensuring the final result is maintainable, reliable and aligned with business rules.`,
    },
    cardTwo: {
      title: `Human-led execution`,
      description: `I build the core experience with developer expertise, using AI only as a force multiplier for repetitive or exploratory tasks.`,
    },
  },
  professional: {
    title: `Professional experience`,
    enterpriseOne: {
      name: {
        title: `Name`,
        value: `Clina.care`,
      },
      period: {
        title: `Period`,
        value: `2021 - 2023`,
      },
      responsibilities: {
        title: `Responsibilities`,
        value: [
          `Collaborate with the Product Manager, Business Analysts, QA specialists and other developers;`,
          `Identify opportunities to improve the front-end code and user experience;`,
          `Develop new features;`,
          `Improve and optimize performance of existing features;`,
          `Set up and maintain a Storybook instance to document the applications set of components;`,
        ],
      },
      image: `/clina.svg`,
    },
    enterpriseTwo: {
      image: `/f1rst.jpg`,
      name: { value: `F1rst Digital Services` },
      period: { value: `2023 - today` },
      responsibilities: {
        title: `Responsibilities`,
        value: [
          `Build secure, high-performance user interfaces for digital banking products with a strong focus on accessibility and compliance.`,
          `Collaborate closely with product, design and backend teams to translate financial requirements into polished front-end experiences.`,
          `Optimize application performance, maintainability and scalability for high-traffic fintech platforms.`,
          `Implement state management, modular component libraries and shared design systems to support fast delivery and consistency.`,
          `Monitor production quality, run automated tests and iterate quickly on UX improvements based on user data and feedback.`,
        ],
      },
    },
  },
  contact: {
    title: `Contact`,
    heading: `Let’s connect`,
    description: `I’m available for challenging projects, remote roles, or collaboration. Send a message and let’s talk.`,
    social: {
      whatsapp: `WhatsApp`,
      facebook: `Facebook`,
      linkedin: `LinkedIn`,
      github: `GitHub`,
    },
  },
  certifications: {
    badge: `Certifications`,
    title: `Professional Certifications`,
    subtitle: `Continuous learning and professional development through industry-recognized certifications.`,
    card: {
      title: `View My Certifications`,
      description: `Explore my professional certifications and achievements on LinkedIn`,
      cta: `Open LinkedIn`,
    },
  },
  footer: {
    description: `2022 - Developed by Renan Braga com Typescript, React and Tailwind.`
  }
};

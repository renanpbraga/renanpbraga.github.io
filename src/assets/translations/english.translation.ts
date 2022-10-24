const age = new Date().getFullYear() - 1988;

export const english = {
  navbar: {
    whoami: `WhoAmI`,
    skills: `Skills`,
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
    paragraph2: `I have a MSc. degree in Agronomy from Universidade Federal Rural do Rio de Janeiro (UFRRJ). Currently, I'm in career transition, however all my background in contact with science made me more accurate, analytic and rational person. I still like all kind of science stuff, I'm a NERD`,
    paragraph3: `In adition to all this technical aspect of my background, I also developed soft skills during all these years, like comunication, empathy, leadership and management skills, adaptability and continuous learning, teaching...`,
  },
  skills: {
    title: `Skills`,
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
        value: `10/2021 - today`,
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
  },
  contact: {
    title: `Contact`,
  },
  footer: {
    description: `2022 - Developed by Renan Braga com Typescript, React and Tailwind.`
  }
};

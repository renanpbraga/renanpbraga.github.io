const age = new Date().getFullYear() - 1988;

export const portuguese = {
  navbar: {
    whoami: `Sobre mim`,
    skills: `Habilidades`,
    experience: `Experiência`,
    contact: `Contato`,
  },
  header: {
    title: `Bem-vindo à minha página!`,
    subtitle: `Fico feliz que esteja aqui ;)`,
  },
  whoami: {
    title: `Sobre mim`,
    greetings: `Olá!`,
    paragraph1: `Sou Renan Braga, ${age} anos, desenvolvedor full-stack, e tenho trabalhado como desenvolvedor front-end desde 2021. Estudei desenvolvimento web na Trybe, uma das melhores escolas de desenvolvimento web do Brasil. Tenho experiência em desenvolvimento utilizando Javascript e Typescript, React e Angulas além de outras bibliotecas e frameworks.`,
    paragraph2: `Tenho mestrado em Agronomia pela Universidade Federal Rural do Rio de Janeiro (UFRRJ). Atualmente estou em transição de carreira, no entanto todos os meus antecedentes em contato com a ciência, me fizeram mais preciso, analítico e racional. Eu ainda me interesso por assuntos científicos. Sim, sou NERD.`,
    paragraph3: `Além de todo esse aspecto técnico do meu passado, também desenvolvi soft skills durante todos esses anos, como comunicação, empatia, liderança e habilidades gerenciais, adaptabilidade e aprendizado contínuo, ensino...`,
  },
  skills: {
    title: `Habilidades`,
  },
  professional: {
    title: `Experiência profissional`,
    enterpriseOne: {
      name: {
        title: `Nome`,
        value: `Clina.care`,
      },
      period: {
        title: `Período`,
        value: `10/2021 - hoje`,
      },
      responsibilities: {
        title: `Responsabilidades`,
        value: [
          `Colaborar com o Gerente de Produto, Analitas de negócios, especialistas em qualidade e outros desenvolvedores;`,
          `Identificar oportunidades de melhorias no código front-end e experiência do usuário;`,
          `Desenvolver novas funcionalidades;`,
          `Melhorar e otimizar a performance das funcionalidades existentes;`,
          `Implementar e manter a documentação da aplicação e componentes com Storybook;`,
        ],
      },
      image: `/clina.svg`,
    },
  },
  contact: {
    title: `Contato`,
  },
  footer: {
    description: `2022 - Desenvolvido por Renan Braga com Typescript, React e Tailwind.`
  }
};
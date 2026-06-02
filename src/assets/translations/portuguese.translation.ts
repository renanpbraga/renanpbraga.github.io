const age = new Date().getFullYear() - 1988;

export const portuguese = {
  navbar: {
    whoami: `Sobre mim`,
    skills: `Habilidades`,
    ai: `IA`,
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
    paragraph1: `Desenvolvedor Full Stack com experiência em Angular, React, JavaScript e TypeScript, focado no desenvolvimento de aplicações web escaláveis, performáticas e de fácil manutenção. Atuo aplicando boas práticas de engenharia de software para criar soluções que conciliam qualidade técnica, experiência do usuário e objetivos de negócio.`,
    paragraph2: `Mestre em Agronomia pela Universidade Federal Rural do Rio de Janeiro (UFRRJ), trago para a área de tecnologia uma sólida formação científica e analítica. Minha trajetória na pesquisa fortaleceu habilidades como pensamento crítico, resolução estruturada de problemas, tomada de decisão baseada em evidências e busca contínua por aprimoramento.`,
    paragraph3: `Além da expertise técnica, valorizo a comunicação, a colaboração entre equipes, a troca de conhecimento e o aprendizado contínuo. Busco sempre desenvolver soluções que gerem impacto real para usuários e organizações, mantendo o compromisso com a excelência técnica e a evolução profissional.`,
  },
  skills: {
    title: `Habilidades`,
    description: `Tecnologias e ferramentas que uso para construir aplicações eficientes, modernas e escaláveis.`,
  },
  ai: {
    badge: `IA & Desenvolvimento`,
    title: `Desenvolver com IA sem perder o ofício`,
    subtitle: `Construo produtos front-end pensados para funcionar com ou sem IA, usando automações onde agregam valor e julgamento humano onde importa mais.`,
    description: `Entrego sistemas front-end que usam IA como aceleradora, não como muleta. Meu trabalho equilibra execução rápida, qualidade robusta e clareza sobre quando a IA deve apoiar decisões.`,
    bullets: [
      `Uso IA para acelerar design de componentes, prototipagem e geração de código, mantendo arquitetura limpa.`,
      `Valido implementações suportadas por IA contra acessibilidade, segurança e preparação para produção.`,
      `Adapto ferramentas para suportar fluxos de trabalho internos com IA, como especificações por prompt, testes automáticos e documentação.`,
      `Entrego soluções front-end escaláveis que permanecem estáveis com ou sem suporte de IA.`,
      `Comunico a estratégia técnica com clareza para que stakeholders confiem no produto e no time.`,
    ],
    cardOne: {
      title: `Desenvolvimento com consciência de IA`,
      description: `Transformo ideias de produto em interfaces polidas usando ativos gerados por IA, garantindo que o resultado final seja sustentável e alinhado às regras do negócio.`,
    },
    cardTwo: {
      title: `Execução liderada por humano`,
      description: `Construo a experiência central com expertise de desenvolvedor, usando IA apenas como multiplicador de força para tarefas repetitivas ou exploratórias.`,
    },
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
    enterpriseTwo: {
      image: `/f1rst.jpg`,
      name: { value: `F1rst Digital Services` },
      period: { value: `2023 - hoje` },
      responsibilities: {
        title: `Responsabilidades`,
        value: [
          `Construir interfaces de usuário seguras e de alto desempenho para produtos bancários digitais com foco em acessibilidade e conformidade.`,
          `Colaborar estreitamente com produto, design e equipes de backend para traduzir requisitos financeiros em experiências front-end refinadas.`,
          `Otimizar performance, mantenibilidade e escalabilidade para plataformas fintech de alto tráfego.`,
          `Implementar gerenciamento de estado, bibliotecas de componentes modulares e sistemas de design compartilhados para acelerar entregas.`,
          `Monitorar qualidade de produção, executar testes automatizados e iterar rapidamente em melhorias de UX com base em dados de usuários.`,
        ],
      },
    },
  },
  contact: {
    title: `Contato`,
    heading: `Vamos conversar`,
    description: `Estou disponível para projetos desafiadores, vagas remotas ou colaboração. Envie uma mensagem e vamos conversar.`,
    social: {
      whatsapp: `WhatsApp`,
      facebook: `Facebook`,
      linkedin: `LinkedIn`,
      github: `GitHub`,
    },
  },
  certifications: {
    badge: `Certificações`,
    title: `Certificações profissionais`,
    subtitle: `Aprendizado contínuo e desenvolvimento profissional por meio de certificações reconhecidas pelo mercado.`,
    card: {
      title: `Ver minhas certificações`,
      description: `Explore minhas certificações profissionais e conquistas no LinkedIn`,
      cta: `Abrir LinkedIn`,
    },
  },
  footer: {
    description: `2026 - Desenvolvido por Renan Braga com Typescript, React e Tailwind.`
  }
};
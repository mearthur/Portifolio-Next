export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Front-End Pleno",
      period: "(nov 2022 - atual, 3 anos 7 meses)",
      company: "Oxygeni DIT",
      description:
        "Desenvolvimento e manutenção de aplicações web com React.js, Next.js, TypeScript, JavaScript, HTML, CSS e Tailwind CSS, integradas a APIs REST. Aplicação de UI/UX, criação de protótipos no Figma, documentação técnica e boas práticas de componentização, performance e acessibilidade. Colaboração direta com equipes multidisciplinares, alinhando requisitos e melhorando a experiência do usuário.",
    },
    {
      title: "Desenvolvedor Front-End Pleno",
      period: "(mai/2023 - atual, 2 anos 6 meses)",
      company: "Univercidade Ceuma",
      description:
        "Liderança no desenvolvimento e manutenção de sistemas acadêmicos com React.js, Next.js e TypeScript, integrados a APIs REST. Atuação em UI/UX, criando protótipos no Figma, aplicando componentização, responsividade e acessibilidade, colaborando com equipes internas para aprimorar a experiência do usuário. Revisão de código, organização de tarefas e implementação de melhorias contínuas, garantindo qualidade e entrega eficiente.",
    },
    {
      title: "Desenvolvedor Front-End Júnior",
      period: "(nov/2022 - mai/2023, 7 meses)",
      company: "Univercidade Ceuma",
      description:
        "Desenvolvimento de aplicações web com HTML, CSS, JavaScript, React.js e TypeScript, priorizando responsividade, performance e acessibilidade. Colaboração em projetos com versionamento em Git e melhorias contínuas de código e interfaces. Promoção após estágio devido a desempenho técnico e proatividade.",
    },
    {
      title: "Estágio",
      period: "(abr/2022 - nov/2022, 8 meses)",
      company: "Univercidade Ceuma",
      description:
        "Desenvolvimento de aplicações simples com HTML, CSS e JavaScript, aplicando boas práticas de código, semântica e responsividade. Experiência em trabalho em equipe e versionamento com Git. Participação em treinamentos internos e reuniões para aprendizado prático.",
    },
    {
      title: "Organizador/Instrutor",
      period: "(jan/2024 - atual, 1ano 10 meses)",
      company: "Incode - Tech School",
      description:
        "Ensino prático de desenvolvimento web com foco em tecnologias modernas como HTML, CSS, JavaScript, TypeScript, React, Next.js, Docker, MySQL e GraphQL. Criação de materiais didáticos, atividades práticas e workshops voltados à aprendizagem ativa. Mentoria em projetos reais, revisão de códigos e orientação em boas práticas de programação, design e deploy, preparando os alunos para o mercado de trabalho.",
    },
  ];

  return (
    <section className="bg-navy-deep/50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mt-16 mb-20 text-center text-5xl font-bold">Minha experiência</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group bg-gradient-card rounded-2xl border border-white/10 p-8 backdrop-blur-xl">
              <div className="mb-4 flex items-start gap-2">
                <div className="group-hover:shadow-glow mt-2 h-3 w-3 rounded-full bg-[#3423A6] transition-shadow" />
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold">{exp.title}</h3>
                  <p className="text-md mb-1 text-white/60">{exp.period}</p>
                  <p className="text-md mb-3 font-medium text-white/30">{exp.company}</p>
                </div>
              </div>
              <p className="ml-4 text-white/60">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

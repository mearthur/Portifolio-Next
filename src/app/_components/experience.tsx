export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Front-End Pleno",
      period: "(mai/2022 - atual, 2 anos 11 meses)",
      company: "Tech Solutions",
      description:
        "Implementação de funcionalidades complexas em ReactJS e TypeScript. Desenvolvimento de interfaces responsivas e acessíveis. Integração com APIs REST e GraphQL. Otimização de performance e SEO. Trabalho em equipe ágil com metodologia Scrum. Mentoria de desenvolvedores júnior.",
    },
    {
      title: "Desenvolvedor Front-End Júnior",
      period: "(mai/2021 - mai/2022, 1 ano)",
      company: "Digital Agency",
      description:
        "Desenvolvimento de landing pages e sites institucionais. Criação de componentes reutilizáveis em React. Manutenção e melhorias em projetos legados. Implementação de designs responsivos seguindo padrões de UI/UX. Colaboração com equipe de designers e backend.",
    },
    {
      title: "Estagiário",
      period: "(set/2020 - mai/2021, 9 meses)",
      company: "StartUp Inc",
      description:
        "Auxílio no desenvolvimento de interfaces web. Aprendizado de boas práticas de código e versionamento Git. Participação em code reviews e pair programming. Estudos de JavaScript moderno e frameworks. Desenvolvimento de pequenas features e correção de bugs.",
    },
  ];

  return (
    <section className="bg-navy-deep/50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mt-16 mb-20 text-center text-5xl font-bold">Minha experiência</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-2xl border border-white/10 p-8 backdrop-blur-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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

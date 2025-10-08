import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Ava from "@/public/Ava.png";
import Qrcode from "@/public/qrcode.png";
import Stocly from "@/public/Stockly.png";
import Digital from "@/public/Login 1.png";

export default function Projects() {
  const projects = [
    {
      title: "AVA (CEUMA)",
      description:
        "Este projeto foi desenvolvido em parceria com um colega e teve como foco criar uma AVA interativa e responsiva utilizando HTML, CSS e JavaScript. O design é moderno e acessível, priorizando boa usabilidade e experiência do usuário, com funcionalidades como troca do ano e o semestre. Foi uma excelente oportunidade de aprimorar habilidades técnicas, superar desafios em equipe e entregar um resultado funcional e visualmente atrativo.",
      tags: ["HMTL", "CSS", "JavaScript"],
      image: Ava,
      project: "https://ava.grupoceuma.com.br/",
      link: "",
    },
    {
      title: "QR Generator",
      description:
        "Este projeto foi desenvolvido por mim e teve como objetivo criar um gerador de QR Code interativo utilizando React, TypeScript, a biblioteca QRCode e Tailwind CSS. A aplicação permite a geração de QR Codes personalizados de forma rápida, com um design moderno e responsivo. Esse projeto foi uma excelente oportunidade para aprimorar minhas habilidades em desenvolvimento front-end e explorar a integração de bibliotecas em um ambiente React.",
      tags: ["React", "QR Code", "TypeScript", "Next.js", "TailwindCSS"],
      image: Qrcode,
      project: "https://qrcode-generate-eta.vercel.app/",
      link: "https://github.com/mearthur/qrcode_nexts.js",
    },
    {
      title: "Stockly",
      description:
        "Stock é uma plataforma web desenvolvida para auxiliar empresas e lojas no gerenciamento de estoque de forma simples e eficiente. O sistema permite cadastrar, editar e excluir produtos, controlar entradas e saídas, e visualizar informações em um dashboard moderno e intuitivo. Criado com Next.js, TailwindCSS, Prisma, Zod, React Hook Form, Day.js e shadcn/ui, o projeto se destaca pela organização, fluidez da interface e foco na experiência do usuário, unindo boas práticas de desenvolvimento front-end e back-end.",
      tags: ["Next.js", "TailwindCSS", "Prisma", "Zod", "React Hook Form", "Day.js", "Shadcn/ui"],
      image: Stocly,
      project: "https://stockly-chi.vercel.app/",
      link: "https://github.com/mearthur/Stockly-Next.js/tree/main",
    },
    {
      title: "TropaDigital",
      description:
        "Tropa Digital é uma plataforma web voltada para empresas e lojas, desenvolvida com foco na experiência do usuário ao acessar o sistema. O projeto consiste em um formulário de entrada para a plataforma, garantindo acesso seguro e intuitivo, com validações e interação fluida. Construído com Next.js, TailwindCSS, React Hook Form e shadcn/ui, o desenvolvimento priorizou interface limpa, responsiva e usabilidade, aplicando boas práticas de front-end para criar uma experiência eficiente e moderna para o usuário.",
      tags: ["Next.js", "TailwindCSS", "React Hook Form", "Shadcn/ui"],
      image: Digital,
      project: "https://tropa-digital-phi.vercel.app/",
      link: "https://github.com/mearthur/TropaDigital",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="animate-fade-in mt-16 mb-20 text-center text-5xl font-bold">Projetos</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-card relative flex flex-col justify-center space-y-4 overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid gap-8 p-8 md:grid-cols-2">
                <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/5">
                  <div>
                    <Image alt="Imagem de um site" src={project.image} />
                  </div>
                  <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-t from-[#000411]/60 to-transparent pb-6 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                    <Button variant="glass" size="sm" className="text-white">
                      <a href={project.project} className="flex flex-row items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4 text-white" />
                        Ver projeto
                      </a>
                    </Button>

                    {project.link && (
                      <Button variant="glass" size="sm" className="text-white">
                        <a href={project.link} className="flex flex-row items-center justify-center gap-2">
                          <Github className="h-4 w-4 text-white" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-[#9767E4] bg-[#211E37] px-4 py-1.5 text-xs font-medium text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/mearthur"
            className="flex flex-row items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="liquid" size="lg" className="cursor-pointer gap-2">
              <Github className="h-5 w-5" />
              MAIS PROJETOS
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

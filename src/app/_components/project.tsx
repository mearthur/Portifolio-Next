import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Ava from "@/public/Ava.png";

export default function Projects() {
  const projects = [
    {
      title: "AVA (CEUMA)",
      description:
        "Plataforma de ensino completa com sistema de gestão de cursos e alunos. Interface intuitiva e moderna, desenvolvida com ReactJS e TypeScript. Sistema de autenticação e autorização. Dashboard com métricas e relatórios. Integração com APIs e serviços externos.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      image: Ava,
    },
    {
      title: "QR Generator",
      description:
        "Ferramenta completa para geração de QR Codes personalizados. Interface simples e intuitiva com preview em tempo real. Opções de customização de cores e logos. Download em múltiplos formatos. Compartilhamento rápido via link.",
      tags: ["React", "QR Code", "Canvas API"],
      image: Ava,
    },
    {
      title: "Oxygeni HUB",
      description:
        "Sistema de gestão hospitalar moderno e robusto. Dashboard com métricas e indicadores. Gestão de pacientes e prontuários. Agendamento de consultas e exames. Sistema de alertas e notificações. Interface responsiva e acessível.",
      tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
      image: Ava,
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
                {/* Project Image */}
                <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/5">
                  <div>
                    <Image alt="Imagem de um site" src={project.image} />
                  </div>
                  <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-t from-[#000411]/60 to-transparent pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Button variant="glass" size="sm" className="text-white">
                      <ExternalLink className="h-4 w-4 text-white" />
                      Ver projeto
                    </Button>
                    <Button variant="glass" size="sm" className="text-white">
                      <Github className="h-4 w-4 text-white" />
                      Código
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
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

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Button variant="liquid" size="lg" className="gap-2">
            <Github className="h-5 w-5" />
            MAIS PROJETOS
          </Button>
        </div>
      </div>
    </section>
  );
}

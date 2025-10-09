"user client";

import Figma from "@/public/Figma.png";
import Css from "@/public/css.png";
import Hmtl from "@/public/html.png";
import Git from "@/public/git.png";
import Js from "@/public/js.png";
import Ts from "@/public/ts.png";
import Next from "@/public/next.png";
import Tailwind from "@/public/Tailwind.png";
import Node from "@/public/nodejs.png";
import Python from "@/public/python.png";
import Test from "@/public/test.png";
import React from "@/public/react.png";
import User from "@/public/image 10.png";
import Image from "next/image";

export default function About() {
  const skills = [
    { img: Figma, name: "Figma" },
    { img: Hmtl, name: "HTML" },
    { img: Css, name: "CSS" },
    { img: Next, name: "Next.js" },
    { img: Js, name: "JavaScript" },
    { img: Ts, name: "TypeScript" },
    { img: React, name: "React" },
    { img: Node, name: "Node.js" },
    { img: Tailwind, name: "TailwindCSS" },
    { img: Git, name: "Git" },
    { img: Test, name: "Jest" },
    { img: Python, name: "Python" },
  ];

  return (
    <section
      id="about"
      className="mx-auto flex w-screen flex-col items-center justify-center px-6 py-20 text-white sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mb-6 flex w-[90%] flex-col items-center justify-center gap-6 text-center md:flex-col md:items-center md:justify-center lg:flex-row lg:justify-between lg:text-left">
        <div className="animate-slide-up flex w-full justify-center md:w-2/3 lg:w-1/2">
          <div className="bg-gradient-card shadow-card rounded-3xl backdrop-blur-xl">
            <Image alt="Foto do Arthur" src={User} width={500} height={600} className="rounded-3xl object-cover" />
          </div>
        </div>

        <div className="flex w-[80%] flex-col gap-8 text-center md:text-center lg:w-1/2 lg:text-left">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Sobre mim</h2>

          <p className="text-muted-foreground max-w-3xl text-base leading-relaxed sm:text-lg md:mx-auto lg:mx-0">
            Sou Desenvolvedor Front-End e Designer UI/UX com mais de 3 anos de experiência, especializado em HTML, CSS,
            JavaScript, React, TypeScript, Next.js e Figma. Tenho como propósito unir tecnologia e design para criar
            interfaces que encantam, facilitam e geram impacto real. <br /> <br />
            Ao longo da minha trajetória, venho desenvolvendo soluções digitais que aliam estética, usabilidade e
            performance, sempre com foco na melhor experiência para o usuário. Atualmente, atuo como líder de equipe,
            coordenando projetos, apoiando o crescimento técnico de colegas e garantindo entregas de alta qualidade.
            <br />
            <br />
            Sou movido por desafios e aprendizado contínuo, acreditando que cada projeto é uma nova oportunidade de
            inovar, colaborar e evoluir como profissional.
          </p>
        </div>
      </div>
      <div className="mt-6 flex w-[80%] flex-col items-center gap-4">
        <h3 className="text-muted-foreground text-lg font-semibold tracking-wide">TECNOLOGIAS</h3>
        <div className="flex w-[70%] flex-wrap justify-center gap-3">
          {skills.map((skill, index) => {
            const Img = skill.img;
            return (
              <div
                key={index}
                className="hover:border-primary/50 hover:shadow-glow flex h-[90px] w-[90px] flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:h-[100px] sm:w-[100px]"
              >
                <Image
                  className="text-primary h-8 w-auto transition-transform group-hover:scale-110"
                  src={Img}
                  alt={"Logo de tecnologias de programação"}
                />
                <span className="text-muted-foreground sm:text-md text-center text-sm">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Linkedin from "@/public/icons/linkedin.png";
import Instagram from "@/public/icons/instra.png";
import Email from "@/public/icons/email.png";
import Logo from "@/public/Vector.png";

export default function Footer() {
  const socials = [
    { image: Email, href: "mailto:arthurcode5000@gmail.com" },
    { image: Linkedin, href: "https://www.linkedin.com/in/arthur-araujo-373402194/" },
    { image: Instagram, href: "https://www.instagram.com/artthuraraujo.tech?igsh=NTgxMHZtNXBmMDJ5" },
  ];

  return (
    <footer className="w-full px-8 py-6 text-center">
      <div className="mx-auto mt-0 mb-8 h-1 w-[90%] bg-gradient-to-r from-transparent via-[#3423A6]/80 to-transparent"></div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8">
        <div className="text-4xl font-bold tracking-wider text-white">
          <Image alt="Logo escrito ATR" src={Logo} width={100} height={50} />
        </div>
        <div className="flex items-center gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:border-primary/50 hover:shadow-glow flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <Image
                alt="Ícone social"
                src={social.image}
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
        <div className="h-1 w-[80%] bg-gradient-to-r from-transparent via-[#3423A6]/40 to-transparent"></div>

        <p className="text-sm text-gray-400">Copyright © 2025 Arthur Araujo. Todos os direitos reservados.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium text-[#9767E4] transition-colors hover:text-[#3423A6]"
        >
          Voltar ao topo ↑
        </button>
      </div>
    </footer>
  );
}

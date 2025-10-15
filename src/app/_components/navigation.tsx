"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/public/Vector.png";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full py-6">
      <div className="mx-auto flex max-w-[80%] items-center justify-between rounded-full border-2 border-white/5 bg-black/15 pt-4 pr-6 pb-4 pl-6 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold tracking-wider">
            <Image alt="Logo escrito ATR" src={Logo} width={100} height={50} />
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="./" className="text-lg font-bold text-white transition-colors hover:text-gray-400">
              HOME
            </a>
            <a href="#about" className="text-lg font-bold text-white transition-colors hover:text-gray-400">
              ABOUT
            </a>
            <a href="#projects" className="text-lg font-bold text-white transition-colors hover:text-gray-400">
              PROJECTS
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/13lR-zu-bj_hC12Cyn8-C_8rkjMg7B6CD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Button variant="liquid" size="lg" className="font-medium">
              Meu Currículo
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <button onClick={() => setOpen(!open)} className="text-center text-white focus:outline-none">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-full left-0 z-10 flex h-screen w-full flex-col items-center gap-6 rounded-b-xl bg-black/90 py-6 md:hidden">
          <a href="./" className="text-lg font-medium text-white transition-colors hover:text-gray-400">
            HOME
          </a>
          <a href="#about" className="text-lg font-medium text-white transition-colors hover:text-gray-400">
            ABOUT
          </a>
          <a href="#projects" className="text-lg font-medium text-white transition-colors hover:text-gray-400">
            PROJECTS
          </a>
          <Button variant="liquid" size="lg" className="font-medium" asChild>
            <a
              href="https://drive.google.com/file/d/13lR-zu-bj_hC12Cyn8-C_8rkjMg7B6CD/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              Meu Currículo
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}

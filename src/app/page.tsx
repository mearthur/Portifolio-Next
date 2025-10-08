import Image from "next/image";
import Hero from "./_components/hero";
import Navigation from "./_components/navigation";
import Background from "@/public/Frame 1707482063.png";
import About from "./_components/about";
import Experience from "./_components/experience";
import Projects from "./_components/project";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="flex w-screen flex-col items-center justify-center">
        <Image alt="fundo da imagem" src={Background} fill priority className="absolute inset-0 -z-10 object-cover" />
        <Navigation />
        <div className="flex w-[80%] items-center justify-center text-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

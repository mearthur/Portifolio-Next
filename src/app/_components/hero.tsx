export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center gap-10 text-center md:flex-row md:justify-center md:text-center lg:flex-row lg:justify-center lg:text-center"
    >
      <div className="">
        <p className="sm:text-md mb-4 font-light tracking-wide text-white md:text-2xl lg:text-5xl">OLÁ, SOU</p>
        <h1 className="mb-6 font-bold tracking-tight text-white sm:text-5xl md:sm:text-6xl lg:text-8xl">
          ARTHUR ARAUJO
        </h1>
        <p className="sm:text-md font-light tracking-wide text-white md:text-2xl lg:text-5xl">
          DESENVOLVEDOR FRONT-END/UI DESIGNER
        </p>
      </div>

      {/* Logo: oculta em mobile */}
      {/* <div className="hidden h-[609px] w-[682px] sm:hidden md:hidden md:h-60 md:w-60 lg:block lg:h-80 lg:w-80">
        <Image alt="Logo" src={Logo} className="object-contain" />
      </div> */}
    </section>
  );
}

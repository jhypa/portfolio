import { Code, Sword, Tv, ChevronsDown } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20"
    >
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#b026ff] rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#00f3ff] rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="text-center z-10 reveal active">
        <p className="text-[#00f3ff] tracking-[0.5em] mb-4 text-sm md:text-base"></p>
        <h1
          className="text-5xl md:text-8xl font-['Orbitron'] font-black mb-6 glitch-wrapper"
          data-text="JOEL HYPA"
        >
          JOEL HYPA
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 mb-10 font-bold text-lg">
          <span className="flex items-center gap-2">
            <Code className="w-5 h-5 text-[#b026ff]" /> WEB DEV
          </span>
          <span className="hidden md:block text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Sword className="w-5 h-5 text-[#b026ff]" /> GAMING
          </span>
          <span className="hidden md:block text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Tv className="w-5 h-5 text-[#b026ff]" /> STREAMING
          </span>
        </div>

        <a
          href="#about"
          className="inline-block group relative px-8 py-4 bg-transparent overflow-hidden border border-[#b026ff] text-white font-['Orbitron'] uppercase tracking-wider transition-all hover:bg-[#b026ff]/20"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#b026ff]/50 to-transparent -translate-x-full group-hover:animate-[--animation-shimmer]"></span>
          Enter
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronsDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Home;

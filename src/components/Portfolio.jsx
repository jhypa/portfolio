import { Monitor, ShoppingCart } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="quests" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end gap-4 mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-black text-white">
            PORTFOLIO
          </h2>
          <span className="text-[#b026ff] font-['JetBrains_Mono'] text-sm mb-2 animate-pulse">
            /// COMPLETED PROJECTS
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative rounded-xl overflow-hidden border border-white/10 reveal">
            <div className="h-64 bg-[#4c1d95]/30 flex items-center justify-center group-hover:bg-[#4c1d95]/50 transition-colors">
              <Monitor className="w-16 h-16 text-white/20 group-hover:text-white/80 transition-all scale-100 group-hover:scale-110" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-[#0f0518]/80 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-['Orbitron'] font-bold text-[#00f3ff] mb-1">
                Loto Blanco
              </h3>
              <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                A full-stack web app for my Girlfriend's clothing store,
                featuring full CRUD product/order management, a sleek UI, and an
                iOS/Android app.
              </p>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <span className="px-3 py-1 border border-[#b026ff] rounded-full text-xs text-[#b026ff]">
                  React
                </span>
                <span className="px-3 py-1 border border-[#b026ff] rounded-full text-xs text-[#b026ff]">
                  Node.js
                </span>
                <span className="px-3 py-1 border border-[#b026ff] rounded-full text-xs text-[#b026ff]">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-white/10 reveal">
            <div className="h-64 bg-[#4c1d95]/30 flex items-center justify-center group-hover:bg-[#4c1d95]/50 transition-colors">
              <ShoppingCart className="w-16 h-16 text-white/20 group-hover:text-white/80 transition-all scale-100 group-hover:scale-110" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-[#0f0518]/80 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-['Orbitron'] font-bold text-[#00f3ff] mb-1">
                BUILDING...
              </h3>
              <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                I'm currently working on my next project, I haven't finished,
                but feel free to check my GitHub for ongoing work!
              </p>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <span className="px-3 py-1 border border-[#b026ff] rounded-full text-xs text-[#b026ff]">
                  JS
                </span>
                <span className="px-3 py-1 border border-[#b026ff] rounded-full text-xs text-[#b026ff]">
                  PostgresSQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import { useEffect } from "react";
import { Cpu, Gamepad2, Clapperboard, Terminal } from "lucide-react";

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          if (entry.target.id === "about" || entry.target.closest("#about")) {
            document.querySelectorAll(".skill-fill").forEach((bar) => {
              if (bar instanceof HTMLElement) {
                const width = bar.getAttribute("data-width");
                if (width) {
                  bar.style.width = width;
                }
              }
            });
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group reveal">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#b026ff] to-[#00f3ff] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-panel p-8 rounded-lg border border-white/10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-['Orbitron'] font-bold">
                      ABOUT ME
                    </h3>
                    <p className="text-xs text-[#00f3ff] mt-1">ID: HYPA-DEV</p>
                  </div>
                  <Cpu className="w-8 h-8 text-[#b026ff] animate-[--animation-spin-slow]" />
                </div>
                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  <p>
                    <span className="text-[#b026ff]">&gt;</span> Initializing
                    biography protocol...
                  </p>
                  <p>
                    I'm a creative developer obsessed with building immersive
                    digital experiences. When I'm not debugging code, I'm likely
                    climbing ranked ladders in FPS games or watching anime with
                    my girlfriend.
                  </p>
                  <p>
                    <span className="text-[#b026ff]">&gt;</span> Current
                    Objective: Full-stack/game developer and gamer.
                  </p>
                </div>

                <div className="absolute -right-4 -bottom-4 opacity-10 text-6xl font-black text-white writing-vertical-rl select-none pointer-events-none">
                  開発者
                </div>
              </div>
            </div>

            <div className="space-y-6 reveal">
              <h2 className="text-3xl font-['Orbitron'] font-bold mb-8 border-l-4 border-[#b026ff] pl-4">
                SKILL TREES
              </h2>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-[#00f3ff]">FRONTEND SORCERY</span>
                  <span>LVL 99</span>
                </div>
                <div className="h-3 bg-[#0f0518] border border-white/20 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4c1d95] to-[#b026ff] skill-fill"
                    data-width="95%"
                  ></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-30"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-[#00f3ff]">BACKEND LOGIC</span>
                  <span>LVL 85</span>
                </div>
                <div className="h-3 bg-[#0f0518] border border-white/20 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4c1d95] to-[#b026ff] skill-fill"
                    data-width="85%"
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-[#00f3ff]">ANIME LORE</span>
                  <span>LVL 70</span>
                </div>
                <div className="h-3 bg-[#0f0518] border border-white/20 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4c1d95] to-[#b026ff] skill-fill"
                    data-width="70%"
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-[#00f3ff]">FPS AIM</span>
                  <span>MAXED</span>
                </div>
                <div className="h-3 bg-[#0f0518] border border-white/20 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4c1d95] to-[#b026ff] skill-fill"
                    data-width="100%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tilt-card group cursor-pointer reveal">
              <div className="glass-panel p-8 rounded-xl h-full transform border border-[#b026ff]/50">
                <div className="tilt-inner">
                  <div className="bg-[#b026ff]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-['Orbitron'] font-bold mb-3">
                    Competitive Gaming
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Climbing ranks in Deadlock and Counter-Strike 2.
                    Understanding game mechanics improves my logic in state
                    management.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      FPS
                    </span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      RPG
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://www.twitch.tv/jhypa"
              target="_blank"
              rel="noopener noreferrer"
              className="tilt-card group cursor-pointer reveal transition-delay-100"
            >
              <div className="glass-panel p-8 rounded-xl h-full transform border border-[#00f3ff]/50">
                <div className="tilt-inner">
                  <div className="bg-[#00f3ff]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clapperboard className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-['Orbitron'] font-bold mb-3">
                    Streaming
                  </h3>
                  <p className="text-gray-400 text-sm">
                    When I have the free time, I like to spend my time streaming
                    gaming sessions on Twitch. Click to check out my channel!
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      Deadlock
                    </span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      Counter-Strike 2
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <div className="tilt-card group cursor-pointer reveal transition-delay-200">
              <div className="glass-panel p-8 rounded-xl h-full transform border border-[#b026ff]/50">
                <div className="tilt-inner">
                  <div className="bg-[#b026ff]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Terminal className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-['Orbitron'] font-bold mb-3">
                    Full Stack Dev
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Currently building performant web apps with React, Node, and
                    Tailwind. Obsessed with clean code and smooth animations.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      JS
                    </span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      Node.JS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

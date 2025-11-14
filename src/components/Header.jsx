import { Menu } from "lucide-react";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-['Orbitron'] font-bold text-white tracking-wider group cursor-pointer">
          <span className="text-[#b026ff]">&lt;</span>HYPA
          <span className="text-[#b026ff]">/&gt;</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest">
          <a
            href="#home"
            className="hover:text-[#b026ff] transition-colors duration-300"
          >
            HOME
          </a>
          <a
            href="#stats"
            className="hover:text-[#b026ff] transition-colors duration-300"
          >
            ABOUT
          </a>
          <a
            href="#quests"
            className="hover:text-[#b026ff] transition-colors duration-300"
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="hover:text-[#b026ff] transition-colors duration-300"
          >
            CONTACT
          </a>
        </div>
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Header;

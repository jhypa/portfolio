import { Mail, MessageSquare } from "lucide-react";
import { SiGithub, SiX, SiLinkedin, SiDiscord } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0518] to-[#1a0b2e] -z-10"></div>

      <div className="max-w-3xl mx-auto text-center reveal">
        <MessageSquare className="w-12 h-12 text-[#b026ff] mx-auto mb-6 animate-[--animation-float]" />
        <h2 className="text-4xl font-['Orbitron'] font-bold mb-6">
          CONTACT ME
        </h2>
        <p className="text-gray-400 mb-10">
          Whether you have business to discuss, or just want to chat about the
          latest anime episode, my inbox is always open.
        </p>

        <a
          href="mailto:jhypa@gmail.com"
          className="inline-flex items-center gap-3 bg-white text-[#0f0518] px-8 py-4 rounded font-bold tracking-wide hover:bg-[#00f3ff] hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all transform hover:-translate-y-1"
        >
          <Mail />
          SEND EMAIL
        </a>

        <div className="mt-16 flex justify-center gap-8">
          <a
            href="https://github.com/jhypa"
            className="text-gray-400 hover:text-[#b026ff] transition-colors"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/jhypa"
            className="text-gray-400 hover:text-[#b026ff] transition-colors"
          >
            <SiX className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/joelwaldie"
            className="text-gray-400 hover:text-[#b026ff] transition-colors"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://discord.com/user/1258845300228096112"
            className="text-gray-400 hover:text-[#b026ff] transition-colors"
          >
            <SiDiscord className="w-6 h-6" />
          </a>
        </div>

        <footer className="mt-20 text-xs text-gray-600 font-['JetBrains_Mono']">
          <p>© 2025 JOEL HYPA. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

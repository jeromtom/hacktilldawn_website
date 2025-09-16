import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import FooterBg from "../assets/image.png";

export default function Footer() {
  return (
    <footer
      className="relative text-slate-300 py-16 mt-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Enhanced dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90"></div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-950/40 to-slate-900/60 backdrop-blur-sm"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Left - Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              HackTillDawn
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 rounded-full"></div>
            <p className="text-slate-400 text-sm leading-relaxed">
              An 18-hour mini hackathon organized as part of{" "}
              <span className="text-cyan-400 font-semibold">Takshak 2025</span>.  
              <br />
              Code. Innovate. Sprint to the finish!
            </p>
          </motion.div>

          {/* Middle - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Contact Us
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 rounded-full"></div>
            <div className="space-y-3">
              <a
                href="https://wa.me/919037820802"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-green-400 
                           transition-all duration-300 group p-2 rounded-lg 
                           hover:bg-slate-800/30 border border-transparent 
                           hover:border-green-400/30"
              >
                <FaWhatsapp 
                  size={18} 
                  className="group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" 
                />
                <span className="text-sm font-medium">Shawn Cheriyan Sony</span>
              </a>
              <a
                href="https://wa.me/919446946683"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-green-400 
                           transition-all duration-300 group p-2 rounded-lg 
                           hover:bg-slate-800/30 border border-transparent 
                           hover:border-green-400/30"
              >
                <FaWhatsapp 
                  size={18} 
                  className="group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" 
                />
                <span className="text-sm font-medium">Aharon Johnson</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Quick Links
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 rounded-full"></div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-300 
                             text-sm font-medium block p-2 rounded-lg hover:bg-slate-800/30 
                             border border-transparent hover:border-cyan-400/30
                             hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-300 
                             text-sm font-medium block p-2 rounded-lg hover:bg-slate-800/30 
                             border border-transparent hover:border-cyan-400/30
                             hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#problem-statement" 
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-300 
                             text-sm font-medium block p-2 rounded-lg hover:bg-slate-800/30 
                             border border-transparent hover:border-cyan-400/30
                             hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
                >
                  Problem Statement
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-6 text-center"
        >
          <div className="text-slate-400 text-sm leading-relaxed">
            <p className="mb-2">
              © 2025 <span className="text-cyan-400 font-semibold">Takshak</span>. All Rights Reserved.
            </p>
            <p>
              Developed with by <span className="text-cyan-400 font-semibold">Team HackTillDawn</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
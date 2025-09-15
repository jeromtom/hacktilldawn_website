import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import newLogo from "../assets/htd_logo[1].png"; // Update this path with your uploaded image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Google Form Link
  const googleFormLink = "https://forms.gle/AE3vg9kJQVBPoH1v7";

  // Menu Items
  const menuItems = ["Home", "About", "Problem Statement"];

  return (
    <>
      {/* Orbitron Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl 
                   bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95 
                   shadow-2xl shadow-slate-900/50 border-b border-slate-700/40"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-blue-500/5 to-white/3 pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-20">
          {/* Logo - Updated with new image */}
          <div className="flex items-center">
            <img
              src={newLogo}
              alt="Logo"
              className="h-20 md:h-24 lg:h-28 object-contain"
            />
          </div>

          {/* Desktop Menu - Simplified and fixed */}
          <ul className="hidden lg:flex space-x-8 items-center">
            {menuItems.map((item, i) => (
              <motion.li 
                key={i} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-slate-300 text-base font-medium uppercase tracking-wide 
                           transition-all duration-300 hover:text-cyan-300 
                           relative px-3 py-2 block"
                >
                  {item}
                  {/* Clean animated underline */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 
                                 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
            
            {/* Register Button - Simplified */}
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base font-semibold uppercase tracking-wide
                         bg-gradient-to-r from-cyan-600 to-blue-600 
                         px-6 py-3 rounded-lg 
                         transition-all duration-300
                         hover:from-cyan-500 hover:to-blue-500 
                         hover:shadow-lg hover:shadow-cyan-500/25 
                         hover:scale-105"
              >
                Register
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button - Simplified */}
          <motion.div
            className="lg:hidden relative"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 text-2xl cursor-pointer p-3 rounded-lg
                       bg-slate-800/60 border border-slate-700/50
                       hover:text-cyan-300 hover:bg-slate-700/70 
                       transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Mobile Dropdown - Simplified */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl 
                   border-t border-slate-700/40 shadow-xl"
        >
          <div className="px-6 pb-6 pt-4">
            <ul className="flex flex-col space-y-1">
              {menuItems.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -30 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-300 text-lg font-medium uppercase tracking-wide 
                             hover:text-cyan-300 transition-all duration-300 block
                             px-4 py-3 rounded-lg hover:bg-slate-800/50
                             border-l-2 border-transparent hover:border-cyan-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              
              {/* Register Button in Mobile - Simplified */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="pt-3"
              >
                <a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-white text-lg font-semibold uppercase tracking-wide
                           bg-gradient-to-r from-cyan-600 to-blue-600 
                           px-6 py-4 rounded-lg 
                           transition-all duration-300
                           hover:from-cyan-500 hover:to-blue-500 
                           hover:shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => setIsOpen(false)}
                >
                  Register Now
                </a>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
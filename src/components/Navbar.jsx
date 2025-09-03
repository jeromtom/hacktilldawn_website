import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import takshakLogo from "../assets/takshak-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  
  const googleFormLink = "https://forms.gle/AE3vg9kJQVBPoH1v7"; // replace with actual


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
        transition={{ duration: 0.6 }}
        className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-gradient-to-r from-black/90 via-black/80 to-black/90 shadow-lg border-b border-red-500/40"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-7 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={takshakLogo}
              alt="Takshak Logo"
              className="h-14 md:h-17 object-contain drop-shadow-lg"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-red-400 text-base md:text-lg font-medium uppercase tracking-wider transition-all duration-300 group-hover:text-white"
                >
                  {item}
                </a>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            <li>
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 text-base md:text-lg font-semibold uppercase border-2 border-red-500 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-red-500 hover:text-black hover:shadow-lg hover:scale-105"
              >
                Register Now
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-red-400 text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 border-t border-red-500/40 backdrop-blur-md px-6 pb-6 pt-4 shadow-xl"
          >
            <ul className="flex flex-col space-y-5">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-red-400 text-lg font-medium uppercase tracking-wider hover:text-white transition-all duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 text-lg font-semibold uppercase border border-red-500 px-4 py-2 rounded-lg text-center transition-all duration-300 hover:bg-red-500 hover:text-black hover:shadow-lg hover:scale-105 block"
                  onClick={() => setIsOpen(false)}
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}

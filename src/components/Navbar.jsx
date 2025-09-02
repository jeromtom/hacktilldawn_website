import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Problem Statements"];
  const googleFormLink = "YOUR_GOOGLE_FORM_LINK"; // replace with actual

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 bg-black shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">Takshak 2025</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-red-400 text-lg md:text-xl font-bold hover:text-white transition"
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
              className="text-red-400 text-lg md:text-xl font-bold hover:text-white transition"
            >
              Register Now
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-red-400 text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-red-400 text-lg font-bold hover:text-white transition block"
                  onClick={() => setIsOpen(false)} // close on click
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
                className="text-red-400 text-lg font-bold hover:text-white transition block"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

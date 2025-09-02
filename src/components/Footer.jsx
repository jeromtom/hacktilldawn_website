import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import FooterBg from "../assets/image.png"; // Make sure path is correct

export default function Footer() {
  return (
    <footer
      className="relative text-gray-300 py-12 mt-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-red bg-opacity-50"></div>

      {/* Content above overlay */}
     <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-4 px-6">
  {/* Contact Info */}
  <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>
  <a
    href="https://wa.me/919037820802" // WhatsApp link with country code
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
  >
    <FaWhatsapp size={20} />
    <span>Shawn Cheriyan Sony </span>
  </a>
  <a
    href="https://wa.me/919446946683" // WhatsApp link with country code
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
  >
    <FaWhatsapp size={20} />
    <span>Aharon Johnson </span>
  </a>
</div>


      <p className="relative text-center text-gray-300 mt-10">
        © 2025 Takshak. All Rights Reserved. <br />
        Developed by Team Hack Sprint
      </p>
    </footer>
  );
}

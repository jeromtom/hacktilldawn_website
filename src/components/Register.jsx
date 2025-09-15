import { motion } from "framer-motion";

export default function Register() {
  return (
    <section
      id="register"
      className="py-20 px-6 text-center bg-black relative"
    >
      {/* Background gradient for style */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/40 to-black opacity-80"></div>

      <div className="relative z-10">
        <motion.a
          href="https://forms.gle/AE3vg9kJQVBPoH1v7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 text-2xl md:text-3xl font-bold text-white rounded-xl 
            bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 
            shadow-lg hover:shadow-blue-700/50 transition-all duration-300"
        >
          Register Now
        </motion.a>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import heroImg from "../assets/hero.png"; // hacker image
import bgImg from "../assets/hero2.png";   // red lines image

export default function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-28 md:pt-0 max-w-7xl mx-auto"
      >
        {/* Text Section */}
        <div className="flex-1 z-10 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            HACK SPRINT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Join the 18-hour mini hackathon on{" "}
            <span className="text-red-400 font-semibold">September 25–26</span>
          </motion.p>

          {/* Register Now Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://forms.gle/fsNv9g1kub11mt3Y7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-lg md:text-xl font-semibold rounded-lg 
            bg-red-600 text-white transition-colors duration-300 
            hover:bg-red-500"
          >
            Register Now
          </motion.a>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 mt-10 md:mt-0 md:ml-10 relative z-10"
        >
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import heroImg from "../assets/hero.png"; // hacker image
import bgImg from "../assets/hero2.png";   // red lines image

export default function Hero() {
  return (
    <div className="relative bg-black text-white">
      {/* Background image (red lines) fixed on the left side */}
      <div
        className="fixed top-0 left-0 w-1/3 h-full bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>


      {/* Hero Section */}
      <section
  id="home"
  className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-0"
>
  {/* Text Section */}
  <div className="flex-1 z-10 text-center md:text-left">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-bold mb-4 mt-10"
    >
      HACK SPRINT
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-lg max-w-xl mb-6"
    >
      Join the 18-hour mini hackathon at September 25,26
    </motion.p>

    {/* Register Now Button */}
    <a
      href="YOUR_GOOGLE_FORM_LINK"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-red-500 text-white text-2xl rounded-lg hover:bg-red-600 transition"
    >
      Register Now
    </a>
  </div>

  {/* Hero Image */}
  <div className="flex-1 mt-6 md:mt-0 md:ml-10">
    <img
      src={heroImg}
      alt="Hero"
      className="w-full h-auto object-cover rounded-lg shadow-lg md:max-h-[600px]"
    />
  </div>
</section>

    </div>
  );
}

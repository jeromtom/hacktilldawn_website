import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-transparent text-center"
    >
      {/* 🔹 Title with a clean gradient */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "Orbitron, sans-serif" }}
        className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        About HackTillDawn
      </motion.h2>

      {/* ✨ Paragraph with sharper color accents */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-300"
      >
        This is a{" "}
        <span className="text-cyan-400 font-semibold">
          mini hackathon event
        </span>{" "}
        organized as part of{" "}
        <span className="text-purple-400 font-semibold">
          Takshak, the annual tech fest
        </span>{" "}
        of Mar Athanasius College of Engineering, Kothamangalam. Participants
        will get an opportunity to brainstorm, code, and innovate within a short,
        intense{" "}
        <span className="text-pink-400 font-semibold">18-hour session</span>. The
        event encourages creativity, teamwork, and problem-solving, giving
        everyone a chance to showcase their technical skills and bring their
        ideas to life.
      </motion.p>
    </section>
  );
}

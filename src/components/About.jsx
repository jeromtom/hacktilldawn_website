import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-transparent text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4 text-white"
      >
        About Hack Sprint
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        This is a mini hackathon event organized as part of Takshak, the annual tech fest of Mar Athanasius College of Engineering, Kothamangalam. Participants will get an opportunity to brainstorm, code, and innovate within a short, intense 18-hour session. The event encourages creativity, teamwork, and problem-solving, giving everyone a chance to showcase their technical skills and bring their ideas to life
      </motion.p>
    </section>
  );
}

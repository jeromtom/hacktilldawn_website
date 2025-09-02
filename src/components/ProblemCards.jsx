import { useState } from "react";
import { motion } from "framer-motion";

export default function ProblemCards() {
  // Hardware problems
  const problems1 = [
    {
      title: "Sustainability & Environment",
      details:
        "Rural communities in India face unreliable electricity and limited access to clean air and water. Monitoring systems that track pollution, water quality, or energy use are often expensive and centralized. How can low-cost, sensor-based hardware systems be designed to continuously monitor environmental parameters (air, water, or energy usage) and provide actionable insights for communities?",
    },
    {
      title: "Health & Assistive Technology",
      details:
        "Elderly and differently-abled individuals are at higher risk of accidents such as falls, cardiac emergencies, or exposure to unsafe conditions at home. Current monitoring devices are often bulky, expensive, or not user-friendly. How can affordable, lightweight, and reliable assistive hardware solutions be built to detect emergencies in real time and alert caregivers or nearby people?",
    },
    {
      title: "Urban Safety & Mobility",
      details:
        "Road accidents and unsafe driving behaviors remain a major cause of deaths and injuries, especially in developing regions. Pedestrians, cyclists, and drivers are equally at risk due to poor visibility, lack of awareness, and delayed emergency response. How can affordable, sensor-based hardware systems be developed to improve road safety — for example, by detecting drowsy driving, monitoring traffic hazards, or providing early alerts to pedestrians and vehicles — in a way that works even in low-infrastructure settings?",
    },
  ];

  // Software problems
  const problems2 = [
    {
      title: "AI for Healthcare",
      details:
        "AI has the potential to revolutionize healthcare by providing faster, more accurate diagnoses and personalized treatment plans. However, medical datasets are often fragmented, incomplete, or biased, and deploying AI in real-world clinical settings poses challenges in reliability, privacy, and interpretability. How can machine learning models be designed to analyze medical data safely and effectively, predict diseases early, assist doctors in decision-making, and improve patient outcomes while maintaining data privacy and ethical standards?",
    },
    {
      title: "Blockchain for Security",
      details:
        "Digital systems today are increasingly vulnerable to hacks, fraud, and data breaches. Blockchain offers decentralized, tamper-proof mechanisms to secure transactions, validate data, and protect privacy. Yet, implementing blockchain solutions in real-world applications is complex, energy-intensive, and sometimes slow. How can blockchain technology be used to create secure, scalable, and energy-efficient digital systems for financial transactions, identity verification, or sensitive data management while remaining user-friendly and practical?",
    },
    {
      title: "IoT for Smart Cities",
      details:
        "Smart cities rely on real-time data from connected devices to optimize traffic flow, energy consumption, public safety, and resource management. However, these systems often face challenges such as data overload, network congestion, and security vulnerabilities. How can software solutions leverage IoT data to improve urban planning, public services, and citizen safety while ensuring privacy, scalability, and seamless integration with existing infrastructure?",
    },
  ];

  // Flip state for only one card at a time across both tracks
  const [flippedIndex, setFlippedIndex] = useState({ track: null, index: null });

  // Card component
  const Card = ({ problem, flipped, onClick }) => (
    <div className="w-full h-64 perspective cursor-pointer" onClick={onClick}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-red-600 to-black text-white border border-white p-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-lg font-semibold">{problem.title}</span>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-lg flex items-center justify-center bg-[radial-gradient(circle,black_80%,red_100%)] text-white p-4"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-center text-sm">{problem.details}</span>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section id="problems" className="py-20 px-6 bg-black text-center">
      {/* Hardware Track */}
      <h2 className="text-3xl text-white font-bold mb-10">Hardware Track</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems1.map((p, i) => (
          <Card
            key={i}
            problem={p}
            flipped={flippedIndex.track === "hardware" && flippedIndex.index === i}
            onClick={() =>
              setFlippedIndex(
                flippedIndex.track === "hardware" && flippedIndex.index === i
                  ? { track: null, index: null }
                  : { track: "hardware", index: i }
              )
            }
          />
        ))}
      </div>

      {/* Software Track */}
      <h2 className="text-3xl text-white font-bold mt-16 mb-10">Software Track</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems2.map((p, i) => (
          <Card
            key={i}
            problem={p}
            flipped={flippedIndex.track === "software" && flippedIndex.index === i}
            onClick={() =>
              setFlippedIndex(
                flippedIndex.track === "software" && flippedIndex.index === i
                  ? { track: null, index: null }
                  : { track: "software", index: i }
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

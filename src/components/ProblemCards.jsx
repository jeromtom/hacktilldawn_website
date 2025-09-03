import { useState } from "react";
import { motion } from "framer-motion";

export default function ProblemCards() {
  // Hardware problems
  const problems1 = [
    {
      title: "Sustainability & Environment",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L8.5 8.5L2 12l6.5 3.5L12 22l3.5-6.5L22 12l-6.5-3.5L12 2zm0 3.5L14.5 10L19 12l-4.5 2L12 18.5L9.5 14L5 12l4.5-2L12 5.5z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      details:
        "Rural communities in India face unreliable electricity and limited access to clean air and water. Monitoring systems that track pollution, water quality, or energy use are often expensive and centralized. How can low-cost, sensor-based hardware systems be designed to continuously monitor environmental parameters (air, water, or energy usage) and provide actionable insights for communities?",
    },
    {
      title: "Health & Assistive Technology",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 9.5V12L21 14.5V12.5L19 11.8V10.2L21 9ZM3 9V7L9 9.5V12L3 14.5V12.5L5 11.8V10.2L3 9ZM12 7.5C13.1 7.5 14 8.4 14 9.5S13.1 11.5 12 11.5 10 10.6 10 9.5 10.9 7.5 12 7.5ZM12 13C13.1 13 14 13.9 14 15S13.1 17 12 17 10 16.1 10 15 10.9 13 12 13ZM12 18.5C13.1 18.5 14 19.4 14 20.5S13.1 22.5 12 22.5 10 21.6 10 20.5 10.9 18.5 12 18.5Z"/>
        </svg>
      ),
      details:
        "Elderly and differently-abled individuals are at higher risk of accidents such as falls, cardiac emergencies, or exposure to unsafe conditions at home. Current monitoring devices are often bulky, expensive, or not user-friendly. How can affordable, lightweight, and reliable assistive hardware solutions be built to detect emergencies in real time and alert caregivers or nearby people?",
    },
    {
      title: "Urban Safety & Mobility",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
        </svg>
      ),
      details:
        "Road accidents and unsafe driving behaviors remain a major cause of deaths and injuries, especially in developing regions. Pedestrians, cyclists, and drivers are equally at risk due to poor visibility, lack of awareness, and delayed emergency response. How can affordable, sensor-based hardware systems be developed to improve road safety — for example, by detecting drowsy driving, monitoring traffic hazards, or providing early alerts to pedestrians and vehicles — in a way that works even in low-infrastructure settings?",
    },
  ];

  // Software problems
  const problems2 = [
    {
      title: "AI for Healthcare",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10S9.79 14 12 14 16 12.21 16 10 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10S10.9 8 12 8 14 8.9 14 10 13.1 12 12 12Z"/>
          <path d="M7 18C7.55 18 8 17.55 8 17S7.55 16 7 16 6 16.45 6 17 6.45 18 7 18Z"/>
          <path d="M17 18C17.55 18 18 17.55 18 17S17.55 16 17 16 16 16.45 16 17 16.45 18 17 18Z"/>
        </svg>
      ),
      details:
        "AI has the potential to revolutionize healthcare by providing faster, more accurate diagnoses and personalized treatment plans. However, medical datasets are often fragmented, incomplete, or biased, and deploying AI in real-world clinical settings poses challenges in reliability, privacy, and interpretability. How can machine learning models be designed to analyze medical data safely and effectively, predict diseases early, assist doctors in decision-making, and improve patient outcomes while maintaining data privacy and ethical standards?",
    },
    {
      title: "Blockchain for Security",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11.5C15.4 11.5 16 12.1 16 12.7V16.2C16 16.7 15.6 17.2 15.1 17.2H8.9C8.4 17.2 8 16.8 8 16.3V12.8C8 12.3 8.4 11.9 8.9 11.9V10.1C8.9 8.6 10.4 7 12 7ZM12 8.2C11 8.2 10.2 9 10.2 10V11.5H13.8V10C13.8 9 13 8.2 12 8.2Z"/>
        </svg>
      ),
      details:
        "Digital systems today are increasingly vulnerable to hacks, fraud, and data breaches. Blockchain offers decentralized, tamper-proof mechanisms to secure transactions, validate data, and protect privacy. Yet, implementing blockchain solutions in real-world applications is complex, energy-intensive, and sometimes slow. How can blockchain technology be used to create secure, scalable, and energy-efficient digital systems for financial transactions, identity verification, or sensitive data management while remaining user-friendly and practical?",
    },
    {
      title: "IoT for Smart Cities",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V10L12 15L2 10V17Z"/>
          <path d="M8 13L12 15L16 13V10L12 12L8 10V13Z"/>
        </svg>
      ),
      details:
        "Smart cities rely on real-time data from connected devices to optimize traffic flow, energy consumption, public safety, and resource management. However, these systems often face challenges such as data overload, network congestion, and security vulnerabilities. How can software solutions leverage IoT data to improve urban planning, public services, and citizen safety while ensuring privacy, scalability, and seamless integration with existing infrastructure?",
    },
  ];

  // Flip state for only one card at a time across both tracks
  const [flippedIndex, setFlippedIndex] = useState({ track: null, index: null });

  // Card component with flip mechanism
  const Card = ({ problem, flipped, onClick }) => (
    <div className="w-full h-72 cursor-pointer" style={{ perspective: "1000px" }} onClick={onClick}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-red-500 via-red-600 to-black text-white border-2 border-red-400/30 p-6 shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-400/20 to-red-600/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-red-300/30">
              {problem.icon}
            </div>
            <h3 className="text-xl font-bold text-white leading-tight tracking-wide">
              {problem.title}
            </h3>
            <div className="mt-4 text-red-200 text-sm font-medium">Click to read details</div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-red-800 text-white p-6 shadow-2xl border-2 border-red-500/40"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center h-full flex flex-col justify-center">
            <h4 className="text-lg font-bold mb-4 text-red-200 border-b border-red-500/30 pb-2">
              {problem.title}
            </h4>
            <div className="text-sm text-gray-100 leading-relaxed overflow-y-auto max-h-48 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
              {problem.details}
            </div>
            <div className="mt-4 text-red-300 text-xs font-medium">Click to flip back</div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section id="problem-statements" className="py-20 px-6 bg-black text-center min-h-screen">
      {/* Hardware Track */}
      <div className="mb-16">
        <h2 className="text-4xl text-white font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          Hardware Track
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      </div>

      {/* Software Track */}
      <div>
        <h2 className="text-4xl text-white font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          Software Track
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thumb-red-500::-webkit-scrollbar-thumb {
          background-color: rgb(239 68 68);
          border-radius: 2px;
        }
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
}

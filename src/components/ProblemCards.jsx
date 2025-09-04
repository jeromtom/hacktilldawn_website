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

  // Software problems with minimalistic images
  const problems2 = [
    {
      title: "FinTech for Financial Inclusion & Security",
      image: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 8h20"/>
          <path d="M6 12h4"/>
          <path d="M6 16h8"/>
          <circle cx="18" cy="14" r="2"/>
        </svg>
      ),
      details:
        "Many individuals and small businesses lack access to secure digital transactions, reliable savings tools, and financial literacy. Existing solutions are either too complex or not trusted. How can user-friendly software platforms be developed to improve personal finance management, encourage savings, detect fraud, and promote secure, inclusive banking for people with minimal digital experience?",
    },
    {
      title: "AgriTech for Farmers & Rural Communities",
      image: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 2v20"/>
          <path d="M8 6c0 4 4 6 4 6s4-2 4-6"/>
          <path d="M6 10c0 3 2 5 6 5s6-2 6-5"/>
          <path d="M4 14c0 2 2 4 8 4s8-2 8-4"/>
          <circle cx="12" cy="2" r="1"/>
          <path d="M2 22h20"/>
        </svg>
      ),
      details:
        "Farmers often face unpredictable weather, poor market access, and limited real-time insights for decision-making. How can software systems be built to support farmers with crop planning, localized weather forecasts, digital marketplaces, financial literacy, and peer knowledge sharing—empowering them to boost productivity and resilience?",
    },
    {
      title: "Accessibility & Digital Inclusion",
      image: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
          <path d="M8 14h8"/>
          <circle cx="12" cy="8" r="1"/>
          <path d="M9 16l6-6"/>
          <path d="M15 16l-6-6"/>
        </svg>
      ),
      details:
        "People with disabilities or low digital literacy are often excluded from mainstream apps and services due to poor accessibility and complex interfaces. How can inclusive, lightweight software solutions be designed that adapt to diverse needs—simplifying navigation, enabling voice/gesture-based control, and ensuring meaningful digital participation for all?",
    },
  ];

  // Flip state for only one card at a time across both tracks
  const [flippedIndex, setFlippedIndex] = useState({ track: null, index: null });

  // Card component with flip mechanism - Hardware version
  const HardwareCard = ({ problem, flipped, onClick }) => (
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

  // Card component with flip mechanism - Software version with images
  const SoftwareCard = ({ problem, flipped, onClick }) => (
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
            <div className="mx-auto mb-4 flex items-center justify-center">
              {problem.image}
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
      <div className="mb-16" >
        <h2 style={{ fontFamily: "Orbitron, sans-serif" }} className="text-4xl text-white font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          Hardware Track
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems1.map((p, i) => (
            <HardwareCard
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
        <h2 style={{ fontFamily: "Orbitron, sans-serif" }} className="text-4xl text-white font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          Software Track
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems2.map((p, i) => (
            <SoftwareCard
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
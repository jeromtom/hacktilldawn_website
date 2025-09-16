import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2025-09-26T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="py-20 relative text-center overflow-hidden bg-gradient-to-b from-black via-[#0a0f2c] to-[#001a33]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "Orbitron, sans-serif" }}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]"
      >
        Event Starts In
      </motion.h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {timeUnits.map((unit, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="w-28 h-28 flex flex-col items-center justify-center rounded-2xl 
                       bg-gradient-to-br from-[#0a0f2c] via-[#1e3a8a66] to-[#2563eb33] 
                       border border-blue-500/40 shadow-lg shadow-blue-500/30"
          >
            <span className="text-3xl font-extrabold text-blue-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
              {unit.value}
            </span>
            <span className="text-sm text-cyan-300 font-medium uppercase tracking-wide">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Cosmic glow behind countdown */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}


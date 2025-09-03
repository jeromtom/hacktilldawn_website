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
    <section id="countdown" className="py-20 bg-black text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
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
            className="w-28 h-28 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-black via-red-900/40 to-red-800/40 border border-red-500/50 shadow-lg shadow-red-600/30"
          >
            <span className="text-3xl font-extrabold text-white drop-shadow-[0_0_6px_rgba(255,0,0,0.8)]">
              {unit.value}
            </span>
            <span className="text-sm text-red-300 font-medium uppercase tracking-wide">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Glow effect behind countdown */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

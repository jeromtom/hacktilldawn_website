import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2025-09-26T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-20 bg-black-400 text-center">
      <h2 className="text-3xl text-white font-bold mb-6">Event Starts In</h2>
      <div className="flex justify-center space-x-6 text-xl font-semibold text-white">
        <div>{timeLeft.days}d</div>
        <div>{timeLeft.hours}h</div>
        <div>{timeLeft.minutes}m</div>
        <div>{timeLeft.seconds}s</div>
      </div>
    </section>
  );
}

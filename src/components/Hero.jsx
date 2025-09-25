import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentCode, setCurrentCode] = useState(0);
  
  const codeSnippets = [
    "const hackathon = () => {",
    "  return 'innovation';",
    "}",
    "",
    "while(coding) {",
    "  dream.push(reality);",
    "}"
  ];

  const techStack = [
    "React", "Node.js", "Python", "MongoDB", "AI/ML", "Blockchain", 
    "Flutter", "Docker", "AWS", "GraphQL", "Next.js", "TypeScript"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'grid-move 20s linear infinite'
             }}>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 md:pt-20 max-w-7xl mx-auto"
      >
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1
                style={{ fontFamily: "Orbitron, sans-serif" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 
                           bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 
                           text-transparent bg-clip-text leading-tight"
              >
                HackTillDawn
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto lg:mx-0 rounded-full"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed"
            >
              Join the ultimate{" "}
              <span className="text-cyan-400 font-semibold">18-hour mini hackathon</span>{" "}
              and push the boundaries of innovation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-300 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-base md:text-lg">
                  <span className="text-cyan-400 font-semibold">September 25–26</span> | 
                  Innovation Awaits
                </span>
              </div>
            </motion.div>

            {/* Enhanced Register Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://forms.gle/AE3vg9kJQVBPoH1v7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl 
                           bg-gradient-to-r from-slate-800 to-slate-900 
                           border-2 border-cyan-500/50 text-white
                           hover:from-cyan-600 hover:to-blue-600 
                           hover:border-cyan-400/80 hover:shadow-xl hover:shadow-cyan-500/25
                           transition-all duration-300 group"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span>REGISTER NOW</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-cyan-400 group-hover:text-white"
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Animated Hero Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 max-w-lg lg:max-w-xl relative"
          >
            <div className="relative">
              {/* Main Terminal Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 
                           backdrop-blur-sm border border-cyan-500/30 rounded-2xl shadow-2xl 
                           shadow-cyan-500/20 overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">hackathon.js</span>
                </div>

                {/* Code Content */}
                <div className="p-6 h-64 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-cyan-400">$</span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      className="text-slate-300"
                    >
                      npm start hackathon
                    </motion.span>
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-cyan-400"
                    />
                  </div>

                  {/* Animated Code */}
                  <div className="space-y-1">
                    {codeSnippets.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: index <= currentCode ? 1 : 0.3,
                          x: 0,
                          color: index === currentCode ? "#22d3ee" : "#94a3b8"
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-slate-400"
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>

                  {/* Output */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-4 text-green-400"
                  >
                    → Building the future...
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Tech Stack Tags */}
              <div className="absolute -top-8 -right-8 space-y-2">
                {techStack.slice(0, 6).map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      x: [50, 0, 0, -50],
                      y: [0, -10, -10, -20]
                    }}
                    transition={{ 
                      duration: 4,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatDelay: 6
                    }}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 
                               rounded-full text-xs font-semibold backdrop-blur-sm
                               border border-indigo-400/30 shadow-lg"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              {/* Binary Rain Effect */}
              <div className="absolute -left-8 top-0 h-full w-16 overflow-hidden opacity-20">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-green-400 font-mono text-xs"
                    initial={{ y: -100, x: i * 8 }}
                    animate={{ y: 400 }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </motion.div>
                ))}
              </div>

              {/* Pulsing Network Nodes */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-4 h-4"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping"></div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-6 w-3 h-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="w-full h-full bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping"></div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 20 300 Q 150 200 280 100"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                    <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx="true">{`
        @keyframes grid-move {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
      `}</style>
    </div>
  );
}
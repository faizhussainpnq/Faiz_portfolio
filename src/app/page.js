"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Img Component (simplified version)
function Img() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-64 h-64 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl shadow-yellow-500/50"
    >
      <div className="w-full h-full rounded-full border-4 border-yellow-300/30 flex items-center justify-center text-6xl">
        👨‍💻
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const fullText = "Faiz Hussain";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 1000;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timer;
    if (!isDeleting && text.length < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (text.length === fullText.length && !isDeleting) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (text.length === 0 && isDeleting) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full overflow-hidden bg-black">
      {/* 🔹 Hero Section with Enhanced Animations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full min-h-screen overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(4, 116, 94, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(4, 116, 94, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(4, 116, 94, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        {/* Static Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04745e]/20 via-[#000f0c] to-[#000f0c]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10">
          {/* Header with Typing Animation */}
          <motion.div variants={itemVariants} className="mt-10">
            <motion.h1
              className="text-[32px] sm:text-[56px] md:text-[72px] lg:text-[96px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 font-serif text-center sm:text-left"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {text}
              <span className="border-r-4 border-yellow-400 animate-blink ml-1"></span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="mt-6 text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl text-center sm:text-left"
            >
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start"
            >
              <motion.a
               href="/projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Image Component */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
          >
            <Img />
          </motion.div>

          {/* Animated Marquee */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden py-8"
          >
            <div className="flex whitespace-nowrap animate-marquee text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] font-serif text-gray-400/20 font-bold">
              <span className="mx-8">
                NEXT.JS • TAILWIND CSS • FRAMER MOTION • TYPESCRIPT • REACT
              </span>
              <span className="mx-8">
                NEXT.JS • TAILWIND CSS • FRAMER MOTION • TYPESCRIPT • REACT
              </span>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
          .animate-blink {
            animation: blink 0.8s step-start infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </motion.div>

      {/* 🔹 Interactive 3D Card Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="relative w-full min-h-[600px] sm:min-h-[700px] overflow-hidden bg-gradient-to-b from-black via-[#000f0c] to-black py-20"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#04745e]/20 rounded-full blur-[120px]"
        />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] sm:text-[48px] md:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 text-center mb-16 font-serif"
          >
            Crafting Digital Experiences
          </motion.h2>

          {/* 3D Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Design", icon: "✨", desc: "Beautiful & Intuitive", color: "from-yellow-400/10 to-yellow-600/5" },
              { title: "Develop", icon: "⚡", desc: "Fast & Efficient", color: "from-[#04745e]/10 to-green-600/5" },
              { title: "Deploy", icon: "🚀", desc: "Scalable & Secure", color: "from-yellow-500/10 to-[#04745e]/5" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: -20, 
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
                style={{ perspective: '1000px' }}
              >
                <div className={`relative p-8 bg-gradient-to-br ${card.color} backdrop-blur-xl border border-yellow-400/30 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300`}>
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.2), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Icon with Animation */}
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {card.icon}
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-lg">{card.desc}</p>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Code Snippets Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="relative p-8 bg-gradient-to-br from-[#0a0a0a]/90 to-[#000f0c]/90 backdrop-blur-xl border border-yellow-400/20 rounded-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">~/portfolio/magic.js</span>
              </div>
              
              {/* Animated Code Lines */}
              <div className="font-mono text-sm sm:text-base space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400"> passion</span>
                  <span className="text-white"> = </span>
                  <span className="text-green-400">"Building Amazing Things"</span>
                  <span className="text-white">;</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400"> skills</span>
                  <span className="text-white"> = [</span>
                  <span className="text-green-400">"React"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">"Next.js"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">"JavaScript"</span>
                  <span className="text-white">];</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                >
                  <span className="text-blue-400">createMagic</span>
                  <span className="text-white">(passion, skills);</span>
                </motion.div>
              </div>

              {/* Glowing Cursor */}
              <motion.div
                className="inline-block w-2 h-5 bg-yellow-400 ml-1 mt-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 🔹 Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black to-[#000f0c]"
      >
        {[
          { number: "10+", label: "Projects Built" },
          { number: "15+", label: "Technologies" },
          { number: "2+", label: "Years Coding" },
          { number: "∞", label: "Lines of Code" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-center p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/20 rounded-2xl"
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
            >
              {stat.number}
            </motion.h3>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-[#000f0c] to-black"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 text-center mb-12 font-serif"
        >
          About Me
        </motion.h2>
        
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
            Hi, I'm <span className="text-yellow-400 font-bold">Faiz Hussain</span>, a passionate Full Stack Developer 
            specializing in creating stunning web applications with modern technologies.
          </p>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            I love turning complex problems into simple, beautiful, and intuitive designs. 
            When I'm not coding, you'll find me exploring new technologies and building innovative solutions.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {[
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "MongoDB",
            "Framer Motion",
            "HTML",
            "Github",
            "Express.js",
            "REST API",
            "SEO",
          ].map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-gradient-to-br from-[#04745e]/20 to-transparent border border-yellow-400/30 rounded-xl text-center backdrop-blur-sm"
            >
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 🔹 CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-t from-[#04745e]/10 to-black text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Build Something Amazing Together
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
        >
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg text-lg"
          >
            View My Work
          </motion.a>
          <motion.a
           href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition-all text-lg"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}
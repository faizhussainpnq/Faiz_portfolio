"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Animated Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(4, 116, 94, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(4, 116, 94, 0.2) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#04745e]/10 via-black to-yellow-900/10"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * -150 - 50],
              x: [null, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
        {/* Glowing Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-400/20 to-[#04745e]/20 rounded-full border border-yellow-400/40 mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-300 font-semibold text-sm">Oops!</span>
        </motion.div>

        {/* 404 Number with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-[120px] sm:text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 leading-none"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the digital void. 
            Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg text-base sm:text-lg group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Go Home</span>
          </motion.a>

          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition-all text-base sm:text-lg group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center gap-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-yellow-400 rounded-full"
            />
          ))}
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-gray-500 text-sm flex items-center justify-center gap-2"
        >
          <Search className="w-4 h-4" />
          <span>Try searching from the homepage</span>
        </motion.div>
      </div>

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#04745e]/20 rounded-full blur-[120px] pointer-events-none"
      />
    </div>
  );
}
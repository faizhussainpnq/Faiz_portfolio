"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Home, User, Briefcase, Newspaper, Rocket, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Portfolio", url: "/portfolio", icon: Briefcase },
    { name: "Blogs", url: "/blogs", icon: Newspaper },
    { name: "Projects", url: "/projects", icon: Rocket },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* 🔹 Premium Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-2xl border-b border-[#00ffaa]/30 shadow-2xl shadow-[#00ffaa]/10"
            : "bg-gradient-to-r from-[#04745e]/40 via-black/60 to-black/40 backdrop-blur-lg border-b border-[#00ffaa]/10"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[75px] sm:h-[85px] px-4 sm:px-6 md:px-12">
          
          {/* 🎨 Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            >
              <div className="relative">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#00ffaa]" />
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-[#00ffaa] rounded-full blur-lg opacity-30" />
              </div>
              
              <h1 className="text-[18px] sm:text-[22px] md:text-[28px] font-bold font-serif">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ffaa] to-white">
                  Software
                </span>{" "}
                <span className="text-[#00ffaa] drop-shadow-[0_0_10px_rgba(0,255,170,0.5)]">
                  Developer
                </span>
              </h1>
            </motion.div>
          </Link>

          {/* 🖥️ Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="relative group"
                >
                  <Link href={item.url}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative flex items-center gap-2 px-3 lg:px-4 py-2.5 text-[14px] lg:text-[16px] font-semibold text-gray-300 hover:text-[#00ffaa] transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-4 h-4 hidden lg:block" />
                      {item.name}
                      
                      {/* Animated Underline */}
                      <motion.span
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00ffaa] to-[#04745e]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* 💼 Hire Me Button (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 255, 170, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 lg:px-7 py-2.5 bg-gradient-to-r from-[#00ffaa] to-[#04745e] text-black font-bold rounded-full shadow-lg text-sm lg:text-base overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Hire Me
              </span>
            </motion.button>
          </motion.div>

          {/* 📱 Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="md:hidden relative"
          >
            <div className="relative z-10 p-2 bg-gradient-to-br from-[#00ffaa]/20 to-transparent rounded-lg border border-[#00ffaa]/30">
              <Menu size={26} className="text-[#00ffaa]" />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* 🌫️ Backdrop Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 📱 Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed top-0 right-0 w-[85%] max-w-[350px] h-screen bg-gradient-to-b from-[#0a0a0a] via-[#04745e]/20 to-black z-50 shadow-2xl border-l border-[#00ffaa]/30"
          >
            {/* Subtle Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-64 h-64 bg-[#00ffaa]/20 rounded-full blur-[80px]"
              />
              <motion.div
                animate={{ opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 left-10 w-56 h-56 bg-[#04745e]/30 rounded-full blur-[80px]"
              />
            </div>

            {/* Header with Close Button */}
            <div className="relative z-10 flex justify-between items-center p-6 border-b border-[#00ffaa]/20">
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-white text-[26px] font-bold font-serif flex items-center gap-2"
              >
                <Sparkles className="w-6 h-6 text-[#00ffaa]" />
                Menu
              </motion.h2>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(false)}
                className="text-[#00ffaa] hover:text-white transition-colors p-2 hover:bg-[#00ffaa]/10 rounded-lg"
              >
                <X size={28} />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <ul className="relative z-10 flex flex-col px-5 py-6 space-y-2">
              {NavItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 + 0.2, duration: 0.4 }}
                    whileHover={{ x: 6 }}
                    onClick={() => setOpen(false)}
                    className="group relative"
                  >
                    <Link href={item.url}>
                      <div className="flex items-center gap-4 p-4 text-[18px] text-gray-300 hover:text-[#00ffaa] cursor-pointer transition-all rounded-xl hover:bg-[#00ffaa]/5 border border-transparent hover:border-[#00ffaa]/30 backdrop-blur-sm">
                        <Icon className="w-5 h-5" />
                        <span className="font-semibold">{item.name}</span>
                        
                        {/* Arrow */}
                        <span className="ml-auto opacity-0 group-hover:opacity-100 text-[#00ffaa] transition-opacity">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative z-10 absolute bottom-8 left-5 right-5"
            >
              {/* Hire Me Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(0, 255, 170, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#00ffaa] to-[#04745e] text-black font-bold rounded-full shadow-2xl text-lg mb-5 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Let's Work Together
                </span>
              </motion.button>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {[
                  { name: "GitHub", letter: "G" },
                  { name: "LinkedIn", letter: "L" },
                  { name: "Twitter", letter: "T" },
                  { name: "Naukri", letter: "N" }
                ].map((social, i) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    whileHover={{ 
                      y: -3, 
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(0, 255, 170, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ffaa]/10 to-[#04745e]/10 border border-[#00ffaa]/30 text-[#00ffaa] hover:bg-[#00ffaa]/20 transition-all font-bold backdrop-blur-sm"
                  >
                    {social.letter}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Padding for content */}
      <div className="h-[75px] sm:h-[85px]" />
    </>
  );
}
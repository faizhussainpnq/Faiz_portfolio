"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react"; 

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Gemstone E-Commerce",
      category: "fullstack",
      type: "User Platform",
      description: "A visually stunning gemstone storefront with dynamic search, filters, and seamless product discovery. Built with React.js for an exceptional user experience.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML"],
      features: [
        "Browse gemstone categories with detailed pages",
        "Dynamic search & filter components",
        "Responsive design for all devices",
        "Benefits & FAQs integration"
      ],
      link: "https://zynotex.com/gemstone/user/",
      gradient: "from-purple-500 to-pink-500",
      icon: "💎"
    },
    {
      id: 2,
      title: "Gemstone Admin Panel",
      category: "fullstack",
      type: "Dashboard",
      description: "Powerful admin dashboard for managing gemstone inventory, categories, benefits, and FAQs with seamless CRUD operations and image uploads.",
      tech: ["React.js", "HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Manage categories & benefits",
        "Dynamic form components",
        "Modular UI with performance optimization",
        "Backend API integration"
      ],
      link: "https://zynotex.com/gemstone/admin",
      gradient: "from-indigo-500 to-purple-500",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Salon Hive",
      category: "fullstack",
      type: "Full-Stack App",
      description: "Complete salon management system with real-time services tracking, user management, and robust backend APIs for seamless operations.",
      tech: ["React.js", "Tailwind", "Node.js", "Express", "MongoDB"],
      features: [
        "Real-time salon services management",
        "User authentication system",
        "CRUD operations with MongoDB",
        "Image upload functionality"
      ],
      link: "https://salon.zynotex.com",
      gradient: "from-pink-500 to-rose-500",
      icon: "✂️"
    },
    {
      id: 4,
      title: "Meeyau",
      category: "fullstack",
      type: "E-Learning Platform",
      description: "Full-stack course selling platform built with MERN stack. Browse, purchase, and access online courses with secure payment integration.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind"],
      features: [
        "Course listings with authentication",
        "Payment integration",
        "RESTful APIs for course data",
        "User profiles & purchase history"
      ],
      link: "https://meeyau.com",
      gradient: "from-blue-500 to-cyan-500",
      icon: "📚"
    },
    {
      id: 5,
      title: "Netflix Clone",
      category: "frontend",
      type: "Streaming App",
      description: "A Netflix clone showcasing front-end development skills with interactive UI, movie browsing, and responsive design.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      features: [
        "Interactive UI with movie details",
        "Responsive design for all devices",
        "Data fetching from API (e.g., TMDB)",
        "Modern component structure"
      ],
      link: "https://entertainment-video-app.netlify.app/",
      gradient: "from-red-500 to-orange-500",
      icon: "🎬"
    },
    {
      id: 6,
      title: "Resume Maker",
      category: "frontend",
      type: "Web App",
      description: "Interactive resume builder that allows users to create professional resumes with real-time preview and easy download functionality.",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      features: [
        "Professional resume templates",
        "Interactive user interface",
        "Real-time preview",
        "Download functionality"
      ],
      link: "https://geniusresumemaker.netlify.app/",
      gradient: "from-green-500 to-teal-500",
      icon: "📄"
    },
    {
      id: 7,
      title: "Personal Portfolio",
      category: "frontend",
      type: "Portfolio Site",
      description: "A stunning portfolio website showcasing skills and projects with modern design principles and responsive layout for all devices.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive design",
        "Project showcase section",
        "Contact section",
        "Modern & clean interface"
      ],
      link: "https://faizhussainpng.github.io/portfolio/",
      gradient: "from-yellow-500 to-orange-500",
      icon: "🎨"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  return (
    <div className="w-full overflow-hidden bg-black">
      {/* 🚀 Hero Section - Reduced animations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full min-h-[60vh] overflow-hidden"
      >
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04745e]/20 via-[#000f0c] to-[#000f0c]"></div>

        {/* Reduced Floating Particles - 15 to 5 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-20 pt-32">
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-[#04745e]/20 rounded-full border border-yellow-400/30 mb-8"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 font-semibold">Portfolio Showcase</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-[48px] sm:text-[64px] md:text-[96px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 font-sans mb-6"
            >
              My Projects
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Explore my collection of full-stack applications, e-commerce platforms, and interactive web experiences
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* ⚙️ Filter Section - Reduced hover effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-20 px-6 sm:px-10 md:px-16 lg:px-24 py-8 bg-black"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: "all", label: "All Projects", count: projects.length },
            { id: "fullstack", label: "Full-Stack", count: projects.filter(p => p.category === "fullstack").length },
            { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length }
          ].map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg'
                  : 'bg-gradient-to-r from-[#04745e]/20 to-transparent text-gray-300 border border-yellow-400/30 hover:border-yellow-400/50'
              }`}
            >
              <Code2 className="w-4 h-4" />
              {filter.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id ? 'bg-black/20' : 'bg-yellow-400/20'
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* 🖼️ Projects Grid - Reduced animations */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-12 bg-gradient-to-b from-black via-[#000f0c] to-black">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-[#04745e]/10 to-transparent backdrop-blur-xl border border-yellow-400/30 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500">
                  
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">
                        {project.icon}
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-lg border border-yellow-400/30">
                        <span className="text-xs font-semibold text-yellow-300">{project.type}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white group-hover:from-yellow-400 group-hover:to-yellow-200 transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#04745e]/20 to-transparent text-gray-300 rounded-lg border border-[#04745e]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-yellow-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="text-yellow-400 mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-400/5 to-transparent rounded-tr-full" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 📈 Stats Section - Removed icon rotation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black to-[#000f0c]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Projects Completed", icon: "🚀" },
            { number: "15+", label: "Technologies Used", icon: "⚡" },
            { number: "100%", label: "Success Rate", icon: "✨" },
            { number: "∞", label: "Lines of Code", icon: "💻" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl text-center group"
            >
              <div className="text-3xl mb-2">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 📞 CTA Section - Reduced glow animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-t from-[#04745e]/10 to-black"
      >
        <div className="relative max-w-4xl mx-auto">
          <div className="relative text-center p-12 bg-gradient-to-br from-[#04745e]/10 to-transparent backdrop-blur-xl border border-yellow-400/30 rounded-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 mb-6 font-serif"
            >
              Let's Build Something Amazing
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              Have a project in mind? Let's discuss how I can help bring your ideas to life with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg text-lg"
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="/PDF/Faiz_Hussain_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition-all text-lg flex items-center justify-center gap-2"
              >
                View Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
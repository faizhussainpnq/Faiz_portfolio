"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Briefcase, Award, Code2, Palette, Database, Zap, 
  Download, Mail, Github, Linkedin, Twitter, ExternalLink,
  Sparkles, TrendingUp, CheckCircle, Calendar
} from "lucide-react";

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = {
    frontend: [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "JavaScript", level: 92, icon: "💛" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Bootstrap", level: 90, icon: "🅱️" },
      { name: "Material UI", level: 88, icon: "🎭" },
      { name: "Framer Motion", level: 85, icon: "✨" },
      { name: "HTML/CSS", level: 98, icon: "🌐" }
    ],
    backend: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 90, icon: "🚂" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "REST APIs", level: 92, icon: "🔌" },
      { name: "Authentication", level: 87, icon: "🔐" },
      { name: "SEO", level: 82, icon: "🔍" }
    ],
    tools: [
      { name: "Git/GitHub", level: 90, icon: "📦" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Postman", level: 88, icon: "📮" },
      { name: "NPM/Yarn", level: 85, icon: "📦" }
    ]
  };

  const experience = [
    {
      id: 1,
      title: "MERN Stack Developer",
      company: "Softgrid Info Private Limited",
      period: "Sep 2023 - Present",
      description: "Working as a professional MERN Stack Developer, building scalable web applications and implementing modern development practices.",
      achievements: [
        "Developed multiple production-ready applications",
        "Implemented secure authentication & authorization",
        "Optimized application performance and load times",
        "Collaborated with cross-functional teams"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Full-Stack Development Training",
      company: "AlmaBetter (Certification Program)",
      period: "Jul 2023 - Jul 2024",
      description: "Completed intensive Full-Stack Development certification program focusing on MERN stack, DSA, and industry best practices.",
      achievements: [
        "Mastered MERN stack development",
        "Built 8+ capstone projects",
        "Learned Data Structures & Algorithms",
        "Received industry-recognized certification"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Self-Learning & Practice",
      company: "Independent Study",
      period: "2021 - 2023",
      description: "Dedicated two years to self-learning MERN stack technologies through online resources, documentation, and hands-on projects.",
      achievements: [
        "Completed 50+ online tutorials & courses",
        "Built personal projects for practice",
        "Studied JavaScript, React, Node.js deeply",
        "Developed problem-solving skills"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Full-Stack Development Certification",
      field: "MERN Stack Development",
      institution: "AlmaBetter",
      year: "Jul 2023 - Jul 2024",
      icon: "💻"
    },
    {
      id: 2,
      degree: "Bachelor of Commerce (B.Com)",
      field: "Commerce",
      institution: "University",
      year: "2018 - 2021",
      icon: "🎓"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Full-Stack Web Development",
      issuer: "Udemy",
      year: "2023",
      icon: "🏆"
    },
    {
      id: 2,
      name: "React - The Complete Guide",
      issuer: "Coursera",
      year: "2022",
      icon: "⚛️"
    },
    {
      id: 3,
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2022",
      icon: "💡"
    },
    {
      id: 4,
      name: "Node.js Certification",
      issuer: "Node.js Bootcamp",
      year: "2023",
      icon: "🍃"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const sections = [
    { id: "about", label: "About Me", icon: User },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: Award }
  ];

  return (
    <div className="w-full overflow-hidden bg-black">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full min-h-screen overflow-hidden flex items-center"
      >
        {/* Animated Background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(4, 116, 94, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(4, 116, 94, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#04745e]/20 via-[#000f0c] to-[#000f0c]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
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
        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-[#04745e]/20 rounded-full border border-yellow-400/30 mb-6"
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-semibold">Full-Stack Developer</span>
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-[48px] sm:text-[64px] md:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 font-sans mb-4 leading-tight"
              >
                Faiz Hussain
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed"
              >
                Crafting exceptional digital experiences with modern web technologies. 
                Passionate about building scalable applications that make a difference.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="/PDF/Faiz_Hussain_CV.pdf"
                  download="Faiz_Hussain_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8"
              >
                {[
                  { icon: Github, href: "https://github.com/faizhussainpnq", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/faiz-hussain-8747a4285/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/faizhussainpnq", label: "Twitter" }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      className="p-3 bg-gradient-to-r from-[#04745e]/20 to-transparent border border-yellow-400/30 rounded-xl text-yellow-300 hover:border-yellow-400/50 transition-all"
                      title={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Side - Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="relative hidden lg:flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-96 h-96 border-2 border-yellow-400/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 border-2 border-[#04745e]/30 rounded-full"
              />
              
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-[#04745e]/20 rounded-full border-4 border-yellow-400/40 flex items-center justify-center text-9xl"
              >
                👨‍💻
              </motion.div>

              {/* Floating Icons */}
              {[
                { icon: "⚛️", x: -100, y: -80 },
                { icon: "🚀", x: 100, y: -100 },
                { icon: "💻", x: -120, y: 60 },
                { icon: "🎨", x: 110, y: 80 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute text-4xl"
                  style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="sticky top-0 z-30 px-6 sm:px-10 md:px-16 lg:px-24 py-6 bg-black/80 backdrop-blur-xl border-b border-yellow-400/20"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/30'
                    : 'bg-gradient-to-r from-[#04745e]/20 to-transparent text-gray-300 border border-yellow-400/30 hover:border-yellow-400/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-black via-[#000f0c] to-black min-h-screen">
        <AnimatePresence mode="wait">
          {/* About Section */}
          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                About Me
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl"
                  >
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">Who I Am</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      I'm a dedicated MERN Stack Developer currently working at Softgrid Info Private Limited. 
                      My journey began with a B.Com degree, but my passion for technology led me to pursue 
                      web development through self-learning and professional training.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      From 2021 to 2023, I self-learned MERN stack technologies, and in 2023, I joined 
                      AlmaBetter's Full-Stack Development program. Currently, I'm working as a MERN Stack 
                      Developer while exploring new opportunities to grow and contribute to innovative projects.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl"
                  >
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">What I Do</h3>
                    <div className="space-y-3">
                      {[
                        { icon: Palette, text: "Frontend Development with React & Next.js" },
                        { icon: Database, text: "Backend APIs with Node.js & Express" },
                        { icon: Code2, text: "Full-Stack MERN Applications" },
                        { icon: Zap, text: "Performance Optimization & Best Practices" }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className="flex items-center gap-3">
                            <div className="p-2 bg-yellow-400/20 rounded-lg">
                              <Icon className="w-5 h-5 text-yellow-400" />
                            </div>
                            <span className="text-gray-300">{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 rounded-2xl"
                  >
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { number: "10+", label: "Projects Completed" },
                        { number: "2+", label: "Years Experience" },
                        { number: "15+", label: "Technologies" },
                        { number: "2+", label: "Year at Softgrid" }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 bg-white/5 rounded-xl text-center"
                        >
                          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-1">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl"
                  >
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">My Approach</h3>
                    <div className="space-y-3">
                      {[
                        "Write clean, maintainable code",
                        "Focus on user experience",
                        "Follow best practices & standards",
                        "Continuous learning & improvement",
                        "Collaborate effectively with teams"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                Skills & Technologies
              </h2>

              <div className="space-y-8">
                {/* Frontend Skills */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                    <Palette className="w-6 h-6" />
                    Frontend Development
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.frontend.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{skill.icon}</span>
                            <span className="text-lg font-semibold text-white">{skill.name}</span>
                          </div>
                          <span className="text-yellow-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Backend Skills */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                    <Database className="w-6 h-6" />
                    Backend Development
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.backend.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 rounded-2xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{skill.icon}</span>
                            <span className="text-lg font-semibold text-white">{skill.name}</span>
                          </div>
                          <span className="text-purple-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    Tools & Technologies
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.tools.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/30 rounded-2xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{skill.icon}</span>
                            <span className="text-lg font-semibold text-white">{skill.name}</span>
                          </div>
                          <span className="text-blue-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                Work Experience
              </h2>

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="relative p-8 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl"
                  >
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.gradient} rounded-l-2xl`}></div>
                    
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-3 text-gray-400">
                          <span className="font-semibold">{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className={`px-4 py-2 bg-gradient-to-r ${exp.gradient} rounded-lg text-white font-semibold text-sm`}
                      >
                        {exp.period}
                      </motion.div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-6">
                  Certifications
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 rounded-2xl text-center"
                    >
                      <motion.div
                        className="text-4xl mb-3"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                      >
                        {cert.icon}
                      </motion.div>
                      <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                      <span className="inline-block px-3 py-1 bg-purple-400/20 text-purple-300 rounded-lg text-xs">
                        {cert.year}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Education Section */}
          {activeSection === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                Education
              </h2>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="p-8 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl"
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="text-6xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        {edu.icon}
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-lg text-gray-300 mb-1">{edu.field}</p>
                            <p className="text-gray-400">{edu.institution}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-black font-semibold">
                              {edu.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-8 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/30 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Continuous Learning</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Beyond formal education, I'm committed to staying updated with the latest technologies 
                  and best practices through online courses, documentation, and hands-on projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Online Courses", "Tech Blogs", "Open Source", "Side Projects", "Community"].map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-400/20 text-blue-300 rounded-lg text-sm font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-t from-[#04745e]/10 to-black"
      >
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#04745e]/20 rounded-full blur-[100px]"
          />

          <div className="relative text-center p-12 bg-gradient-to-br from-[#04745e]/10 to-transparent backdrop-blur-xl border border-yellow-400/30 rounded-3xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="text-6xl mb-6"
            >
              🚀
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 mb-6"
            >
              Let's Work Together
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg text-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
              
              <motion.a
                href="/PDF/Faiz_Hussain_CV.pdf"
                download="Faiz_Hussain_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 transition-all text-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4 mt-8"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-[#04745e]/20 to-transparent border border-yellow-400/30 rounded-xl text-yellow-300 hover:border-yellow-400/50 transition-all"
                    title={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
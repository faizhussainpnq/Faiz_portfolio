"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Briefcase, Award, Code2, Palette, Database, Zap, 
  Download, Mail, Github, Linkedin, Twitter,
  Sparkles, CheckCircle, Calendar
} from "lucide-react";
import { skills, experience, education, certifications, sections, socialLinks, aboutData } from "./portfolioData";

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconMap = {
    User, Code2, Briefcase, Award, Palette, Database, Zap, Github, Linkedin, Twitter
  };

  return (
    <div className="w-full overflow-hidden bg-black">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04745e]/20 via-[#000f0c] to-[#000f0c]"></div>

        {/* Reduced Particles - only 4 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(4)].map((_, i) => (
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
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-[#04745e]/20 rounded-full border border-yellow-400/30 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-semibold">Full-Stack Developer</span>
              </div>
              
              <h1 className="text-[48px] sm:text-[64px] md:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 font-sans mb-4 leading-tight">
                Faiz Hussain
              </h1>
              
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
                Crafting exceptional digital experiences with modern web technologies. 
                Passionate about building scalable applications that make a difference.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/PDF/Faiz_Hussain_CV.pdf"
                  download="Faiz_Hussain_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
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
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social, i) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      className="p-3 bg-gradient-to-r from-[#04745e]/20 to-transparent border border-yellow-400/30 rounded-xl text-yellow-300 hover:border-yellow-400/50 transition-all"
                      title={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side - Simplified */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="absolute w-96 h-96 border-2 border-yellow-400/20 rounded-full" />
              <div className="absolute w-80 h-80 border-2 border-[#04745e]/30 rounded-full" />
              
              <div className="relative w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-[#04745e]/20 rounded-full border-4 border-yellow-400/40 flex items-center justify-center text-9xl">
                👨‍💻
              </div>

              {/* Static Icons */}
              {[
                { icon: "⚛️", x: -100, y: -80 },
                { icon: "🚀", x: 100, y: -100 },
                { icon: "💻", x: -120, y: 60 },
                { icon: "🎨", x: 110, y: 80 }
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute text-4xl"
                  style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
                >
                  {item.icon}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-30 px-6 sm:px-10 md:px-16 lg:px-24 py-6 bg-black/80 backdrop-blur-xl border-b border-yellow-400/20">
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map((section) => {
            const Icon = iconMap[section.icon];
            return (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                whileHover={{ scale: 1.05 }}
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
      </div>

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
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                About Me
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl">
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
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">What I Do</h3>
                    <div className="space-y-3">
                      {aboutData.whatIDo.map((item, i) => {
                        const Icon = iconMap[item.icon];
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
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {aboutData.stats.map((stat, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-xl text-center">
                          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-1">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">My Approach</h3>
                    <div className="space-y-3">
                      {aboutData.approach.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                Skills & Technologies
              </h2>

              <div className="space-y-8">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                    <Palette className="w-6 h-6" />
                    Frontend Development
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.frontend.map((skill, i) => (
                      <div
                        key={i}
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
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                    <Database className="w-6 h-6" />
                    Backend Development
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.backend.map((skill, i) => (
                      <div
                        key={i}
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
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    Tools & Technologies
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.tools.map((skill, i) => (
                      <div
                        key={i}
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
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                Work Experience
              </h2>

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div
                    key={exp.id}
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
                      <div className={`px-4 py-2 bg-gradient-to-r ${exp.gradient} rounded-lg text-white font-semibold text-sm`}>
                        {exp.period}
                      </div>
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
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-6">
                  Certifications
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {certifications.map((cert, i) => (
                    <div
                      key={cert.id}
                      className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 rounded-2xl text-center"
                    >
                      <div className="text-4xl mb-3">{cert.icon}</div>
                      <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                      <span className="inline-block px-3 py-1 bg-purple-400/20 text-purple-300 rounded-lg text-xs">
                        {cert.year}
                      </span>
                    </div>
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
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-8">
                Education
              </h2>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={edu.id}
                    className="p-8 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-yellow-400/30 rounded-2xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-6xl">{edu.icon}</div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-lg text-gray-300 mb-1">{edu.field}</p>
                            <p className="text-gray-400">{edu.institution}</p>
                          </div>
                          <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-black font-semibold">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-8 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/30 rounded-2xl">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section - Simplified */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-t from-[#04745e]/10 to-black">
        <div className="relative max-w-4xl mx-auto">
          <div className="relative text-center p-12 bg-gradient-to-br from-[#04745e]/10 to-transparent backdrop-blur-xl border border-yellow-400/30 rounded-3xl">
            <div className="text-6xl mb-6">🚀</div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 mb-6">
              Let's Work Together
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
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
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((social, i) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-[#04745e]/20 to-transparent border border-yellow-400/30 rounded-xl text-yellow-300 hover:border-yellow-400/50 transition-all"
                    title={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
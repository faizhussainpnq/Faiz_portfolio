"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, User, MessageSquare,
  Github, Linkedin, Twitter, Instagram, Facebook,
  Youtube, Clock, CheckCircle2, Sparkles
} from "lucide-react";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/faizhussainpnq", 
      color: "from-[#333333] to-[#24292e]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(51,51,51,0.6)]",
      borderColor: "border-[#333333]"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/faiz-hussain-8747a4285/", 
      color: "from-[#0077b5] to-[#005582]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(0,119,181,0.6)]",
      borderColor: "border-[#0077b5]"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://x.com/faizhussainpnq", 
      color: "from-[#1DA1F2] to-[#0d8bd9]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(29,161,242,0.6)]",
      borderColor: "border-[#1DA1F2]"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://www.instagram.com/faizhussainpn?igsh=ZDFtNTY1ajRsaG55", 
      color: "from-[#E4405F] via-[#C13584] to-[#833AB4]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(228,64,95,0.6)]",
      borderColor: "border-[#E4405F]"
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://www.facebook.com/share/1DL8Dz7frS/", 
      color: "from-[#1877F2] to-[#0d5dbf]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(24,119,242,0.6)]",
      borderColor: "border-[#1877F2]"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://www.youtube.com/@faizhussain1144", 
      color: "from-[#FF0000] to-[#cc0000]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]",
      borderColor: "border-[#FF0000]"
    },
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      title: "Email", 
      content: "faizhussainmern@gmail.com",
      link: "mailto:faizhussainmern@gmail.com",
      color: "from-[#00ffaa] to-[#04745e]"
    },
    { 
      icon: Phone, 
      title: "Phone", 
      content: "+91 6264332787",
      link: "tel:+916264332787",
      color: "from-[#04745e] to-[#00ffaa]"
    },
    { 
      icon: MapPin, 
      title: "Location", 
      content: "Pune, Maharashtra, India",
      link: "#",
      color: "from-[#00ffaa] to-[#04745e]"
    },
    { 
      icon: Clock, 
      title: "Availability", 
      content: "Mon - Fri, 9AM - 6PM",
      link: "#",
      color: "from-[#04745e] to-[#00ffaa]"
    },
  ];

  // WhatsApp floating button
  const WhatsAppButton = () => (
    <motion.a
      href="https://wa.me/916264332787"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all group"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-9 h-9 text-white"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      {/* Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full"
      />
    </motion.a>
  );

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden relative">
      {/* WhatsApp Floating Button */}
      {mounted && <WhatsAppButton />}

      {/* 🎨 Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 30% 40%, rgba(0, 255, 170, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 60%, rgba(0, 255, 170, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 40%, rgba(0, 255, 170, 0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#04745e]/5 to-black" />
        </div>

        {/* Floating Particles */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00ffaa]/40 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
                }}
                animate={{
                  y: [null, Math.random() * -200 - 100],
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
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-20 text-center">
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Sparkles className="w-16 h-16 text-[#00ffaa] mx-auto" />
              <motion.div
                className="absolute inset-0 bg-[#00ffaa] blur-2xl opacity-40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ffaa] to-white">
              Let's
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
              Connect
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? I'd love to hear from you.
            Drop me a message and let's create something amazing together!
          </motion.p>
        </div>
      </motion.section>

      {/* 📱 Social Media Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-16 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
              Connect on Social Media
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            Follow me on your favorite platform and stay updated with my latest work and insights
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group flex flex-col items-center justify-center p-6 bg-gradient-to-br ${social.color} rounded-2xl shadow-lg transition-all duration-300 ${social.hoverColor} border ${social.borderColor} border-opacity-30`}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                    style={{ background: `linear-gradient(135deg, ${social.color})` }}
                  />
                  
                  <Icon className="w-10 h-10 text-white mb-3 relative z-10" />
                  <span className="text-white font-semibold text-sm relative z-10">{social.name}</span>
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 ${social.borderColor}`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 📧 Main Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-6 sm:px-10 bg-gradient-to-b from-black to-[#04745e]/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
                  Get in Touch
                </span>
              </h2>

              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-[#00ffaa]/20 rounded-2xl backdrop-blur-sm hover:border-[#00ffaa]/40 transition-all group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7 text-black" />
                    </motion.div>
                    <div>
                      <h3 className="text-gray-400 text-sm font-semibold mb-1">{info.title}</h3>
                      <p className="text-white text-lg font-semibold group-hover:text-[#00ffaa] transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-[#04745e]/10 to-transparent border border-[#00ffaa]/20 rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
                  Send a Message
                </h2>

                <div onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#00ffaa] transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/50 border border-[#00ffaa]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#00ffaa] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#00ffaa] transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/50 border border-[#00ffaa]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#00ffaa] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#00ffaa] transition-colors" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/50 border border-[#00ffaa]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#00ffaa] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-[#00ffaa]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#00ffaa] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting || submitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 bg-gradient-to-r from-[#00ffaa] to-[#04745e] text-black font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                      isSubmitting || submitted ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_0_30px_rgba(0,255,170,0.5)]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🗺️ Map Section (Optional Placeholder) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] bg-gradient-to-br from-[#04745e]/20 to-transparent border border-[#00ffaa]/20 rounded-3xl overflow-hidden backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#00ffaa] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Based in Pune</h3>
              <p className="text-gray-400">Maharashtra, India</p>
            </div>
            
            {/* Animated Rings */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 border-2 border-[#00ffaa] rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 border-2 border-[#04745e] rounded-full"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
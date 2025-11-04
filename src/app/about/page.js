"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Code2, Palette, Rocket, Award, BookOpen, Coffee,
    Zap, Heart, Target, TrendingUp, Download, Mail,
    Github, Linkedin, Twitter, ExternalLink, Briefcase, GraduationCap
} from "lucide-react";

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const skills = [
        { name: "React & Next.js", level: 95, icon: Code2, color: "from-[#00ffaa] to-[#04745e]" },
        { name: "UI/UX Design", level: 90, icon: Palette, color: "from-[#04745e] to-[#00ffaa]" },
        { name: "JavaScript", level: 88, icon: Zap, color: "from-[#00ffaa] to-[#04745e]" },
        { name: "Node.js", level: 85, icon: Rocket, color: "from-[#04745e] to-[#00ffaa]" },
    ];

    const achievements = [
        { number: "10+", label: "Projects Built", icon: Rocket },
        { number: "15+", label: "Technologies", icon: Code2 },
        { number: "2+", label: "Years Coding", icon: Award },
        { number: "∞", label: "Coffee Consumed", icon: Coffee },
    ];

    const journey = [
        {
            year: "2023 - Present",
            title: "Full Stack Developer at Softgrid Info Pvt Ltd",
            description: "Currently working on enterprise-level applications and exploring new opportunities for growth. Building scalable solutions with MERN stack and modern technologies.",
            icon: Briefcase
        },
        {
            year: "Sep 2023",
            title: "Joined Softgrid Info Pvt Ltd",
            description: "Started my professional journey as a Full Stack Developer, working on real-world projects and collaborating with talented teams.",
            icon: Target
        },
        {
            year: "Jul 2023 - Jul 2024",
            title: "AlmaBetter MERN Stack Certification",
            description: "Completed intensive MERN stack bootcamp from AlmaBetter Organisation. Gained hands-on experience with MongoDB, Express, React, and Node.js through industry-relevant projects.",
            icon: GraduationCap
        },
        {
            year: "2021 - 2023",
            title: "Learning MERN Stack Development",
            description: "Dedicated two years to mastering the MERN stack. Built multiple projects, explored various frameworks, and fell in love with full-stack development.",
            icon: BookOpen
        },
    ];

    const interests = [
        { icon: Code2, name: "Clean Code", desc: "Writing maintainable & elegant solutions" },
        { icon: Palette, name: "UI/UX", desc: "Creating beautiful user experiences" },
        { icon: Rocket, name: "Innovation", desc: "Exploring cutting-edge technologies" },
        { icon: Coffee, name: "Problem Solving", desc: "Turning complex challenges into simple solutions" },
    ];

    const emailAddress = "faizhussainmern@gmail.com";
    const emailSubject = "Let's Work Together - Project Enquiry";
    const emailBody = `Hi Faiz,

I came across your portfolio and I'm impressed with your work! I'd love to discuss a potential project/opportunity with you.

Best regards`;

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    return (
        <div className="w-full min-h-screen bg-black overflow-hidden">
            {/* 🎨 Hero Section with Animated Background */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 30%, rgba(0, 255, 170, 0.15) 0%, transparent 50%)",
                                "radial-gradient(circle at 80% 70%, rgba(0, 255, 170, 0.15) 0%, transparent 50%)",
                                "radial-gradient(circle at 20% 30%, rgba(0, 255, 170, 0.15) 0%, transparent 50%)",
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
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-[#00ffaa]/40 rounded-full"
                                initial={{
                                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
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

                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-20">
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        {/* Profile Image with Glow */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative inline-block mb-8"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-[#00ffaa] to-[#04745e] rounded-full blur-2xl opacity-40"
                            />
                            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#00ffaa] to-[#04745e] p-1">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-6xl sm:text-7xl">
                                    👨‍💻
                                </div>
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ffaa] to-white">
                                Hi, I'm
                            </span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
                                Faiz Hussain
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light"
                        >
                            Full Stack Developer & UI/UX Enthusiast
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            I craft digital experiences that blend beautiful design with powerful functionality.
                            Passionate about turning complex problems into elegant, user-friendly solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 justify-center mt-8"
                        >
                            <motion.a
                                href="/PDF/Faiz_Hussain_CV.pdf"
                                download="Faiz_Hussain_CV.pdf"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(0, 255, 170, 0.5)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-[#00ffaa] to-[#04745e] text-black font-bold rounded-full flex items-center gap-2 shadow-lg"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </motion.a>
                            <motion.a
                                href={mailtoLink}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-[#00ffaa] text-[#00ffaa] font-bold rounded-full hover:bg-[#00ffaa]/10 transition-all flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Get in Touch
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-[#00ffaa]/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-[#00ffaa] rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* 📊 Stats Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="py-20 px-6 sm:px-10 bg-gradient-to-b from-black to-[#04745e]/5"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {achievements.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="text-center p-6 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-[#00ffaa]/20 rounded-2xl backdrop-blur-sm relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-[#00ffaa]/0 group-hover:bg-[#00ffaa]/5 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                />

                                <Icon className="w-8 h-8 text-[#00ffaa] mx-auto mb-4" />
                                <motion.h3
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e] mb-2"
                                >
                                    {item.number}
                                </motion.h3>
                                <p className="text-gray-400 text-sm md:text-base">{item.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* 💼 Skills Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="py-20 px-6 sm:px-10"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
                            Skills & Expertise
                        </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, i) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="relative group"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-6 h-6 text-[#00ffaa]" />
                                            <span className="text-white font-semibold text-lg">{skill.name}</span>
                                        </div>
                                        <span className="text-[#00ffaa] font-bold">{skill.level}%</span>
                                    </div>

                                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                        >
                                            <motion.div
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* 🎯 Journey Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="py-20 px-6 sm:px-10 bg-gradient-to-b from-[#04745e]/5 to-black"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
                            My Journey
                        </span>
                    </motion.h2>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ffaa] via-[#04745e] to-transparent" />

                        <div className="space-y-12">
                            {journey.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="relative pl-20"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            className="absolute left-0 w-16 h-16 bg-gradient-to-br from-[#00ffaa] to-[#04745e] rounded-full flex items-center justify-center border-4 border-black"
                                        >
                                            <Icon className="w-7 h-7 text-black" />
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ x: 10, scale: 1.02 }}
                                            className="bg-gradient-to-br from-[#04745e]/10 to-transparent border border-[#00ffaa]/20 rounded-2xl p-6 backdrop-blur-sm"
                                        >
                                            <span className="inline-block px-4 py-1 bg-[#00ffaa]/10 border border-[#00ffaa]/30 rounded-full text-[#00ffaa] text-sm font-bold mb-3">
                                                {item.year}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400 text-lg">{item.description}</p>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 🎨 Interests Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="py-20 px-6 sm:px-10"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#04745e]">
                            What I Love
                        </span>
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interests.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className="text-center p-8 bg-gradient-to-br from-[#04745e]/10 to-transparent border border-[#00ffaa]/20 rounded-2xl backdrop-blur-sm relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-[#00ffaa]/0 group-hover:bg-[#00ffaa]/5 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    />

                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Icon className="w-12 h-12 text-[#00ffaa] mx-auto mb-4" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* 🚀 CTA Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="py-20 px-6 sm:px-10 bg-gradient-to-t from-[#04745e]/10 to-black"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl font-bold text-white mb-6"
                    >
                        Let's Create Something Amazing
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
                    >
                        I'm always excited to collaborate on innovative projects. Whether you have a specific idea or just want to chat about possibilities, I'd love to hear from you.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 justify-center mb-10"
                    >
                        <motion.a
                            href={mailtoLink}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 170, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-gradient-to-r from-[#00ffaa] to-[#04745e] text-black font-bold rounded-full shadow-lg text-lg flex items-center gap-2"
                        >
                            <Rocket className="w-5 h-5" />
                            Start a Project
                        </motion.a>
                        <motion.a
                            href={mailtoLink}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 border-2 border-[#00ffaa] text-[#00ffaa] font-bold rounded-full hover:bg-[#00ffaa]/10 transition-all text-lg flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Say Hello
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-4"
                    >
                        {[
                            { icon: Github, url: "https://github.com/faizhussainpnq" },
                            { icon: Linkedin, url: "https://www.linkedin.com/in/faiz-hussain-8747a4285/" },
                            { icon: Twitter, url: "https://x.com/faizhussainpnq" },
                        ].map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ffaa]/10 to-[#04745e]/10 border border-[#00ffaa]/30 text-[#00ffaa] hover:bg-[#00ffaa]/20 transition-all backdrop-blur-sm"
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Faiz Hussain | Full Stack Web Developer",
  description:
    "Welcome to Faiz Hussain's Portfolio — a passionate Full Stack Web Developer skilled in Next.js, React, Node.js, and modern web technologies. Explore creative projects, skills, and contact details.",
  keywords: [
    // 🔍 Personal & Location Based
    "Faiz Hussain",
    "Faiz Hussain Portfolio",
    "Faiz Hussain Web Developer",
    "Faiz Hussain Next.js Developer",
    "Faiz Hussain React Developer",
    "Faiz Hussain Full Stack Developer",
    "Faiz Hussain Frontend Developer",
    "Web Developer from Madhya Pradesh",
    "Web Developer from Singrauli",
    "Indian Web Developer Portfolio",

    // 💻 Technical / Skill Based
    "Next.js Developer Portfolio",
    "React.js Developer Portfolio",
    "Frontend Developer Portfolio",
    "Full Stack Web Developer Portfolio",
    "JavaScript Developer Portfolio",
    "Next.js Projects Showcase",
    "Modern Web Development Portfolio",
    "Tailwind CSS Developer",
    "Node.js and Express Developer",
    "MongoDB Developer Portfolio",
    "Next.js SEO Portfolio",
    "Responsive Web Design Developer",
    "Next.js Personal Website",
    "React Developer in India",
    "Website Developer for Hire",

    // 🌐 General Search / Trend Based
    "Best Web Developer Portfolio 2025",
    "Hire Web Developer India",
    "Freelance Web Developer Portfolio",
    "Web Development Projects",
    "Creative Portfolio Website",
    "Next.js Animated Portfolio",
    "Professional Web Developer Website",
  ],
  authors: [{ name: "Faiz Hussain" }],
  creator: "Faiz Hussain",
  publisher: "Faiz Hussain",
  metadataBase: new URL("https://hussaincreationsportfolio.netlify.app"),

  openGraph: {
    title: "Faiz Hussain | Full Stack Web Developer",
    description:
      "Explore Faiz Hussain's modern portfolio — built with Next.js, React, and Node.js. Discover creative projects and web development expertise.",
    url: "https://hussaincreationsportfolio.netlify.app",
    siteName: "Faiz Hussain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faiz Hussain Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Faiz Hussain | Web Developer",
    description:
      "Faiz Hussain's professional web developer portfolio — showcasing modern projects built using Next.js, React, and Node.js.",
    images: ["/og-image.png"],
    creator: "@faizhussain", // optional
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#04745e",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}

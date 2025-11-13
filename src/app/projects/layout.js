export const metadata = {
  title: "Projects | Faiz Hussain — Next.js & Full Stack Web Developer",
  description:
    "Browse Faiz Hussain’s web development projects built with Next.js, React, Node.js, and MongoDB. Discover responsive, creative, and performance-driven web apps and portfolio works.",

  keywords: [
    "Faiz Hussain Projects",
    "Web Developer Projects",
    "Next.js Projects",
    "React.js Projects",
    "MERN Stack Projects",
    "Full Stack Developer Projects",
    "Node.js and Express.js Projects",
    "MongoDB Developer Projects",
    "Frontend Developer Work",
    "Responsive Web Projects",
    "Portfolio Projects Showcase",
    "Tailwind CSS Projects",
    "Best Developer Projects 2025",
    "Creative Web Applications",
    "Modern Web Design Projects",
    "UI/UX Developer Projects",
    "JavaScript Developer Work",
    "Open Source Web Projects",
    "Professional Web Developer Portfolio",
    "Freelance Web Developer Work",
  ],

  openGraph: {
    title: "Projects | Faiz Hussain — Next.js Developer",
    description:
      "Explore real-world projects by Faiz Hussain, a Next.js and Full Stack Web Developer from India. Featuring responsive, scalable, and beautifully designed web applications.",
    url: "https://hussaincreationsportfolio.netlify.app/projects",
    siteName: "Faiz Hussain Portfolio",
    images: [
      {
        url: "/image4.png", // Ensure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Faiz Hussain Projects Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Faiz Hussain — Full Stack Web Developer",
    description:
      "Discover professional web development projects built by Faiz Hussain using Next.js, React, Node.js, and MongoDB. Clean, fast, and creative web apps.",
    images: ["/image4.png"],
    creator: "@faizhussain",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  themeColor: "#04745e",
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
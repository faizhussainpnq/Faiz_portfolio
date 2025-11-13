export const metadata = {
  title: "Portfolio | Faiz Hussain — Full Stack Web Developer",
  description:
    "Explore Faiz Hussain’s professional web development portfolio featuring Next.js, React, Node.js, and MongoDB projects. Showcasing modern, responsive, and creative web applications built with cutting-edge technologies.",

  keywords: [
    "Faiz Hussain Portfolio",
    "Web Developer Portfolio",
    "Next.js Portfolio Website",
    "React.js Developer Portfolio",
    "Full Stack Web Developer Projects",
    "Frontend Developer Showcase",
    "Node.js and MongoDB Projects",
    "Modern Web Design Portfolio",
    "Responsive Web Developer Portfolio",
    "Creative Next.js Projects",
    "Best Web Developer Portfolio 2025",
    "Tailwind CSS Portfolio",
    "JavaScript Developer Portfolio",
    "Next.js Animation Portfolio",
    "React Projects Showcase",
    "Professional Developer Portfolio",
    "Web Development Case Studies",
    "Portfolio of Full Stack Developer in India",
    "Faiz Hussain Web Projects",
  ],

  openGraph: {
    title: "Portfolio | Faiz Hussain — Web Developer Projects",
    description:
      "Discover innovative web projects by Faiz Hussain — built using Next.js, React, Node.js, and Tailwind CSS. Explore creative and performance-optimized websites.",
    url: "https://hussaincreationsportfolio.netlify.app/portfolio",
    siteName: "Faiz Hussain Portfolio",
    images: [
      {
        url: "/image2.png", // Make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "Faiz Hussain Portfolio Projects Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Faiz Hussain — Full Stack Web Developer",
    description:
      "Explore the professional portfolio of Faiz Hussain — a Full Stack Developer skilled in React, Next.js, and Node.js. Creative and high-performance web projects.",
    images: ["/image2.png"],
    creator: "@faizhussain", // optional
  },
};

export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
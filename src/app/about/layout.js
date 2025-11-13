export const metadata = {
  title: "About | Faiz Hussain — Full Stack Web Developer from India",
  description:
    "Know more about Faiz Hussain, a passionate Full Stack Web Developer from Singrauli, Madhya Pradesh, India. Expert in Next.js, React, Node.js, and modern frontend technologies with a focus on clean, responsive, and creative web experiences.",

  keywords: [
    "Faiz Hussain About",
    "About Faiz Hussain",
    "Full Stack Developer in India",
    "Next.js Developer from Madhya Pradesh",
    "React Developer Portfolio",
    "Frontend Developer from Singrauli",
    "Faiz Hussain Web Developer",
    "Professional Web Developer Bio",
    "Modern Web Developer Profile",
    "Creative Developer India",
  ],

  openGraph: {
    title: "About Faiz Hussain | Web Developer from Madhya Pradesh, India",
    description:
      "Learn about Faiz Hussain — a professional Full Stack Web Developer skilled in React, Next.js, and Node.js. Based in Singrauli, India.",
    url: "https://hussaincreationsportfolio.netlify.app/about",
    siteName: "Faiz Hussain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Faiz Hussain - Web Developer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "About | Faiz Hussain — Web Developer from India",
    description:
      "Discover who Faiz Hussain is — a Full Stack Web Developer from Madhya Pradesh specializing in Next.js, React, and Node.js.",
    images: ["/og-image.png"],
    creator: "@faizhussain", // optional handle
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
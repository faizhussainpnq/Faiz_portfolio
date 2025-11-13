export const metadata = {
  title: "Contact | Faiz Hussain — Web Developer Portfolio",
  description:
    "Get in touch with Faiz Hussain, a skilled Full Stack Web Developer specializing in Next.js, React.js, Node.js, and MongoDB. Contact for collaboration, freelance projects, or web development services.",

  keywords: [
    "Contact Faiz Hussain",
    "Hire Web Developer",
    "Freelance Web Developer India",
    "Next.js Developer Contact",
    "React.js Developer Contact",
    "Full Stack Developer Near Me",
    "Web Developer Collaboration",
    "Hire Full Stack Developer",
    "Portfolio Contact Page",
    "Contact Form Web Developer",
    "Freelance Projects",
    "Hire React Developer",
    "Hire Next.js Expert",
    "Faiz Hussain Portfolio Contact",
    "Website Development Inquiry",
  ],

  openGraph: {
    title: "Contact | Faiz Hussain — Web Developer",
    description:
      "Reach out to Faiz Hussain for web development projects, collaborations, or freelance opportunities. Available for React.js, Next.js, and full-stack projects.",
    url: "https://hussaincreationsportfolio.netlify.app/contact",
    siteName: "Faiz Hussain Portfolio",
    images: [
      {
        url: "/image5.png",
        width: 1200,
        height: 630,
        alt: "Contact Faiz Hussain - Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Faiz Hussain — Full Stack Web Developer",
    description:
      "Connect with Faiz Hussain for professional web development and design services using Next.js, React, Node.js, and MongoDB.",
    images: ["/image5.png"],
    creator: "@faizhussain", // optional
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
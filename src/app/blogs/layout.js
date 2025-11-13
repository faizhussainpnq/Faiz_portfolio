export const metadata = {
  title: "Blogs | Faiz Hussain — Web Development Articles & Tutorials",
  description:
    "Read insightful web development blogs by Faiz Hussain — covering Next.js, React, Node.js, MongoDB, Tailwind CSS, and modern frontend technologies. Learn coding tips, tutorials, and project guides.",

  keywords: [
    "Faiz Hussain Blogs",
    "Faiz Hussain Articles",
    "Next.js Tutorials",
    "React.js Tips and Tricks",
    "Full Stack Developer Blog",
    "Web Development Tutorials",
    "Frontend Developer Blog",
    "Backend Developer Articles",
    "JavaScript Projects Guide",
    "Next.js SEO Blog",
    "Modern Web Development Blog",
    "Coding Tutorials by Faiz Hussain",
    "Programming Articles 2025",
    "Next.js and React Learning Blog",
    "Developer Blog India",
    "Faiz Hussain Portfolio Blog",
  ],

  openGraph: {
    title: "Faiz Hussain | Web Development Blogs & Tutorials",
    description:
      "Explore blogs written by Faiz Hussain — a Full Stack Web Developer sharing knowledge on React, Next.js, Node.js, and modern web technologies.",
    url: "https://hussaincreationsportfolio.netlify.app/blogs",
    siteName: "Faiz Hussain Portfolio",
    images: [
      {
        url: "/image3.png",
        width: 1200,
        height: 630,
        alt: "Faiz Hussain Blogs - Web Developer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blogs | Faiz Hussain — Next.js & React Developer Insights",
    description:
      "Learn from Faiz Hussain’s technical blogs on web development — covering Next.js, React, Node.js, MongoDB, and Tailwind CSS.",
    images: ["/image3.png"],
    creator: "@faizhussain", // optional
  },
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}
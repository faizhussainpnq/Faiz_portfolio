"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, TrendingUp, Code, Lightbulb, Rocket, X, ArrowLeft } from "lucide-react";

export default function BlogsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedBlog(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      category: "react",
      excerpt: "Learn the best practices for creating maintainable and scalable React applications with modern tools and architecture patterns.",
      fullContent: `
        <h2>Introduction to Scalable React Architecture</h2>
        <p>Building scalable React applications requires careful planning and adherence to best practices. In this comprehensive guide, we'll explore the fundamental principles that will help you create maintainable and efficient React applications.</p>
        
        <h3>1. Component Architecture</h3>
        <p>The foundation of any scalable React application lies in its component structure. We recommend following the <strong>Atomic Design</strong> methodology, which breaks down components into atoms, molecules, organisms, templates, and pages.</p>
        
        <h3>2. State Management</h3>
        <p>For large applications, consider using <strong>Redux Toolkit</strong> or <strong>Zustand</strong> for global state management. Keep local state close to where it's needed, and lift state up only when necessary.</p>
        
        <h3>3. Code Organization</h3>
        <p>Organize your code by feature rather than by file type. This makes it easier to locate related files and improves maintainability as your application grows.</p>
        
        <h3>4. Performance Optimization</h3>
        <ul>
          <li>Use React.memo() for expensive components</li>
          <li>Implement code splitting with React.lazy()</li>
          <li>Optimize re-renders with useMemo and useCallback</li>
          <li>Implement virtual scrolling for long lists</li>
        </ul>
        
        <h3>5. Testing Strategy</h3>
        <p>Implement a comprehensive testing strategy using Jest and React Testing Library. Focus on testing user behavior rather than implementation details.</p>
        
        <h3>Conclusion</h3>
        <p>Building scalable React applications is an ongoing process that requires continuous learning and adaptation. By following these principles, you'll be well-equipped to handle growth and maintain code quality.</p>
      `,
      date: "Nov 2, 2024",
      readTime: "8 min read",
      image: "🚀",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["React", "Architecture", "Best Practices"]
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      category: "css",
      excerpt: "Dive deep into Tailwind CSS utilities and learn how to create stunning, responsive designs with minimal custom CSS.",
      fullContent: `
        <h2>Why Tailwind CSS?</h2>
        <p>Tailwind CSS has revolutionized the way we write CSS by providing a utility-first approach that speeds up development and ensures consistency across your application.</p>
        
        <h3>Core Concepts</h3>
        <p>Tailwind works by providing low-level utility classes that you combine to create custom designs. Instead of writing custom CSS, you compose classes directly in your HTML.</p>
        
        <h3>Responsive Design</h3>
        <p>Tailwind makes responsive design incredibly easy with its mobile-first breakpoint system:</p>
        <ul>
          <li><code>sm:</code> - 640px and above</li>
          <li><code>md:</code> - 768px and above</li>
          <li><code>lg:</code> - 1024px and above</li>
          <li><code>xl:</code> - 1280px and above</li>
        </ul>
        
        <h3>Customization</h3>
        <p>Extend Tailwind's default theme through the <code>tailwind.config.js</code> file. Add custom colors, spacing, fonts, and more to match your brand identity.</p>
        
        <h3>Best Practices</h3>
        <ul>
          <li>Extract repeated patterns into components</li>
          <li>Use @apply sparingly in CSS files</li>
          <li>Leverage Tailwind's JIT mode for optimal performance</li>
          <li>Create a consistent design system with custom utilities</li>
        </ul>
        
        <h3>Advanced Techniques</h3>
        <p>Master pseudo-classes, dark mode implementation, and custom animations to create truly stunning interfaces with Tailwind CSS.</p>
      `,
      date: "Oct 28, 2024",
      readTime: "6 min read",
      image: "🎨",
      gradient: "from-purple-500 to-pink-500",
      tags: ["CSS", "Tailwind", "Design"]
    },
    {
      id: 3,
      title: "MongoDB Performance Optimization",
      category: "backend",
      excerpt: "Discover advanced techniques to optimize MongoDB queries and improve database performance in production applications.",
      fullContent: `
        <h2>MongoDB Performance Fundamentals</h2>
        <p>Database performance is critical for application success. Let's explore how to optimize MongoDB for production workloads.</p>
        
        <h3>1. Indexing Strategies</h3>
        <p>Proper indexing is the most important factor in MongoDB performance. Create indexes on fields that are frequently queried:</p>
        <ul>
          <li>Single field indexes for basic queries</li>
          <li>Compound indexes for multi-field queries</li>
          <li>Text indexes for full-text search</li>
          <li>Geospatial indexes for location queries</li>
        </ul>
        
        <h3>2. Query Optimization</h3>
        <p>Use the <code>explain()</code> method to analyze query performance. Look for:</p>
        <ul>
          <li>Index usage (avoid COLLSCAN)</li>
          <li>Number of documents examined</li>
          <li>Execution time</li>
        </ul>
        
        <h3>3. Schema Design</h3>
        <p>Design your schema based on your query patterns. Consider embedding vs. referencing data based on access patterns and data relationships.</p>
        
        <h3>4. Connection Pooling</h3>
        <p>Configure appropriate connection pool sizes to handle concurrent requests efficiently without overwhelming the database.</p>
        
        <h3>5. Monitoring and Profiling</h3>
        <p>Use MongoDB Atlas monitoring or tools like mongostat and mongotop to identify performance bottlenecks and optimize accordingly.</p>
      `,
      date: "Oct 25, 2024",
      readTime: "10 min read",
      image: "⚡",
      gradient: "from-green-500 to-teal-500",
      tags: ["MongoDB", "Database", "Performance"]
    },
    {
      id: 4,
      title: "Next.js 14: What's New?",
      category: "react",
      excerpt: "Explore the latest features in Next.js 14 including Server Actions, improved caching, and the new App Router enhancements.",
      fullContent: `
        <h2>Next.js 14 Revolutionary Features</h2>
        <p>Next.js 14 brings significant improvements to performance, developer experience, and functionality. Let's dive into the most exciting updates.</p>
        
        <h3>Server Actions</h3>
        <p>Server Actions are now stable! This feature allows you to mutate data directly from components without creating API routes. It simplifies form handling and data mutations significantly.</p>
        
        <h3>Partial Prerendering</h3>
        <p>A groundbreaking feature that combines static and dynamic rendering in the same route, providing the best of both worlds for performance and flexibility.</p>
        
        <h3>Improved Caching</h3>
        <p>Next.js 14 introduces more granular caching controls with the new <code>unstable_cache</code> API, giving you fine-tuned control over data fetching strategies.</p>
        
        <h3>Turbopack Improvements</h3>
        <p>The Rust-based bundler Turbopack sees major performance improvements, making local development even faster.</p>
        
        <h3>Migration Guide</h3>
        <p>Upgrading to Next.js 14 is straightforward. Update your dependencies and leverage the new features gradually without breaking existing code.</p>
      `,
      date: "Oct 20, 2024",
      readTime: "7 min read",
      image: "⚛️",
      gradient: "from-indigo-500 to-purple-500",
      tags: ["Next.js", "React", "Web Dev"]
    },
    {
      id: 5,
      title: "RESTful API Design Best Practices",
      category: "backend",
      excerpt: "Master the art of designing clean, scalable, and maintainable REST APIs with industry-standard conventions.",
      fullContent: `
        <h2>Designing Professional REST APIs</h2>
        <p>A well-designed REST API is crucial for building maintainable and scalable applications. Let's explore the best practices that will make your APIs stand out.</p>
        
        <h3>1. Resource Naming</h3>
        <p>Use plural nouns for resources and follow consistent naming conventions:</p>
        <ul>
          <li>/users - Collection of users</li>
          <li>/users/123 - Specific user</li>
          <li>/users/123/posts - User's posts</li>
        </ul>
        
        <h3>2. HTTP Methods</h3>
        <p>Use appropriate HTTP methods for different operations:</p>
        <ul>
          <li>GET - Retrieve resources</li>
          <li>POST - Create new resources</li>
          <li>PUT/PATCH - Update resources</li>
          <li>DELETE - Remove resources</li>
        </ul>
        
        <h3>3. Status Codes</h3>
        <p>Return meaningful HTTP status codes to indicate the result of operations clearly.</p>
        
        <h3>4. Versioning</h3>
        <p>Implement API versioning from the start to allow for future changes without breaking existing clients.</p>
        
        <h3>5. Error Handling</h3>
        <p>Provide clear, consistent error messages with appropriate status codes and helpful details for debugging.</p>
      `,
      date: "Oct 15, 2024",
      readTime: "9 min read",
      image: "🔧",
      gradient: "from-orange-500 to-red-500",
      tags: ["API", "Backend", "Node.js"]
    },
    {
      id: 6,
      title: "JavaScript ES2024 Features",
      category: "javascript",
      excerpt: "Stay updated with the latest JavaScript features and how they can improve your code quality and developer experience.",
      fullContent: `
        <h2>What's New in JavaScript ES2024</h2>
        <p>JavaScript continues to evolve with exciting new features that make our code more expressive and efficient. Let's explore the latest additions.</p>
        
        <h3>Array Grouping</h3>
        <p>The new <code>Object.groupBy()</code> and <code>Map.groupBy()</code> methods make it easier to group array elements without external libraries.</p>
        
        <h3>Promise.withResolvers()</h3>
        <p>A new utility that provides a more intuitive way to create promises with external resolve/reject handlers.</p>
        
        <h3>Temporal API Updates</h3>
        <p>The Temporal API continues to mature, offering better date and time handling compared to the legacy Date object.</p>
        
        <h3>Import Attributes</h3>
        <p>Import JSON modules and other assets more explicitly with the new import attributes syntax.</p>
        
        <h3>Practical Examples</h3>
        <p>Learn how to implement these features in real-world scenarios and improve your JavaScript code today.</p>
      `,
      date: "Oct 10, 2024",
      readTime: "5 min read",
      image: "💡",
      gradient: "from-yellow-500 to-orange-500",
      tags: ["JavaScript", "ES2024", "Modern JS"]
    },
    {
      id: 7,
      title: "Authentication with JWT",
      category: "backend",
      excerpt: "Implement secure authentication in your applications using JSON Web Tokens with best security practices.",
      fullContent: `
        <h2>Secure Authentication with JWT</h2>
        <p>JSON Web Tokens (JWT) provide a stateless authentication mechanism that's perfect for modern web applications. Let's implement it securely.</p>
        
        <h3>Understanding JWT Structure</h3>
        <p>A JWT consists of three parts:</p>
        <ul>
          <li>Header - Token type and hashing algorithm</li>
          <li>Payload - Claims and user data</li>
          <li>Signature - Verification signature</li>
        </ul>
        
        <h3>Implementation Steps</h3>
        <p>1. User Registration and Login<br/>
        2. Token Generation<br/>
        3. Token Verification<br/>
        4. Refresh Token Strategy</p>
        
        <h3>Security Best Practices</h3>
        <ul>
          <li>Use HTTPS only</li>
          <li>Set appropriate expiration times</li>
          <li>Store tokens securely (HttpOnly cookies)</li>
          <li>Implement token refresh mechanism</li>
          <li>Never store sensitive data in tokens</li>
        </ul>
        
        <h3>Common Pitfalls</h3>
        <p>Avoid common mistakes like storing JWTs in localStorage, using weak secrets, or not validating tokens properly.</p>
      `,
      date: "Oct 5, 2024",
      readTime: "12 min read",
      image: "🔐",
      gradient: "from-red-500 to-pink-500",
      tags: ["Security", "JWT", "Auth"]
    },
    {
      id: 8,
      title: "Framer Motion Animation Guide",
      category: "react",
      excerpt: "Create smooth, professional animations in React applications with Framer Motion's powerful animation library.",
      fullContent: `
        <h2>Mastering Framer Motion</h2>
        <p>Framer Motion is the most powerful animation library for React. Let's learn how to create stunning animations that enhance user experience.</p>
        
        <h3>Basic Animations</h3>
        <p>Start with simple fade and slide animations using the <code>motion</code> component and <code>animate</code> prop.</p>
        
        <h3>Variants</h3>
        <p>Variants allow you to define animation states and orchestrate complex animations across multiple elements.</p>
        
        <h3>Gestures and Interactions</h3>
        <p>Add hover, tap, drag, and other gesture-based animations to make your UI feel alive and responsive.</p>
        
        <h3>Layout Animations</h3>
        <p>Use the <code>layout</code> prop to create smooth transitions when elements change position or size.</p>
        
        <h3>Performance Tips</h3>
        <ul>
          <li>Animate transforms and opacity for best performance</li>
          <li>Use <code>layoutId</code> for shared element transitions</li>
          <li>Leverage GPU acceleration</li>
          <li>Avoid animating expensive properties</li>
        </ul>
      `,
      date: "Sep 30, 2024",
      readTime: "8 min read",
      image: "✨",
      gradient: "from-pink-500 to-rose-500",
      tags: ["Animation", "React", "UI/UX"]
    },
    {
      id: 9,
      title: "TypeScript Tips & Tricks",
      category: "javascript",
      excerpt: "Level up your TypeScript skills with advanced patterns, utility types, and productivity tips for modern development.",
      fullContent: `
        <h2>Advanced TypeScript Techniques</h2>
        <p>TypeScript is more than just adding types to JavaScript. Let's explore advanced features that will make you a TypeScript expert.</p>
        
        <h3>Utility Types</h3>
        <p>Master built-in utility types like Partial, Pick, Omit, Record, and more to manipulate types efficiently.</p>
        
        <h3>Generic Constraints</h3>
        <p>Use generic constraints to create flexible yet type-safe functions and components.</p>
        
        <h3>Type Guards</h3>
        <p>Implement custom type guards and use built-in type narrowing to write safer code.</p>
        
        <h3>Conditional Types</h3>
        <p>Create dynamic types that adapt based on input types, enabling powerful type transformations.</p>
        
        <h3>Best Practices</h3>
        <ul>
          <li>Enable strict mode in tsconfig.json</li>
          <li>Prefer interfaces over type aliases for objects</li>
          <li>Use const assertions for literal types</li>
          <li>Leverage type inference instead of explicit types</li>
        </ul>
      `,
      date: "Sep 25, 2024",
      readTime: "7 min read",
      image: "📘",
      gradient: "from-blue-600 to-indigo-600",
      tags: ["TypeScript", "JavaScript", "Tips"]
    }
  ];

  const categories = [
    { id: "all", label: "All Posts", icon: BookOpen },
    { id: "react", label: "React", icon: Code },
    { id: "javascript", label: "JavaScript", icon: Lightbulb },
    { id: "backend", label: "Backend", icon: Rocket },
    { id: "css", label: "CSS", icon: Sparkles }
  ];

  const filteredBlogs = activeCategory === "all" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

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

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="w-full overflow-hidden bg-black">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full min-h-[70vh] overflow-hidden"
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
          {mounted && [...Array(20)].map((_, i) => (
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
        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-20 pt-32">
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-[#04745e]/20 rounded-full border border-yellow-400/30 mb-8"
            >
              <BookOpen className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 font-semibold">Tech Insights</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-[48px] sm:text-[64px] md:text-[96px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500 font-sans mb-6"
            >
              Blog & Articles
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Sharing knowledge about web development, design patterns, and modern technologies
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </motion.div>

      {/* Categories Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="sticky top-0 z-30 px-6 sm:px-10 md:px-16 lg:px-24 py-6 bg-black/80 backdrop-blur-xl border-b border-yellow-400/20"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = category.id === "all" 
              ? blogs.length 
              : blogs.filter(b => b.category === category.id).length;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/30'
                    : 'bg-gradient-to-r from-[#04745e]/20 to-transparent text-gray-300 border border-yellow-400/30 hover:border-yellow-400/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id ? 'bg-black/20' : 'bg-yellow-400/20'
                }`}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Featured Post */}
      {activeCategory === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-black to-[#000f0c]"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-300">Featured Article</h2>
          </div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="relative group cursor-pointer"
            onClick={() => openBlog(blogs[0])}
          >
            <div className="relative h-full bg-gradient-to-br from-[#04745e]/20 to-transparent backdrop-blur-xl border border-yellow-400/40 rounded-3xl overflow-hidden hover:border-yellow-400/60 transition-all duration-500">
              <div className={`h-3 bg-gradient-to-r ${blogs[0].gradient}`}></div>
              
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <motion.div
                    className="text-7xl mb-6"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {blogs[0].image}
                  </motion.div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-lg text-sm font-semibold">
                      {blogs[0].category.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {blogs[0].date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {blogs[0].readTime}
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                    {blogs[0].title}
                  </h3>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {blogs[0].excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogs[0].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-[#04745e]/30 text-gray-300 rounded-lg border border-[#04745e]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r ${blogs[0].gradient} text-white shadow-lg w-fit group/btn`}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                <div className="relative hidden md:flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-[#04745e]/10 rounded-2xl border border-yellow-400/20 flex items-center justify-center text-9xl"
                  >
                    {blogs[0].image}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Blog Grid */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-[#000f0c] to-black">
        <h2 className="text-3xl font-bold text-white mb-8">
          {activeCategory === "all" ? "Latest Articles" : `${categories.find(c => c.id === activeCategory)?.label} Articles`}
        </h2>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredId(blog.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => openBlog(blog)}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full bg-gradient-to-br from-[#04745e]/10 to-transparent backdrop-blur-xl border border-yellow-400/30 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500">
                  
                  <div className={`h-2 bg-gradient-to-r ${blog.gradient}`}></div>

                  <div className="p-6">
                    <motion.div
                      className="text-5xl mb-4"
                      animate={hoveredId === blog.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {blog.image}
                    </motion.div>

                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-yellow-400/20 text-yellow-300 rounded-lg">
                      {blog.category.toUpperCase()}
                    </span>

                    <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white group-hover:from-yellow-400 group-hover:to-yellow-200 transition-all duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-[#04745e]/20 text-gray-300 rounded border border-[#04745e]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-yellow-400 font-semibold text-sm group/link"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-400/5 to-transparent rounded-tl-full" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-sm overflow-y-auto p-4 sm:p-6"
            onClick={closeBlog}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl my-8 bg-gradient-to-br from-[#04745e]/10 to-black border border-yellow-400/40 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${selectedBlog.gradient}`}></div>
              
              <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-xl border-b border-yellow-400/20 p-6">
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeBlog}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#04745e]/20 to-transparent border border-yellow-400/30 rounded-xl text-yellow-300 hover:border-yellow-400/50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Articles
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeBlog}
                    className="p-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 hover:bg-red-500/30 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-10">
                {/* Article Header */}
                <div className="mb-8">
                  <motion.div
                    className="text-6xl sm:text-8xl mb-6"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {selectedBlog.image}
                  </motion.div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 rounded-lg text-sm font-semibold">
                      {selectedBlog.category.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {selectedBlog.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {selectedBlog.readTime}
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-500">
                    {selectedBlog.title}
                  </h1>

                  <p className="text-gray-300 text-lg mb-6">
                    {selectedBlog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedBlog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-[#04745e]/30 text-gray-300 rounded-lg border border-[#04745e]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mb-8"></div>

                {/* Article Body */}
                <div 
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-r prose-headings:from-yellow-300 prose-headings:to-white
                    prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
                    prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-yellow-300
                    prose-ul:text-gray-300 prose-ul:my-4
                    prose-li:mb-2
                    prose-code:text-yellow-300 prose-code:bg-[#04745e]/20 prose-code:px-2 prose-code:py-1 prose-code:rounded"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }}
                />

                {/* Bottom Actions */}
                <div className="mt-12 pt-8 border-t border-yellow-400/20">
                  <div className="flex flex-wrap gap-4 justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeBlog}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl shadow-lg"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Articles
                    </motion.button>

                    <div className="text-gray-400 text-sm">
                      Enjoyed this article? Share it with others!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
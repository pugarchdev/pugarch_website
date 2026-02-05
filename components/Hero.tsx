"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Beautiful Animated Background - Always Visible */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40 animate-gradient"></div>
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow top-1/4 left-1/4"></div>
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slower top-1/2 right-1/4"></div>
          <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float bottom-1/4 left-1/2"></div>
        </div>

        {/* Grid overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-sm md:text-base text-white uppercase tracking-wider mb-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We Are
        </motion.h2>
        
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          PUGARCH
        </motion.h1>
        
        <motion.h3 
          className="text-2xl md:text-3xl font-semibold mb-8 text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Turning Ideas into Intelligent Solutions
        </motion.h3>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#services"
            className="px-6 py-3 rounded-full bg-black text-white font-medium 
                       shadow-[0_0_10px_rgba(138,43,226,0.7)] border border-purple-500 
                       hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(138,43,226,0.9)] 
                       transition duration-300"
          >
            Explore Our Services
          </a>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-black text-white font-medium 
                       shadow-[0_0_10px_rgba(138,43,226,0.7)] border border-purple-500 
                       hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(138,43,226,0.9)] 
                       transition duration-300"
          >
            Talk to Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

const WhyPugArch = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12 text-center overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.25,
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
        >
          Why PugArch?
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="text-xl font-semibold text-purple-300 mb-6"
        >
          We are PugArch — transforming ideas into powerful digital solutions.
        </motion.p>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="text-lg text-gray-300 mb-10"
        >
          We don't just develop software — we engineer business-changing experiences.
        </motion.p>

        <motion.div
          className="space-y-6 text-left max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.25,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex items-start gap-3"
          >
            <span className="text-gray-200">
              <strong>Custom Development –</strong> High-performance web & mobile applications.
            </span>
          </motion.p>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex items-start gap-3"
          >
            <span className="text-gray-200">
              <strong>SaaS Solutions –</strong> Agile, scalable, and cloud-ready.
            </span>
          </motion.p>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex items-start gap-3"
          >
            <span className="text-gray-200">
              <strong>Business Systems –</strong> Facility, field, and workforce management tools that deliver measurable impact.
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
export { WhyPugArch };

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("abdulla.walidi11@gmail.com");
    setCopied(true);
    window.location.href = "mailto:abdulla.walidi11@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Abdullah,";
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation configurations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 16,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative flex min-h-[75vh] flex-col justify-center py-16 md:py-24 overflow-hidden">
      {/* Sleek Vercel-style Top-to-Bottom Ambient Blue Glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full max-w-5xl -translate-x-1/2 bg-hero-glow blur-3xl opacity-90 transition-all duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 lg:col-span-7 order-2 lg:order-1"
        >
          {/* Hero Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Abdullah Walidi.
              <span className="block mt-2 bg-gradient-to-r from-foreground to-accent-blue-light bg-clip-text text-transparent">
                Building Smart Systems.
              </span>
            </h1>

            {/* Subtitle / Headline */}
            <p className="max-w-xl text-lg font-normal text-muted md:text-xl leading-relaxed">
              I am a{" "}
              <span className="text-foreground font-semibold">
                Software Engineer
              </span>{" "}
              specializing in{" "}
              <span className="text-foreground font-semibold">
                modern frontend frameworks with robust backend integration
              </span>
              . I design, test, and maintain high-performance full-stack
              applications to solve complex real-world problems.
            </p>
          </motion.div>

          {/* CTA Buttons & Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <Link
              href="#projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-foreground px-6 font-medium text-background transition-all duration-200 hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-accent-blue-light focus:ring-offset-2"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-accent-blue-light/30 bg-card/50 hover:bg-accent-blue-light/10 hover:border-accent-blue-light px-6 font-medium text-foreground transition-all duration-200 backdrop-blur-sm"
            >
              Let&apos;s Connect
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:ml-4 border-t border-card-border sm:border-t-0 pt-4 sm:pt-0">
              <a
                href="https://github.com/AbdullaWalidi11"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 border border-transparent hover:border-accent-blue-light/20 hover:bg-card text-muted hover:text-accent-blue-light transition-all duration-200"
                aria-label="GitHub"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 border border-transparent hover:border-accent-blue-light/20 hover:bg-card text-muted hover:text-accent-blue-light transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <div className="relative flex items-center">
                <button
                  onClick={handleEmailClick}
                  className="rounded-lg p-2.5 border border-transparent hover:border-accent-blue-light/20 hover:bg-card text-muted hover:text-accent-blue-light transition-all duration-200 cursor-pointer"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </button>
                {copied && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-accent-blue-light text-white text-[10px] font-mono tracking-wider whitespace-nowrap shadow-md z-20">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] ">
            {/* Minimalist Geometric Image Frame (No glowing background in light theme) */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-card-border bg-card/20 p-2.5 backdrop-blur-md transition-all duration-500 hover:border-accent-blue-light/50 hover:scale-[1.01] hover:shadow-2xl">
              <Image
                src="/photo.png"
                alt="Abdullah Walidi"
                fill
                sizes="(max-width: 768px) 300px, 420px"
                className="rounded-2xl object-cover object-center transition-all duration-700 ease-out"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

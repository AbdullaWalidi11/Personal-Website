"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 border-t border-card-border/60">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-blue-light uppercase">
            Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
            Select case studies highlighting technical architecture, complex problem-solving, and full-stack implementation details.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative flex flex-col justify-between rounded-xl border border-card-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-card/50"
            >
              {/* Top Accent Gradient Border on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent-blue-dark to-accent-blue-light transition-all duration-500 group-hover:w-full" />

              <div className="space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider font-semibold text-accent-blue-light uppercase bg-accent-blue-dark/10 px-2 py-0.5 rounded border border-accent-blue-dark/20">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent-blue-light transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Project Image Preview / Custom Placeholder */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-card-border/80 bg-card/10 transition-all duration-300 group-hover:border-card-border group-hover:bg-card/20 flex items-center justify-center">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        project.imageFit === "contain"
                          ? "object-contain p-2.5 bg-card/5"
                          : "object-cover"
                      }`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[radial-gradient(var(--card-border)_1px,transparent_1px)] [background-size:12px_12px] opacity-40">
                      <span className="text-[10px] font-mono tracking-widest text-muted/50 uppercase">
                        [ {project.title} Preview ]
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Stack */}
              <div className="mt-8 space-y-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((techName) => (
                    <span
                      key={techName}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-card border border-card-border text-muted/80"
                    >
                      {techName}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="font-mono text-[10px] px-2 py-0.5 text-muted/50">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent-blue-light transition-colors duration-200 group/link"
                >
                  Explore Case Study
                  <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

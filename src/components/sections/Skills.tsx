"use client";

import { motion, Variants } from "framer-motion";
import { Layout, Server, Terminal, Brain } from "lucide-react";

const skillCategories = [
  {
    number: "01",
    title: "Frontend & Mobile",
    icon: Layout,
    description: "Developing highly responsive, fluid user interfaces and cross-platform native experiences with type-safe state management.",
    skills: ["React", "React Native", "Flutter", "Next.js", "TypeScript", "Dart"]
  },
  {
    number: "02",
    title: "Backend & Databases",
    icon: Server,
    description: "Architecting modular server APIs, designing database schemas, and managing real-time data flow.",
    skills: ["Express", "PostgreSQL", "SQLite", "Prisma ORM", "Firebase", "Socket.io"]
  },
  {
    number: "03",
    title: "Tools & DevOps",
    icon: Terminal,
    description: "Configuring build tools, mobile environments, and cloud deployment pipelines for seamless releases.",
    skills: ["Vite", "Expo", "Git & GitHub", "Vercel", "Docker"]
  },
  {
    number: "04",
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Integrating intelligent LLM APIs, deploying edge-based neural networks, and utilizing Python for data workflows.",
    skills: [ "TensorFlow Lite", "Python", "PyTorch", "OpenAI API", "Gemini API"]
  }
];

export default function Skills() {
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
    <section id="skills" className="relative py-20 border-t border-card-border/60">
      {/* Background glow anchor */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent-blue-dark/10 blur-[120px]" />

      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-blue-light uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Technical Ability
          </h2>
          <p className="max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
            A vetted collection of languages, frameworks, and workflows that I utilize to design, build, and deploy production-grade software.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.number}
                variants={cardVariants}
                className="group relative flex flex-col justify-between rounded-xl border border-card-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-card/50"
              >
                {/* Visual Top Highlight Line */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent-blue-dark to-accent-blue-light transition-all duration-500 group-hover:w-full" />

                <div className="space-y-4">
                  {/* Card Icon & Header */}
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg p-2.5 bg-card border border-card-border text-accent-blue-light group-hover:text-foreground transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-sm text-muted/50 font-bold">
                      {category.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-card border border-card-border text-muted group-hover:text-foreground group-hover:border-card-border/80 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

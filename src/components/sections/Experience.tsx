"use client";

import { motion, Variants } from "framer-motion";

interface Position {
  date: string;
  role: string;
  company: string;
  description: string[];
}

const experiences: Position[] = [
  {
    date: "Feb 2026 - June 2026",
    role: "AI Engineer Intern",
    company: "Bluesense AI",
    description: [
     "Engineered computer vision pipelines using OpenCV and PyTorch to preprocess facial imagery for various skin conditions. ",
     "Deployed real-time prediction endpoints using FastAPI and Docker to seamlessly integrate health-diagnostic models into consumer applications.",
     "Collaborated with cross-functional teams to link AI-driven skincare analysis backends with interactive web and mobile client user interfaces."
    ]
  }
];

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="relative py-20 border-t border-card-border/60">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-blue-light uppercase">
            History
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Experience Timeline
          </h2>
          <p className="max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
            A chronological summary of my professional milestones, engineering contributions, and collaborative roles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-card-border/80 pl-8 ml-4 space-y-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group flex flex-col md:flex-row gap-4 md:gap-12 rounded-xl border border-transparent hover:border-card-border hover:bg-card/25 p-6 backdrop-blur-sm transition-all duration-300"
              >
                {/* Timeline Pulse Indicator Dot */}
                <div className="absolute left-[-37px] top-[30px] h-3 w-3 rounded-full bg-accent-blue-light border border-background shadow-[0_0_8px_rgba(0,112,243,0.6)] group-hover:scale-125 transition-transform duration-300" />

                {/* Left Side: Date Frame */}
                <div className="md:w-1/4 font-mono text-sm font-bold text-accent-blue-light/80 pt-0.5">
                  {exp.date}
                </div>

                {/* Right Side: Details Card */}
                <div className="md:w-3/4 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent-blue-light transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted/80 font-medium font-mono">
                      {exp.company}
                    </p>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted leading-relaxed">
                    {exp.description.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="hover:text-foreground transition-colors duration-200">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

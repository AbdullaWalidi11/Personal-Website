import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe, Shield, Cpu, Layers } from "lucide-react";
import { projectsData } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

// 1. Dynamic Server-Side SEO Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} Case Study | Abdulla Walidi`,
      description: project.description,
      type: "article",
    },
  };
}

// 2. Server Page Rendering
export default async function ProjectCaseStudy({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-[80vh] py-10 space-y-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Case Study Banner & Info */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-blue-light uppercase">
            {project.category}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {project.title} Case Study
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-5 font-medium text-background hover:bg-foreground/90 transition-all duration-200"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View Repository
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-card-border bg-card/50 hover:bg-card px-5 font-medium text-foreground transition-all duration-200 backdrop-blur-sm"
            >
              <Globe size={16} />
              Visit Live Site
            </a>
          )}
        </div>
      </div>

      {/* Detailed Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        {/* Core Content */}
        <div className="lg:col-span-8 space-y-10">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Layers size={18} className="text-accent-blue-light" />
              Project Overview
            </h2>
            <p className="text-muted leading-relaxed text-base">
              {project.longDescription}
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Cpu size={18} className="text-accent-blue-light" />
              Key Features & Implementation
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="p-4 rounded-lg border border-card-border bg-card/10 text-sm text-muted leading-relaxed"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Challenge */}
          <section className="space-y-4 border-l-2 border-accent-blue-light pl-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Shield size={18} className="text-accent-blue-light" />
              The Technical Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              {project.challenge}
            </p>
          </section>
        </div>

        {/* Sidebar specs */}
        <aside className="lg:col-span-4 space-y-8 rounded-xl border border-card-border bg-card/25 p-6 backdrop-blur-sm h-fit">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted/60 mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-card border border-card-border text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted/60 mb-2">
                System Architecture
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {project.architecture}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted/60 mb-2">
                Verification Strategy
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Unit and integration tests configured with Vitest to run in Docker container pipelines upon GitHub Push events.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

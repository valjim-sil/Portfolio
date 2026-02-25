"use client"

import { ArrowUpRight, GitBranch, Star } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { AnimatedSection, AnimatedItem } from "@/components/animated-section"

interface ProjectCardProps {
  titleKey: string
  descriptionKey: string
  tags: string[]
  githubUrl?: string
}

function ProjectCard({ titleKey, descriptionKey, tags, githubUrl }: ProjectCardProps) {
  const { t } = useI18n()

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30">
      <div className="flex flex-1 flex-col px-6 py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-primary" />
            <h3 className="font-mono text-base font-semibold text-foreground">
              {t(titleKey)}
            </h3>
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${t(titleKey)} on GitHub`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {t(descriptionKey)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-border/50 px-6 py-3">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3 w-3" />
          <span>Open Source</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { t } = useI18n()

  return (
    <section id="projects" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            {t("projects.title")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("projects.title")}
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {t("projects.subtitle")}
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <AnimatedItem delay={0}>
            <ProjectCard
              titleKey="projects.crm.title"
              descriptionKey="projects.crm.description"
              tags={["React", "TypeScript", "Tailwind CSS", "Material UI"]}
              githubUrl="#"
            />
          </AnimatedItem>
          <AnimatedItem delay={0.15}>
            <ProjectCard
              titleKey="projects.ecommerce.title"
              descriptionKey="projects.ecommerce.description"
              tags={["Vite", "React", "Shopping Cart", "Performance"]}
              githubUrl="#"
            />
          </AnimatedItem>
        </div>
      </div>
    </section>
  )
}

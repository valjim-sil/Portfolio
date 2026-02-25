"use client"

import {
  Code2,
  Smartphone,
  FileCode2,
  Zap,
  Paintbrush,
  Layers,
  Network,
  Database,
  Server,
  Terminal,
  LayoutTemplate,
  Library
} from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { AnimatedSection, AnimatedItem } from "@/components/animated-section"

const skillGroups = [
  {
    labelKey: "skills.core",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "React Native", icon: Smartphone },
      { name: "TypeScript", icon: FileCode2 },

    ],
  },
  {
    labelKey: "skills.frontend",
    skills: [
      { name: "Vite", icon: Zap }, 
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "Axios", icon: Network }, 
      { name: "Material UI", icon: LayoutTemplate }, 
    ],
  },
  {
    labelKey: "skills.backend",
    skills: [
      { name: "Node.js", icon: Library },  
      { name: "PHP", icon: Server }, 
      { name: "MySQL", icon: Database },          
      { name: "Python", icon: Terminal }, 
    ],
  },
]

export function SkillsSection() {
  const { t } = useI18n()

  return (
    <section id="skills" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          {/* Usamos las llaves correctas de tu i18n.tsx */}
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            {t("nav.skills")} 
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("skills.title")}
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {t("skills.subtitle")}
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {skillGroups.map((group, groupIdx) => (
            <AnimatedSection key={group.labelKey} delay={groupIdx * 0.1}>
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t(group.labelKey)}
              </h3>
              <div className="flex flex-col gap-3">
                {group.skills.map((skill, idx) => (
                  <AnimatedItem key={skill.name} delay={groupIdx * 0.1 + idx * 0.05}>
                    <div className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-primary/30 hover:bg-secondary">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                        <skill.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
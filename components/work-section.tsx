"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

interface CaseStudyProps {
  titleKey: string;
  companyKey: string;
  descriptionKey: string;
  highlightKeys: string[];
  tags: string[];
  isMobile?: boolean;
}

function CaseStudyCard({
  titleKey,
  companyKey,
  descriptionKey,
  highlightKeys,
  tags,
  isMobile,
}: CaseStudyProps) {
  const { t } = useI18n();

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30">
      {/* Device mockup header */}
      <div className="flex items-center justify-between border-b border-border/50 bg-secondary/50 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {isMobile ? "mobile-app" : "web-dashboard"}
          </span>
        </div>
      </div>

      {/* Mock screen */}
      <div className="relative px-6 py-8">
        {isMobile ? (
          <div className="mx-auto flex max-w-[200px] flex-col items-center">
            <div className="w-full rounded-2xl border border-border bg-secondary p-4">
              <div className="mb-3 h-2 w-16 rounded bg-primary/30" />
              <div className="mb-2 h-2 w-full rounded bg-muted-foreground/10" />
              <div className="mb-2 h-2 w-3/4 rounded bg-muted-foreground/10" />
              <div className="mb-4 h-2 w-1/2 rounded bg-muted-foreground/10" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 rounded-md bg-primary/10" />
                <div className="h-12 rounded-md bg-primary/10" />
              </div>
              <div className="mt-3 h-8 rounded-md bg-primary/20" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex-1 rounded-lg border border-border bg-secondary p-3">
                <div className="mb-2 h-2 w-12 rounded bg-primary/30" />
                <div className="h-16 rounded bg-primary/10" />
              </div>
              <div className="flex-1 rounded-lg border border-border bg-secondary p-3">
                <div className="mb-2 h-2 w-16 rounded bg-primary/30" />
                <div className="h-16 rounded bg-muted-foreground/10" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-3">
              <div className="mb-2 h-2 w-20 rounded bg-primary/30" />
              <div className="flex gap-2">
                <div className="h-8 flex-1 rounded bg-muted-foreground/10" />
                <div className="h-8 flex-1 rounded bg-muted-foreground/10" />
                <div className="h-8 flex-1 rounded bg-muted-foreground/10" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="border-t border-border/50 px-6 py-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          {t(companyKey)}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">
          {t(titleKey)}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {t(descriptionKey)}
        </p>

        {/* Highlights */}
        <ul className="mt-5 flex flex-col gap-2">
          {highlightKeys.map((key) => (
            <li
              key={key}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
              {t(key)}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
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
    </div>
  );
}

export function WorkSection() {
  const { t } = useI18n();

  return (
    <section id="work" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            {t("work.title")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("work.title")}
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {t("work.subtitle")}
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <AnimatedItem delay={0}>
            <CaseStudyCard
              titleKey="work.zentria.title"
              companyKey="work.zentria.company"
              descriptionKey="work.zentria.description"
              highlightKeys={[
                "work.zentria.highlight1",
                "work.zentria.highlight2",
                "work.zentria.highlight3",
                "work.zentria.highlight4",
              ]}
              tags={["React Native", "Axios", "REST API", "TypeScript"]}
              isMobile
            />
          </AnimatedItem>
          <AnimatedItem delay={0.15}>
            <CaseStudyCard
              titleKey="work.dataxil.title"
              companyKey="work.dataxil.company"
              descriptionKey="work.dataxil.description"
              highlightKeys={[
                "work.dataxil.highlight1",
                "work.dataxil.highlight2",
                "work.dataxil.highlight3",
                "work.dataxil.highlight4",
              ]}
              tags={["Vite", "React", "Tailwind CSS", "State Management"]}
            />
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}

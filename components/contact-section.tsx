"use client"

import { Mail, ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { AnimatedSection } from "@/components/animated-section"

export function ContactSection() {
  const { t } = useI18n()

  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-8 py-16 text-center sm:px-16">
            {/* Subtle glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 bg-primary/5 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("contact.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {t("contact.subtitle")}
              </p>
              <a
                href="mailto:valeria@example.com"
                className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                {t("contact.cta")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

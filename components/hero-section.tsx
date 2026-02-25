"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Emerald glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-8"
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
              {t("hero.badge.stack")}
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
              {t("hero.badge.bilingual")}
            </span>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm text-muted-foreground">{t("hero.greeting")}</p>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t("hero.name")}
            </h1>
          </div>

          {/* Headline */}
          <p className="max-w-xl text-balance text-xl font-medium text-primary sm:text-2xl">
            {t("hero.headline")}
          </p>

          {/* Description */}
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              {t("hero.cta.work")}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary/80"
            >
              {t("hero.cta.contact")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="font-mono text-xs">scroll</span>
            <ArrowDown className="h-3 w-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

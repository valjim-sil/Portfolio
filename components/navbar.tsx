"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const { locale, setLocale, t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: "#skills", label: t("nav.skills") },
    { href: "#work", label: t("nav.work") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          {"VJ.dev"}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/80"
          >
            <span className={locale === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
            <span className="text-border">/</span>
            <span className={locale === "es" ? "text-primary" : "text-muted-foreground"}>ES</span>
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs font-medium text-foreground"
          >
            <span className={locale === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
            <span className="text-border">/</span>
            <span className={locale === "es" ? "text-primary" : "text-muted-foreground"}>ES</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

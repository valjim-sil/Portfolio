"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-mono text-sm text-muted-foreground">
            {"© 2026 Valeria Jimenez. "}{t("footer.rights")}
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  )
}

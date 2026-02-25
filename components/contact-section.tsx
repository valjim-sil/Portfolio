"use client";

import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { AnimatedSection } from "@/components/animated-section";

export function ContactSection() {
  const { locale } = useI18n();
  const title =
    locale === "es" ? "Informaci\u00f3n de contacto" : "Contact Information";
  const subtitle =
    locale === "es"
      ? "Puedes escribirme o llamarme directamente."
      : "You can email or call me directly.";
  const profileLabel = locale === "es" ? "Perfiles" : "Profiles";

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
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {subtitle}
              </p>

              <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left">
                <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-secondary">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+57 300 283 3359</span>
                </div>
                <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-secondary">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>valeriajimenez0406@gmail.com</span>
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-xl text-left">
                <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                  {profileLabel}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <a
                    href="https://www.linkedin.com/in/valeria-jim%C3%A9nez-silvera-4388ba2b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/valjim-sil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                  >
                    <Github className="h-4 w-4 text-primary" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://wa.me/573002833359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

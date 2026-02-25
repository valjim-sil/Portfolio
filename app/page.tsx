"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { WorkSection } from "@/components/work-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-border/50" />
          </div>
          <SkillsSection />
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-border/50" />
          </div>
          <WorkSection />
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-border/50" />
          </div>
          <ProjectsSection />
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-border/50" />
          </div>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

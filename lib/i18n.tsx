"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Locale = "en" | "es"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    "nav.skills": "Skills",
    "nav.work": "Work",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm",
    "hero.name": "Valeria Jimenez",
    "hero.headline": "React & React Native Specialist",
    "hero.description": "Building high-performance web & mobile solutions with TypeScript, Vite, and modern React patterns.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Get In Touch",
    "hero.badge.bilingual": "Bilingual EN / ES",
    "hero.badge.stack": "React 19 / Vite / Tailwind",
    "skills.title": "React Ecosystem",
    "skills.subtitle": "Technologies I work with daily to build modern, performant applications.",
    "skills.core": "Core",
    "skills.frontend": "Frontend Stack",
    "skills.backend": "Backend & Integrations",
    "work.title": "Professional Work",
    "work.subtitle": "Selected case studies from professional engagements.",
    "work.zentria.title": "Mobile Healthcare Integration",
    "work.zentria.company": "Zentria",
    "work.zentria.description": "Developed a React Native mobile application for healthcare management, integrating complex REST APIs with Axios for real-time patient data synchronization and appointment scheduling.",
    "work.zentria.highlight1": "React Native mobile architecture",
    "work.zentria.highlight2": "REST API consumption with Axios",
    "work.zentria.highlight3": "Healthcare workflow optimization",
    "work.zentria.highlight4": "Real-time data synchronization",
    "work.dataxil.title": "E-commerce & Automation Hub",
    "work.dataxil.company": "Dataxil SAS",
    "work.dataxil.description": "Built a high-speed frontend using Vite + React for an e-commerce platform with complex dashboard state management, automated inventory tracking, and real-time analytics.",
    "work.dataxil.highlight1": "Vite + React high-speed frontend",
    "work.dataxil.highlight2": "Complex state management",
    "work.dataxil.highlight3": "Automated inventory systems",
    "work.dataxil.highlight4": "Real-time analytics dashboard",
    "projects.title": "Open Source & Academic",
    "projects.subtitle": "Personal projects that showcase my technical range and passion for the craft.",
    "projects.crm.title": "React-TS-CRM",
    "projects.crm.description": "A full-featured CRM application with interactive dashboards, client management, and data visualization built with React, TypeScript, Tailwind CSS and Material UI.",
    "projects.ecommerce.title": "Vite-E-commerce",
    "projects.ecommerce.description": "A performant e-commerce application featuring a complete shopping cart implementation, product filtering, and optimized checkout flow built with Vite and React.",
    "contact.title": "Let's Work Together",
    "contact.subtitle": "Interested in collaborating or have a project in mind? I'd love to hear from you.",
    "contact.cta": "Send an Email",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with React & Next.js",
  },
  es: {
    "nav.skills": "Habilidades",
    "nav.work": "Trabajo",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, soy",
    "hero.name": "Valeria Jimenez",
    "hero.headline": "Especialista en React y React Native",
    "hero.description": "Construyendo soluciones web y moviles de alto rendimiento con TypeScript, Vite y patrones modernos de React.",
    "hero.cta.work": "Ver Mi Trabajo",
    "hero.cta.contact": "Contactame",
    "hero.badge.bilingual": "Bilingue EN / ES",
    "hero.badge.stack": "React 19 / Vite / Tailwind",
    "skills.title": "Ecosistema React",
    "skills.subtitle": "Tecnologias con las que trabajo diariamente para construir aplicaciones modernas y eficientes.",
    "skills.core": "Core",
    "skills.frontend": "Stack Frontend",
    "skills.backend": "Backend e Integraciones",
    "work.title": "Trabajo Profesional",
    "work.subtitle": "Casos de estudio seleccionados de compromisos profesionales.",
    "work.zentria.title": "Integracion de Salud Movil",
    "work.zentria.company": "Zentria",
    "work.zentria.description": "Desarrollo de una aplicacion movil React Native para gestion de salud, integrando APIs REST complejas con Axios para sincronizacion de datos de pacientes en tiempo real y programacion de citas.",
    "work.zentria.highlight1": "Arquitectura movil React Native",
    "work.zentria.highlight2": "Consumo de API REST con Axios",
    "work.zentria.highlight3": "Optimizacion de flujos de salud",
    "work.zentria.highlight4": "Sincronizacion de datos en tiempo real",
    "work.dataxil.title": "Hub de E-commerce y Automatizacion",
    "work.dataxil.company": "Dataxil SAS",
    "work.dataxil.description": "Construccion de un frontend de alta velocidad usando Vite + React para una plataforma de comercio electronico con gestion de estado complejo, seguimiento automatizado de inventario y analiticas en tiempo real.",
    "work.dataxil.highlight1": "Frontend de alta velocidad Vite + React",
    "work.dataxil.highlight2": "Gestion de estado complejo",
    "work.dataxil.highlight3": "Sistemas de inventario automatizados",
    "work.dataxil.highlight4": "Panel de analiticas en tiempo real",
    "projects.title": "Codigo Abierto y Academico",
    "projects.subtitle": "Proyectos personales que muestran mi rango tecnico y pasion por el oficio.",
    "projects.crm.title": "React-TS-CRM",
    "projects.crm.description": "Una aplicacion CRM completa con dashboards interactivos, gestion de clientes y visualizacion de datos construida con React, TypeScript, Tailwind CSS y Material UI.",
    "projects.ecommerce.title": "Vite-E-commerce",
    "projects.ecommerce.description": "Una aplicacion de comercio electronico eficiente con implementacion completa de carrito de compras, filtrado de productos y flujo de pago optimizado construida con Vite y React.",
    "contact.title": "Trabajemos Juntos",
    "contact.subtitle": "Interesado en colaborar o tienes un proyecto en mente? Me encantaria saber de ti.",
    "contact.cta": "Enviar un Email",
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Construido con React y Next.js",
  },
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = (key: string): string => {
    return translations[locale][key] ?? key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

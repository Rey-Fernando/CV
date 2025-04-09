"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { CoursesSection } from "@/components/courses-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PortfolioContent() {
  
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Cargando...</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <CoursesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}


"use client"

import { useState, useEffect } from "react"
import { personalInfo } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 py-10 flex flex-col items-center text-center">
        <div className="w-43 h-40 rounded-full bg-teal-500 mb-8 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
          {/* Placeholder for profile image */}
          <img src="/placeholder.png?height=128&width=128" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in">
          {personalInfo.name}
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-6 text-teal-600 dark:text-teal-400 animate-slide-up">
          {t("personalInfo.title")}
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300 animate-fade-in">
          {t("hero.tagline")}
        </p>

        <div className="flex space-x-4 mb-12">
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <Link href="#about">
          <Button variant="ghost" size="icon" className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  )
}


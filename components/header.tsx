"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { personalInfo } from "@/lib/constants"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.courses"), href: "#courses" },
    { name: t("nav.projects"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold text-teal-600 dark:text-teal-400">
          FER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild variant="outline" size="sm" className="ml-4">
              <a href="/CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                {t("download.cv")}
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="ml-2"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="outline" size="sm" className="w-full">
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                {t("download.cv.mobile")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}


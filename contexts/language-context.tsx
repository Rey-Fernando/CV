"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Proporcionar un valor por defecto al contexto
const defaultContextValue: LanguageContextType = {
  language: "es",
  setLanguage: () => {},
  t: (key: string) => key,
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Cargar traducciones dinámicamente
    import("@/lib/translations").then((module) => {
      setTranslations(module.default)
      setIsLoaded(true)
    })
  }, [])

  const t = (key: string): string => {
    if (!translations[key]) {
      return key
    }
    return translations[key][language] || key
  }

  const value = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}


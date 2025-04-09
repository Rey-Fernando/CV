"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} aria-label={t("language.toggle.label")}>
      {t("language.toggle")}
    </Button>
  )
}


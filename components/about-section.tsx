"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {t("about.title")}
        </h2>

        <Card className="max-w-3xl mx-auto border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-gray-900">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{t("about.description")}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


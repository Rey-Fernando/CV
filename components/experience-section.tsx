"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceSection() {
  const { t } = useLanguage()

  const experience = [
    {
      position: t("experience.dev.title"),
      period: t("experience.dev.period"),
      description: [t("experience.dev.desc1"), t("experience.dev.desc2"), t("experience.dev.desc3")],
    },
    {
      position: t("experience.sales.title"),
      period: t("experience.sales.period"),
      description: [t("experience.sales.desc1"), t("experience.sales.desc2"), t("experience.sales.desc3")],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {t("experience.title")}
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-50 dark:bg-gray-900"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{item.position}</CardTitle>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">{item.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Heart, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { technicalSkills } from "@/lib/constants"

export function SkillsSection() {
  const { t } = useLanguage()

  const softSkills = [
    t("skills.adaptability"),
    t("skills.teamwork"),
    t("skills.emotional"),
    t("skills.learning"),
    t("skills.empathy"),
  ]

  const languages = [
    { language: t("language.spanish"), level: t("language.native") },
    { language: t("language.english"), level: "C1" },
    { language: t("language.german"), level: "A1" },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {t("skills.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                <Code className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle className="text-xl text-gray-900 dark:text-white">{t("skills.technical.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    {t("skills.programming")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.programmingLanguages.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{t("skills.data")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.dataManagement.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{t("skills.version")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.versionControl.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{t("skills.os")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.operatingSystems.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                <Heart className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle className="text-xl text-gray-900 dark:text-white">{t("skills.soft.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                <Globe className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle className="text-xl text-gray-900 dark:text-white">{t("skills.languages.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{lang.language}</span>
                    <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CoursesSection() {
  const { t } = useLanguage()

  const courses = [
    {
      name: t("courses.cs50.title"),
      description: [
        t("courses.cs50.desc1"),
        t("courses.cs50.desc2"),
        t("courses.cs50.desc3"),
        t("courses.cs50.desc4"),
        t("courses.cs50.desc5"),
        t("courses.cs50.desc6"),
      ],
    },
    {
      name: t("courses.fcc.title"),
      description: [t("courses.fcc.desc1"), t("courses.fcc.desc2"), t("courses.fcc.desc3"), t("courses.fcc.desc4")],
    },
  ]

  return (
    <section id="courses" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {t("courses.title")}
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-50 dark:bg-gray-900"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {course.description.map((desc, i) => (
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


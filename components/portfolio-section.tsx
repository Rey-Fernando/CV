"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { projects as projectsData } from "@/lib/constants"

export function PortfolioSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("project.ecommerce.title"),
      description: t("project.ecommerce.desc"),
      technologies: projectsData[0].technologies,
      imageUrl: projectsData[0].imageUrl,
      demoUrl: projectsData[0].demoUrl,
      githubUrl: projectsData[0].githubUrl,
    },
    {
      title: t("project.tasks.title"),
      description: t("project.tasks.desc"),
      technologies: projectsData[1].technologies,
      imageUrl: projectsData[1].imageUrl,
      demoUrl: projectsData[1].demoUrl,
      githubUrl: projectsData[1].githubUrl,
    },
    {
      title: t("project.portfolio.title"),
      description: t("project.portfolio.desc"),
      technologies: projectsData[2].technologies,
      imageUrl: projectsData[2].imageUrl,
      demoUrl: projectsData[2].demoUrl,
      githubUrl: projectsData[2].githubUrl,
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {t("portfolio.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("project.demo")}
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    {t("project.code")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { personalInfo } from "@/lib/constants"
import { ContactForm } from "./contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {t("contact.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{t("contact.info.title")}</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-teal-600 dark:text-teal-400" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-teal-600 dark:text-teal-400" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-teal-600 dark:text-teal-400" />
                  <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                {t("contact.social.title")}
              </h3>

              <div className="flex space-x-4">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{t("contact.form.title")}</h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


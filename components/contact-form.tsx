"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const response = await fetch("https://formspree.io/f/xyzenpbz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      toast({
        title: t("contact.toast.title"),
        description: t("contact.toast.desc"),
      })
      e.currentTarget?.reset()
      setIsSent(true) 
    } else {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo más tarde.",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder={t("contact.form.name")}
          required
          className="bg-white dark:bg-gray-800"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-white dark:bg-gray-800"
        />
      </div>
      <div>
        <Input
          type="text"
          name="subject"
          placeholder={t("contact.form.subject")}
          required
          className="bg-white dark:bg-gray-800"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder={t("contact.form.message")}
          required
          className="min-h-[120px] bg-white dark:bg-gray-800"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        disabled={isSubmitting || isSent}>
  {isSent
    ? "✅ Enviado"
    : isSubmitting
    ? t("contact.form.sending")
    : t("contact.form.send")}
      </Button>
    </form>
  )
}

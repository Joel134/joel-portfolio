'use client'

import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ContactLink {
  id: string
  type: string
  title: string
  value: string
  link: string
}

export default function Contact() {
  const [contacts, setContacts] = useState<ContactLink[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setContacts(data.contact))
  }, [])

  if (!contacts.length) return null

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-white/70 text-lg mb-12">
          Looking to collaborate or have a question? Reach out through any of these channels.
        </p>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ContactCardProps {
  contact: ContactLink
}

function ContactCard({ contact }: ContactCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github size={24} />
      case 'linkedin':
        return <Linkedin size={24} />
      case 'email':
        return <Mail size={24} />
      default:
        return null
    }
  }

  return (
    <a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg border border-white/10 hover:border-purple-primary/60 bg-gradient-to-br from-white/8 to-white/5 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-primary/20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-purple-primary/20 text-purple-accent group-hover:bg-purple-primary/40 group-hover:text-purple-light transition-all">
            {getIcon(contact.type)}
          </div>
          <div>
            <div className="text-white/60 text-sm font-medium">{contact.title}</div>
            <div className="text-white text-lg font-semibold group-hover:text-purple-accent transition-colors">
              {contact.value}
            </div>
          </div>
        </div>
        <ArrowRight className="text-white/40 group-hover:text-white/80 group-hover:translate-x-2 transition-all" size={20} />
      </div>
    </a>
  )
}

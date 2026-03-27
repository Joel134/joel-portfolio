'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
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
        <h2 className="text-3xl font-semibold mb-8 text-white/90">Contact</h2>

        <div className="space-y-3">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/[0.07] transition-all"
            >
              <div className="text-white/50">
                {contact.type === 'github' && <Github size={20} />}
                {contact.type === 'linkedin' && <Linkedin size={20} />}
                {contact.type === 'email' && <Mail size={20} />}
              </div>
              <div>
                <div className="text-xs text-white/40">{contact.title}</div>
                <div className="text-sm text-white/70">{contact.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

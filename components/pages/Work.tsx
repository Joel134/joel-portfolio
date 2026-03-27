'use client'

import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Project {
  id: string
  name: string
  platform: string
  description: string
  featured?: boolean
  tags: string[]
  link?: string
}

export default function Work() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
  }, [])

  if (!projects.length) return null

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-semibold mb-12 text-white/90">Work</h2>

        {/* Simple grid - Jan style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/[0.07] transition-all"
    >
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-white/90">
          {project.name}
        </h3>
        <span className="text-xs text-white/50 mt-1 block">{project.platform}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-white/50 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded text-xs text-white/40 bg-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

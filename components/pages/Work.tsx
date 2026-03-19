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
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-16">Featured Work</h2>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Featured project (spans 2 columns on lg) */}
          {featuredProject && (
            <div className="lg:col-span-2">
              <ProjectCard project={featuredProject} featured={true} />
            </div>
          )}

          {/* Right column - Other projects (stacked) */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative rounded-xl border border-white/10 hover:border-purple-primary/60
        overflow-hidden transition-all duration-300 bg-gradient-to-br from-white/8 to-white/5
        hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-primary/20
        flex flex-col h-full
        ${featured ? 'p-8' : 'p-6'}
      `}
    >
      {/* Left border accent for featured */}
      {featured && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-primary to-teal-primary"></div>
      )}

      {/* Content wrapper */}
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3
              className={`
              font-bold text-white mb-2 group-hover:text-purple-accent transition-colors
              ${featured ? 'text-3xl' : 'text-xl'}
            `}
            >
              {project.name}
            </h3>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-primary/20 text-purple-accent border border-purple-primary/40">
              {project.platform}
            </div>
          </div>
          <ExternalLink
            className="text-white/40 group-hover:text-white/80 transition-colors flex-shrink-0 mt-1"
            size={24}
          />
        </div>

        {/* Description */}
        <p
          className={`
          text-white/70 mb-6 leading-relaxed flex-1 group-hover:text-white/90 transition-colors
          ${featured ? 'text-base' : 'text-sm'}
        `}
        >
          {project.description}
        </p>

        {/* Tags - sticky to bottom */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-primary/20 to-teal-primary/20 text-purple-accent border border-purple-primary/40 group-hover:border-purple-primary/80 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

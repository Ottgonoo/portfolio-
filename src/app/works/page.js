'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ExternalLink, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
]

const projects = [
  {
    title: 'E-siticom.com',
    description:
      'A website designed for users of the financial accounting group, intended for receiving and accessing information.',
    tech: ['React', 'Tailwind CSS', 'Api integration'],
    image: '/aa.png',
    link: 'https://e-siticom.com/',
  },
  {
    title: 'University system',
    description:
      'An intelligent system designed for university students, allowing them, their parents, and teachers to access and manage grades, academic performance, exams, and all related information in one place.',
    tech: ['React', 'Next.js', 'Shadcn ui', 'Api integration', 'Tailwind CSS'],
    image: '/Univercity.png',
    link: 'https://lms.zokhiomj.mn/mn',
  },
  {
    title: 'ERP system',
    description:
      'An organization management ERP system designed to streamline workflows and improve efficiency for employees.',
    tech: ['React', 'Next.js', 'Shadcn ui', 'Api integration', 'Tailwind CSS'],
    image: '/hamaague.jpg',
    image1: '/hamaague.jpg',
    link: '#',
  },
  {
    title: 'Citizen-district communication platform',
    description:
      'A system designed to streamline and digitalize the flow of information from local districts to citizens, improving communication and collaboration between residents and district offices',
    tech: ['React', 'Next.js', 'Shadcn ui', 'Api integration', 'Tailwind CSS'],
    image: '/soon.jpg',
    link: '#',
  },
]

export default function WorksPage() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const isActive = href => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('#')) return false
    return pathname === href
  }

  const handleMobileLinkClick = href => {
    setIsMobileMenuOpen(false)
    router.push(href)
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_0%,rgba(236,72,153,0.28),transparent_60%)]" />

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-6 py-6 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:px-12">
        <div className="flex items-center gap-3 sm:justify-self-start">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-base font-semibold text-white/90 shadow-[0_0_30px_rgba(129,140,248,0.35)]">
            <Image
              src="/Profile.png"
              alt="Otgontuya logo"
              width={70}
              height={70}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md sm:flex sm:justify-self-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                isActive(href)
                  ? 'text-white bg-white/10 shadow-[0_4px_12px_rgba(168,85,247,0.3)] font-semibold'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Mobile Navigation - FIXED */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 sm:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <nav className="absolute top-20 left-4 right-4 flex flex-col gap-2 rounded-2xl border border-white/20 bg-gray-900 p-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleMobileLinkClick(href)}
                  className={`px-4 py-3 rounded-lg text-white transition-colors text-left w-full ${
                    isActive(href)
                      ? 'bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.35),transparent_60%)] font-semibold'
                      : 'hover:bg-white/10' 
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header> 


      <main className="relative z-10 flex flex-1 flex-col items-center px-6 py-10 sm:px-12">
        <div className="relative z-10 flex w-full max-w-6xl flex-col gap-6">
          <div
            className={`text-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              My works
            </h1>
            <p className="mt-4 text-white/80">
              A collection of projects I&apos;ve worked on, showcasing my skills
              in front-end development and design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_8px_20px_rgba(67,56,202,0.18)] transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_12px_30px_rgba(67,56,202,0.3)] ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Single image */}
                <div className="relative w-full h-28 sm:h-32 rounded-lg border border-white/10 overflow-hidden mb-3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="text-sm font-semibold text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-white/70 mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Link at bottom right */}
                <div className="mt-auto pt-2 flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md text-[11px] text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Visit Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="relative z-10 flex items-center justify-between px-6 pb-8 sm:px-12">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white/80">
            N
          </span>
          <span>© 2025 Portfolio.</span>
        </div> 

        <div className="hidden gap-3 text-xs text-white/40 sm:flex">
          <Link href="#privacy" className="hover:text-white/70">
            Privacy
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="#terms" className="hover:text-white/70">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  )
}

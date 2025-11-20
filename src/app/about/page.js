'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
]

export default function AboutPage() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = href => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href
  }

  const handleMobileLinkClick = href => {
    setIsMobileMenuOpen(false)
    router.push(href)
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_0%,rgba(236,72,153,0.28),transparent_60%)]" />

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
          <div className="fixed inset-0 z-[9999] sm:hidden">
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
                      ? 'bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent font-semibold'
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

      <main className="relative z-10 flex flex-1 flex-col items-center px-6 py-16 sm:px-12">
        <div className="relative z-10 flex w-full max-w-5xl flex-col gap-12">
          <div
            className={`flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative h-[280px] w-[240px] sm:h-[260px] sm:w-[220px] shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_45px_rgba(30,64,175,0.25)] transition-all duration-500 hover:scale-105">
              <Image
                src="/loooov.jpg"
                alt="Portrait of Otgontuya"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 240px, 220px"
                priority
              />
            </div>
            <div className="flex flex-col gap-5 text-center sm:text-left w-full">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                About Me
              </h1>
              <div className="space-y-4 text-base sm:text-base text-white/80 leading-relaxed">
                <p>
                  Hi, my name is{' '}
                  <span className="font-semibold text-white">Otgontuya</span>. I
                  am 20 years old and a Frontend developer with 1.4+ years of
                  experience working on internal ERP systems. I graduated from
                  Indra Cyber Institute after completing 1 year of programming
                  studies.
                </p>
                <p>
                  I use React and Next.js to develop web applications, and
                  Tailwind CSS and UI libraries to create reusable UI
                  components. I connect to APIs and work closely with backend
                  teams. I maintain a code base that is organized, clean,
                  readable, and reusable.
                </p>
                <p>
                  I have worked on ERP, university systems, government, and
                  citizen intelligence systems. I am a fast learner and have
                  excellent communication and interpersonal skills, which help
                  me collaborate effectively in diverse team environments.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_10px_25px_rgba(67,56,202,0.22)] transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* What I do */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  What I do
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Responsive web apps with React & Next.js</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Design system implementation & documentation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>
                      High-fidelity prototypes with motion & micro-interactions
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Building and maintaining internal ERP systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>
                      Creating reusable UI components using Tailwind CSS & UI
                      libraries
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>
                      Integrating APIs and collaborating closely with backend
                      teams
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Writing clean, organized, and scalable code</span>
                  </div>
                </div>
              </div>

              {/* Toolset */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  Toolset
                </h2>
                <div className="space-y-4 text-sm text-white/80">
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Frontend Frameworks & Libraries
                    </h3>
                    <p>Next.js, React, Tailwind CSS, Shadcn UI</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Languages</h3>
                    <p>TypeScript, JavaScript, Node.js, Python, SQL</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Design & Collaboration Tools
                    </h3>
                    <p>Figma</p>
                  </div>
                </div>
              </div>

              {/* My hobbies */}
              <div className="lg:col-span-3 pt-6 border-t border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  My hobbies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-white/80">
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Handicrafts
                    </h3>
                    <p>Crochet & knitting; small hand-made textile projects</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Cultural interests
                    </h3>
                    <p>History of Mongolia; traditional songs</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Baking & Cooking
                    </h3>
                    <p>
                      Making traditional layered cookies , cakes, and other
                      homemade treats
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Other</h3>
                    <p>
                      Small crafts and creative projects by hand, reading books
                      and watching movies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

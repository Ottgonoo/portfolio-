'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Facebook, Instagram, MessageCircle, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
]

export default function ContactPage() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_0%,rgba(236,72,153,0.28),transparent_60%)]" />

      {/* Header with Mobile Navigation */}
      <header className="relative z-50 flex items-center justify-between px-4 py-6 sm:px-8 lg:px-12 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        {/* Logo */}
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
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/60 hidden sm:block">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium backdrop-blur-md sm:flex sm:justify-self-center lg:gap-2 lg:px-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`relative px-3 py-2 rounded-full transition-all duration-300 lg:px-4 ${
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

        {/* Mobile Navigation */}
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

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center px-4 py-8 sm:px-8 lg:px-12">
        <div className="relative z-10 flex w-full max-w-3xl flex-col gap-8 sm:gap-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              Let&apos;s work together
            </h1>
            <p className="mt-3 text-sm text-white/80 sm:text-base sm:mt-4 max-w-2xl mx-auto">
              If you have a work proposal or collaboration in mind, you can
              reach out to me anytime!
            </p>
          </div>

          {/* Email & Phone + Social */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div
              className={`rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_30px_rgba(67,56,202,0.18)] transition-all duration-500 hover:scale-105 sm:rounded-3xl sm:p-6 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-base font-semibold text-white mb-3 sm:text-lg">
                Email & Phone
              </h2>
              <p className="text-sm text-white/80 mb-2 break-all sm:text-base">
                Email:{' '}
                <a
                  href="mailto:otgontuyanergui838@gmail.com"
                  className="hover:text-white break-all"
                >
                  otgontuyanergui838@gmail.com
                </a>
              </p>
              <p className="text-sm text-white/80 sm:text-base">
                Phone:{' '}
                <a href="tel:+97680874188" className="hover:text-white">
                  +976 80874188
                </a>
              </p>
            </div>

            <div
              className={`rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_30px_rgba(236,72,153,0.18)] transition-all duration-500 hover:scale-105 sm:rounded-3xl sm:p-6 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-base font-semibold text-white mb-3 sm:text-lg">
                Social
              </h2>
              <div className="flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-4 sm:text-base">
                <a
                  href="https://www.facebook.com/otgontuaa.n.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/ottgonoo/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.viber.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm">Viber</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className={`rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_15px_35px_rgba(67,56,202,0.22)] flex flex-col gap-4 w-full transition-all duration-1000 sm:rounded-3xl sm:p-6 sm:gap-6 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors text-sm sm:text-base sm:px-4 sm:py-3"
                  placeholder="Your name"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors text-sm sm:text-base sm:px-4 sm:py-3"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors resize-none text-sm sm:text-base sm:px-4 sm:py-3 sm:rows={6}"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="self-center w-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 sm:w-auto sm:px-10 sm:py-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

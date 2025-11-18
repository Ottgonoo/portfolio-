'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.startsWith("#")) {
      return false;
    }

    return pathname === href;
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_0%,rgba(236,72,153,0.28),transparent_60%)]" />

      <header className="relative z-10 flex items-center justify-between px-4 py-6 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:px-12">
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
                  ? "text-white bg-white/10 shadow-[0_4px_12px_rgba(168,85,247,0.3)] font-semibold"
                  : "text-white/60 hover:text-white hover:bg-white/5"
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
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="absolute top-full left-0 right-0 mt-2 mx-6 sm:hidden flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map(({ label, href }, index) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 animate-in fade-in slide-in-from-left-4 ${
                  isActive(href)
                    ? "text-white bg-white/10 shadow-[0_4px_12px_rgba(168,85,247,0.3)] font-semibold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center mt-8 sm:px-12">
        <div className="relative z-10 flex w-full max-w-3xl flex-col gap-10">
          <div className={`text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s work together
            </h1>
            <p className="mt-4 text-white/80">
              If you have a work proposal or collaboration in mind, you can reach out to me via my social media channels. I&apos;d be happy to connect!
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email & Phone */}
            <div className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_30px_rgba(67,56,202,0.18)] transition-all duration-500 hover:scale-105 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <h2 className="text-lg font-semibold text-white mb-3">Email & Phone</h2>
              <p className="text-white/80 mb-2 break-all">
                Email: <a href="mailto:otgontuyanergui838@gmail.com" className="hover:text-white transition-colors">
                  otgontuyanergui838@gmail.com
                </a>
              </p>
              <p className="text-white/80">
                Phone: <a href="tel:+97680874188" className="hover:text-white transition-colors">
                  +976 80874188
                </a>
              </p>
            </div>

            {/* Social */}
            <div className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_30px_rgba(236,72,153,0.18)] transition-all duration-500 hover:scale-105 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <h2 className="text-lg font-semibold text-white mb-3">Social</h2>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-sm text-white/80">
                <a href="https://www.facebook.com/otgontuaa.n.2025" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  Facebook
                </a>
                <a href="https://www.instagram.com/ottgonoo/?hl=en" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
                <a href="https://www.viber.com/en" className="flex items-center gap-2 hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  Viber
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className={`rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_15px_35px_rgba(67,56,202,0.22)] flex flex-col gap-6 w-full transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="self-center w-full sm:w-auto rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 px-10 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>


      
    </div>
  );
}

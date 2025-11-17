'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
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

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/download-cv");
      
      if (!response.ok) {
        throw new Error("CV татаж авахад алдаа гарлаа");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Otgontuya_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CV татаж авахад алдаа гарлаа:", error);
      // Алдаа гарвал шууд холбоос нээх
      window.open("https://d3j8moiuywv8cf.cloudfront.net/fa4c6873-f8fd-4594-aed3-71f1e1ce0ce4", "_blank");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_0%,rgba(236,72,153,0.28),transparent_60%)]" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:px-12">
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

      <main
        id="home"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-12"
      >
        <div className="flex flex-col items-center gap-6 sm:max-w-3xl">
          <h1 className={`text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              Otgontuya
            </span>
            <br className="hidden sm:block" />
            a Front-End Developer
          </h1>

          <div className={`flex flex-col items-center justify-center gap-10 mt-20 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="max-w-2xl text-base text-white/70 sm:text-lg">
              I build sleek, high-performing front-end experiences using Next.js and modern web technologies. From dynamic layouts to pixel-perfect interactions, I&apos;m passionate about transforming creative ideas into responsive, accessible, and user-focused digital interfaces.
            </p>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500  mt-5 to-purple-600 px-10 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(168,85,247,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 cursor-pointer"
            >
              Download CV
            </button>
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
  );
}

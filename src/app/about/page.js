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

export default function AboutPage() {
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

            <main className="relative z-10 flex flex-1 flex-col items-center px-6 py-16 sm:px-12">
                <div className="relative z-10 flex w-full max-w-5xl flex-col gap-12">
                    <div className={`flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10 transition-all duration-1000 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
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
                                    Hi, my name is <span className="font-semibold text-white">Otgontuya</span>. I am 20 years old and a Frontend developer with 1.4+ years of experience working on internal ERP systems. I graduated from Indra Cyber Institute after completing 1 year of programming studies.
                                </p>
                                <p>
                                    I use React and Next.js to develop web applications, and Tailwind CSS and UI libraries to create reusable UI components. I connect to APIs and work closely with backend teams. I maintain a code base that is organized, clean, readable, and reusable.
                                </p>
                                <p>
                                    I have worked on ERP, university systems, government, and citizen intelligence systems. I am a fast learner and have excellent communication and interpersonal skills, which help me collaborate effectively in diverse team environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_10px_25px_rgba(67,56,202,0.22)] transition-all duration-1000 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

{/* What I do */}
<div className="lg:col-span-2">
  <h2 className="text-2xl font-bold text-white mb-5 pb-3 border-b border-white/10">
    What I do
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {[
      "Responsive web apps with React & Next.js",
      "Design system implementation & documentation",
      "High-fidelity prototypes with motion & micro-interactions",
      "Building and maintaining internal ERP systems",
      "Creating reusable UI components using Tailwind CSS & UI libraries",
      "Integrating APIs and collaborating closely with backend teams",
      "Writing clean, organized, and scalable code",
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
      >
        <span className="text-purple-400 mt-0.5">•</span>
        <span className="text-white/80 text-sm">{item}</span>
      </div>
    ))}
  </div>
</div>

{/* Toolset */}
<div>
  <h2 className="text-2xl font-bold text-white mb-5 pb-3 border-b border-white/10">
    Toolset
  </h2>

  <div className="space-y-5">
    <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
      <h3 className="text-white font-semibold mb-1">Frontend</h3>
      <p className="text-white/70 text-sm">Next.js, React, Tailwind CSS, Shadcn UI</p>
    </div>

    <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
      <h3 className="text-white font-semibold mb-1">Languages</h3>
      <p className="text-white/70 text-sm">TypeScript, JavaScript, Node.js, Python, SQL</p>
    </div>

    <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
      <h3 className="text-white font-semibold mb-1">Design & Tools</h3>
      <p className="text-white/70 text-sm">Figma</p>
    </div>
  </div>
</div>

{/* My hobbies */}
<div className="lg:col-span-3 pt-8 border-t border-white/10">
  <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-white/10">
    My hobbies
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        title: "Handicrafts",
        text: "Crochet & knitting; small hand-made textile projects",
      },
      {
        title: "Cultural interests",
        text: "History of Mongolia; traditional songs",
      },
      {
        title: "Baking & Cooking",
        text: "Making traditional layered cookies, cakes & treats",
      },
      {
        title: "Other",
        text: "Creative hand projects, reading, watching movies",
      },
    ].map((hobby, i) => (
      <div
        key={i}
        className="p-5 rounded-xl bg-white/5 hover:bg-white/10 transition"
      >
        <h3 className="font-semibold text-white text-base mb-1">
          {hobby.title}
        </h3>
        <p className="text-white/70 text-sm">{hobby.text}</p>
      </div>
    ))}
  </div>
</div>
</div>

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


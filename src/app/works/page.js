'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const projects = [
  {
    title: "E-siticom.com",
    description:
      "A website designed for users of the financial accounting group, intended for receiving and accessing information.",
    tech: ["React", "Tailwind CSS", "Api integration"],
    image: "/aa.png",
    link: "https://e-siticom.com/",
  },
  {
    title: "University system",
    description:
      "An intelligent system where students, parents, and teachers can access and manage grades, performance, exams, and all related academic data.",
    tech: ["React", "Next.js", "Shadcn UI", "Api integration", "Tailwind CSS"],
    image: "/Univercity.png",
    link: "https://lms.zokhiomj.mn/mn",
  },
  {
    title: "ERP system",
    description:
      "A complete ERP solution to improve organizational workflow, efficiency, and internal communication.",
    tech: ["React", "Next.js", "Shadcn UI", "Api integration", "Tailwind CSS"],
    image: "/hamaague.jpg",
    link: "#",
  },
  {
    title: "Citizen-district platform",
    description:
      "A system that streamlines information flow between local districts and citizens, enhancing communication & digital services.",
    tech: ["React", "Next.js", "Shadcn UI", "Api integration", "Tailwind CSS"],
    image: "/soon.jpg",
    link: "#",
  },
];

export default function WorksPage() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_0%,rgba(236,72,153,0.28),transparent_60%)]" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-12">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(129,140,248,0.35)] bg-white/10">
            <Image
              src="/Profile.png"
              alt="Profile"
              width={70}
              height={70}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm uppercase tracking-[0.3em] text-white/60">
            Portfolio
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`px-4 py-2 rounded-full transition-all ${
                isActive(href)
                  ? "bg-white/10 text-white shadow-[0_4px_12px_rgba(168,85,247,0.3)] font-semibold"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="absolute top-full left-0 right-0 mt-2 mx-6 sm:hidden flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 z-50">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all ${
                  isActive(href)
                    ? "bg-white/10 text-white shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-1 flex-col items-center px-6 py-5 sm:px-12">
        <div className="w-full max-w-6xl flex flex-col gap-6">
          <div
            className={`text-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"

            }`}
          >
            <h1 className=" text-3xl font-semibold sm:text-4xl">My works </h1>
            <p className="mt-4 text-white/80">
              A collection of projects I’ve built focusing on UI/UX and frontend engineering.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group relative flex flex-col rounded-xl border border-white/10 
                bg-white/5 p-4 shadow-[0_8px_20px_rgba(67,56,202,0.18)] 
                transition-all duration-300 hover:border-white/20 hover:bg-white/10 
                hover:shadow-[0_12px_30px_rgba(67,56,202,0.3)]
                ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/9] rounded-lg border border-white/10 overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold mb-1 line-clamp-1">{project.title}</h3>

                {/* Description */}
                <p className="text-xs text-white/70 mb-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 border border-white/10 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Button - fixed bottom right */}
                <div className="mt-auto flex justify-end">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md 
                      text-[11px] text-white/80 hover:bg-white/20 transition"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Visit
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-between px-6 pb-8 sm:px-12">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <span className="h-8 w-8 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white/80">
            N
          </span>
          <span>© 2025 Portfolio.</span>
        </div>

        <div className="hidden sm:flex gap-3 text-xs text-white/40">
          <Link href="#privacy" className="hover:text-white/70">
            Privacy
          </Link>
          <span>•</span>
          <Link href="#terms" className="hover:text-white/70">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  );
}

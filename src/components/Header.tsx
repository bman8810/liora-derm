"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Cosmetic Dermatology", href: "/services/cosmetic" },
  { name: "Medical Dermatology", href: "/services/medical" },
  { name: "Injectables", href: "/services/injectables" },
  { name: "Lasers", href: "/services/lasers" },
  { name: "Sofwave", href: "/services/sofwave" },
  { name: "Surgical Dermatology", href: "/services/surgical" },
  { name: "Pediatric Dermatology", href: "/services/pediatric" },
  { name: "Spa Services", href: "/services/spa" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl tracking-wide text-soft-black">
            LIORA
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">
            Dermatology & Aesthetics
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm tracking-wide uppercase text-neutral-600 hover:text-soft-black transition-colors">
              Services
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-lg shadow-xl border border-neutral-100 py-2 min-w-[240px]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-neutral-600 hover:text-soft-black hover:bg-cream transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="text-sm tracking-wide uppercase text-neutral-600 hover:text-soft-black transition-colors"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-sm tracking-wide uppercase text-neutral-600 hover:text-soft-black transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className="text-sm tracking-wide uppercase text-neutral-600 hover:text-soft-black transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm tracking-wide uppercase text-neutral-600 hover:text-soft-black transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+12124334569"
            className="text-sm text-neutral-500 hover:text-soft-black transition-colors"
          >
            212.433.GLOW
          </a>
          <a
            href="https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-white text-sm tracking-wide uppercase px-6 py-3 rounded-full transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-neutral-800 transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-neutral-800 transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-neutral-800 transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 px-6 py-6 space-y-4">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
            Services
          </p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block text-sm text-neutral-600 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {s.name}
            </Link>
          ))}
          <hr className="border-neutral-100" />
          <Link href="/about" className="block text-sm text-neutral-600 py-1">
            About
          </Link>
          <Link
            href="/gallery"
            className="block text-sm text-neutral-600 py-1"
          >
            Gallery
          </Link>
          <Link href="/blog" className="block text-sm text-neutral-600 py-1">
            Blog
          </Link>
          <Link
            href="/contact"
            className="block text-sm text-neutral-600 py-1"
          >
            Contact
          </Link>
          <a
            href="https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gold text-white text-sm tracking-wide uppercase px-6 py-3 rounded-full mt-4"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
